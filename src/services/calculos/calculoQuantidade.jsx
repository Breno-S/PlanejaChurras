import { getPreco } from "../sqlite/functions";

async function addQuantidade(resumo) {
	const qtdConvidados = parseInt(resumo[0].qtdAdultos) + parseInt(resumo[0].qtdJovens) + parseInt(resumo[0].qtdCriancas);

	// bebidas
	const alcoolPessoa = 1500;
	const notAlcoolPessoa = 1000;
	const aguaPessoa = 500;

	// suprimentos
	const coposPessoa = 5;
	const talheresPessoa = 2; 
	const pratosPessoa = 3;
	const guardanaposPessoa = 3;

	// acompanhamentos
	const arrozPessoa = 60; // gramas
	const paoDeAlhoPessoa = 160; // gramas
	const queijoCoalhoPessoa = 1; // espeto
	const farofaProntaPessoa = 100; // gramas
	const paoFrancesPessoa = 200; // gramas (4 pães)  

	// carnes
	const totalCarne = (resumo[0].qtdAdultos*400 + resumo[0].qtdJovens*300 + resumo[0].qtdCriancas*200);

	const totalCarvão = totalCarne * 1.5;

	const totalAlcool = alcoolPessoa * parseInt(resumo[0].qtdAdultos);
	const totalNotAlcool = notAlcoolPessoa * qtdConvidados;
	const totalAgua = aguaPessoa * qtdConvidados;

	const tiposCarnes = getTiposCarnes(resumo);
	const [comprarBovinas, comprarSuinas, comprarFrango] = getQtdCarnes(tiposCarnes);

	// Adicionar a quantidade de cada categoria
	dividirCarnes(comprarBovinas, comprarSuinas, comprarFrango);
	dividirBebidas();
	dividirAcompanhamentos();
	dividirSuprimentos();

	arredondarQuantidades(resumo[0].cBovinas);
	arredondarQuantidades(resumo[0].cSuinas);
	arredondarQuantidades(resumo[0].cFrango);
	arredondarQuantidades(resumo[0].Bebidas);
	arredondarQuantidades(resumo[0].Acomp);
	arredondarQuantidades(resumo[0].Suprim);

///////////////////////////////////////////////////////////////////////////////////////////////////

	function getTiposCarnes(resumo) {
		// 1: bovina / 2: suina / 4: frango /
		// 3: bovina + suina / 5: bovina+frango / 6: suina+frango 
		// 7: bovina + suina + frango

		let selecionouBovina = false;
		let selecionouSuina  = false;
		let selecionouFrango = false;

		for (let i = 0; i < resumo[0].cBovinas.length; i++) {
			if (resumo[0].cBovinas[i].selected == true) {
				selecionouBovina = true;
				break;
			}			
		}

		for (let i = 0; i < resumo[0].cSuinas.length; i++) {
			if (resumo[0].cSuinas[i].selected == true) {
				selecionouSuina = true;
				break;
			}			
		}

		for (let i = 0; i < resumo[0].cFrango.length; i++) {
			if (resumo[0].cFrango[i].selected == true) {
				selecionouFrango = true;
				break;
			}			
		}

		// Defina as máscaras de bits para cada variável
		const PRIMEIRO = 1;  // Máscara para o primeiro bit (001)
		const SEGUNDO = 2;   // Máscara para o segundo bit  (010)
		const TERCEIRO = 4;  // Máscara para o terceiro bit (100)

		// Variável que irá armazenar a representação em binário das carnes escolhidas
		let tiposCarnes = 0;

		// Verifique quais variáveis existem e atualize o resultado conforme necessário
		if (selecionouBovina) tiposCarnes = tiposCarnes | PRIMEIRO;
		if (selecionouSuina) tiposCarnes = tiposCarnes | SEGUNDO;
		if (selecionouFrango) tiposCarnes = tiposCarnes | TERCEIRO;

		return tiposCarnes;
	}

	function getQtdCarnes(tiposCarnes) {
		let comprarBovinas = 0;
		let comprarSuinas = 0;
		let comprarFrango = 0;

		
		switch (tiposCarnes) {
			case 1:
				comprarBovinas = totalCarne;
				comprarSuinas = 0;
				comprarFrango = 0;
				break;
			case 2:
				comprarBovinas = 0;
				comprarSuinas = totalCarne;
				comprarFrango = 0;
				break;
			case 3:
				comprarBovinas = totalCarne * 0.65;
				comprarSuinas = totalCarne * 0.35;
				comprarFrango = 0;
				break;
			case 4:
				comprarBovinas = 0;
				comprarSuinas = 0;
				comprarFrango = totalCarne;
				break;
			case 5:
				comprarBovinas = totalCarne * 0.75;
				comprarSuinas = 0;
				comprarFrango = totalCarne * 0.25;
				break;
			case 6:
				comprarBovinas = 0;
				comprarSuinas = totalCarne * 0.6;
				comprarFrango = totalCarne * 0.4;
				break;
			case 7:
				comprarBovinas = totalCarne * 0.6;
				comprarSuinas = totalCarne * 0.3;
				comprarFrango = totalCarne * 0.1;
				break;
			default:
				break;
		}

		return [comprarBovinas, comprarSuinas, comprarFrango];
	}

	// Dividir o total de cada carne para cada uma das carnes da respectiva categoria
	function dividirCarnes(comprarBovinas, comprarSuinas, comprarFrango) {
		for (let i = 0; i < resumo[0].cBovinas.length; i++) {
			if (resumo[0].cBovinas[i].selected == false) {
				resumo[0].cBovinas.splice(i, 1);
			}
		}

		for (let i = 0; i < resumo[0].cBovinas.length; i++) {
			resumo[0].cBovinas[i].quantidade = comprarBovinas / resumo[0].cBovinas.length;
		}

		// suinas
		for (let i = 0; i < resumo[0].cSuinas.length; i++) {
			if (resumo[0].cSuinas[i].selected == false) {
				resumo[0].cSuinas.splice(i, 1);
			}
		}

		for (let i = 0; i < resumo[0].cSuinas.length; i++) {
			resumo[0].cSuinas[i].quantidade = comprarSuinas / resumo[0].cSuinas.length;
		}

		// frango
		for (let i = 0; i < resumo[0].cFrango.length; i++) {
			if (resumo[0].cFrango[i].selected == false) {
				resumo[0].cFrango.splice(i, 1);
			}
		}

		for (let i = 0; i < resumo[0].cFrango.length; i++) {
			resumo[0].cFrango[i].quantidade = comprarFrango / resumo[0].cFrango.length;
		}
	}

	function dividirBebidas() {
		if (resumo[0].Bebidas.length == 0) {
			return;
		}

		let optBebidasAlc = 0;
		let selecionouSuco = false;
		let selecionouRefrigerante = false;
		let selecionouAgua = false;

		for (let i = 0; i < resumo[0].Bebidas.length; i++) {
			if (resumo[0].Bebidas[i].selected == false) {
				resumo[0].Bebidas.splice(i, 1);
			}
			else if (resumo[0].Bebidas[i].alcoholic == true) {
				optBebidasAlc += 1;
			}
			else if (resumo[0].Bebidas[i].label == "Suco") {
				selecionouSuco = true;
			}
			else if (resumo[0].Bebidas[i].label == "Refrigerante") {
				selecionouRefrigerante = true;
			}
			else if (resumo[0].Bebidas[i].label == "Água") {
				selecionouAgua = true;
			}
		}

		if (optBebidasAlc == 2) {
			for (let i = 0; i < resumo[0].Bebidas.length; i++) {
				if (resumo[0].Bebidas[i].label == "Cerveja") {
					resumo[0].Bebidas[i].quantidade = arredondarParaCimaMult(totalAlcool * 0.7, 350) / 350; // arredondado para multiplos de 350 (para dividir em latas de 350 ml)
				}
				if (resumo[0].Bebidas[i].label == "Caipirinha") {
					resumo[0].Bebidas[i].quantidade = Math.ceil((totalAlcool * 0.3) / 1000);
				}
			}
		} else if (optBebidasAlc == 1){
			for (let i = 0; i < resumo[0].Bebidas.length; i++) {
				if (resumo[0].Bebidas[i].label == "Cerveja") {
					resumo[0].Bebidas[i].quantidade = arredondarParaCimaMult(totalAlcool, 350) / 350; // arredondado para multiplos de 350 (para dividir em latas de 350 ml)
				}
				else if (resumo[0].Bebidas[i].label == "Caipirinha") {
					resumo[0].Bebidas[i].quantidade = Math.ceil((totalAlcool * 0.3) / 1000);
				}
			}
		}

		// NOT ALCOHOL
		if (selecionouSuco && selecionouRefrigerante) {
			for (let i = 0; i < resumo[0].Bebidas.length; i++) {
				if (resumo[0].Bebidas[i].label == "Suco") {
					resumo[0].Bebidas[i].quantidade = Math.ceil((totalNotAlcool * 0.3) / 1000); // litros
				}
				else if (resumo[0].Bebidas[i].label == "Refrigerante") {
					resumo[0].Bebidas[i].quantidade = arredondarParaCimaPar((totalNotAlcool * 0.7) / 1000) / 2;// arredondado para multiplos de 2 (para dividir em garrafas de 2 litros)
				}
			}
		} else if (selecionouSuco || selecionouRefrigerante) {
			for (let i = 0; i < resumo[0].Bebidas.length; i++) {
				if ((resumo[0].Bebidas[i].alcoholic == false) && (resumo[0].Bebidas[i].label == "Suco")) {
					resumo[0].Bebidas[i].quantidade = Math.ceil((totalNotAlcool) / 1000);
				}
				else if ((resumo[0].Bebidas[i].alcoholic == false) && (resumo[0].Bebidas[i].label == "Refrigerante")) {
					resumo[0].Bebidas[i].quantidade = arredondarParaCimaPar((totalNotAlcool) / 1000) / 2;
				}
			}
		}

		// Água
		if (selecionouAgua) {
			for (let i = 0; i < resumo[0].Bebidas.length; i++) {
				if (resumo[0].Bebidas[i].label == "Água") {
					resumo[0].Bebidas[i].quantidade = totalAgua / 1000; // preço calculado em litros
				}
			}
		}
	}


	function dividirAcompanhamentos() {
		if (resumo[0].Acomp.length == 0) {
			return;
		}

		for(let i = 0; i < resumo[0].Acomp.length; i++) {
			if (resumo[0].Acomp[i].selected == true) {
				switch (resumo[0].Acomp[i].label) {
					case "Arroz":
						resumo[0].Acomp[i].quantidade = arredondarParaCimaMult(arrozPessoa*qtdConvidados, 1000); // pacote de 1000g
						break;
					case "Pão de Alho":
						resumo[0].Acomp[i].quantidade = paoDeAlhoPessoa*qtdConvidados; //g
						break;
					case "Queijo Coalho":
						resumo[0].Acomp[i].quantidade = Math.ceil(queijoCoalhoPessoa*qtdConvidados / 7); // pacote de 7 uni.
						break;
					case "Farofa Pronta":
						resumo[0].Acomp[i].quantidade = arredondarParaCimaMult(farofaProntaPessoa*qtdConvidados, 500) / 500; // pacote de 500g
						break;
					case "Pão Francês":
						resumo[0].Acomp[i].quantidade = paoFrancesPessoa*qtdConvidados; //g
						break;
					default:
						break;
				}
			} else {
				resumo[0].Acomp.splice(i, 1);
			}
		}
	}

	function dividirSuprimentos() {
		if (resumo[0].Suprim.length == 0) {
			return;
		}

		for(let i = 0; i < resumo[0].Suprim.length; i++) {
			if (resumo[0].Suprim[i].selected == true) {
				switch (resumo[0].Suprim[i].label) {
					case "Carvão":
						resumo[0].Suprim[i].quantidade = Math.ceil(totalCarvão / 1000); // pacote de 1kg
						break;
					case "Copos":
						resumo[0].Suprim[i].quantidade = arredondarParaCimaMult(coposPessoa*qtdConvidados, 50) / 50; // pacote de 50 unidades
						break;
					case "Guardanapos":
						resumo[0].Suprim[i].quantidade = arredondarParaCimaMult(guardanaposPessoa*qtdConvidados, 50) / 50; // pacote de 50 unidades
						break;
					case "Pratos":
						resumo[0].Suprim[i].quantidade = arredondarParaCimaMult(pratosPessoa*qtdConvidados, 50) / 50; // pacote de 50 unidades
						break;
					case "Talheres":
						resumo[0].Suprim[i].quantidade = arredondarParaCimaMult(talheresPessoa*qtdConvidados, 50) / 50; // pacote de 50 unidades
						break;
					default:
						break;
				}
			} else {
				resumo[0].Suprim.splice(i, 1);
			}
		}
	}

	// Arredondar valores maiores que 100
	function arredondarQuantidades(categoria) {
		categoria.map((item, index) => {
			if (item.hasOwnProperty("quantidade")) {
				if (item.quantidade > 100) {
					const qtd = arredondar(item.quantidade);
					delete categoria[index].quantidade;
					categoria[index].quantidade = qtd;
				}
			}
		});
	}

	function arredondar(valor) {
		return Math.round(valor / 10) * 10;
	}

	function arredondarParaCimaMult(numero, multiplo) {
		var numeroArredondado = Math.ceil(numero);
		var resultado = Math.ceil(numeroArredondado / multiplo) * multiplo;
		return resultado;
	}
	
	function arredondarParaCimaPar(numero) { //<- GOOGLE'S FATHER <- referências bibliográficas
		var numeroArredondado = Math.ceil(numero);
		if (numeroArredondado == 1) {
			numeroArredondado = 2;
		}
		else if (numeroArredondado % 2 !== 0) {
			numeroArredondado -= 1;
		}
		return numeroArredondado;
	}
}

export default addQuantidade;
