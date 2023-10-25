import { getPreco } from "../sqlite/functions";

function gerarnovoResumo(dados){
	let novoResumo = dados;

	// const dados = {
	// 	qtdAdultos: 1,
	// 	qtdJovens: 1,
	// 	qtdCriancas: 1,
	// 	cBovinas: ["Alcatra", "Picanha"],
	// 	cSuinas: [],
	// 	cFrango: ["Coxa", "Coração"],
	// 	Bebidas: ["Refrigerante", "Suco", "Água"],
	// 	BebidasAlc: ["Cerveja", "Caipirinha"],
	// 	Acomp: [],
	// 	Suprim: []
	// };

	const qtdConvidados = parseInt(novoResumo[0].qtdAdultos) + parseInt(novoResumo[0].qtdJovens) + parseInt(novoResumo[0].qtdCriancas);

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
	const totalCarne = (novoResumo[0].qtdAdultos*400 + novoResumo[0].qtdJovens*300 + novoResumo[0].qtdCriancas*200);

	const totalCarvão = totalCarne * 1.5;

	const totalAlcool = alcoolPessoa * parseInt(novoResumo[0].qtdAdultos);
	const totalNotAlcool = notAlcoolPessoa * qtdConvidados;
	const totalAgua = aguaPessoa * qtdConvidados;

	const tiposCarnes = getTiposCarnes(novoResumo);
	const [comprarBovinas, comprarSuinas, comprarFrango] = getQtdCarnes(tiposCarnes);

	// Preencher a lista de compras
	dividirCarnes(comprarBovinas, comprarSuinas, comprarFrango);
	dividirBebidas();
	dividirAcompanhamentos();
	dividirSuprimentos();

	// Arredondar valores maiores que 100
	// for (const key in novoResumo) {
	// 	if (Object.hasOwnProperty.call(novoResumo, key)) {
    //         if (novoResumo[key] > 100) {
    //             novoResumo[key] = arredondar(novoResumo[key]);
    //         }
	// 	}
	// }

	// Criar um novo objeto transformando a quantidade em um objeto com quantidade e preço
	// let novonovoResumo = {};
	// for (let item in novoResumo) {
	// 	if (novoResumo.hasOwnProperty(item)) {
	// 		novonovoResumo[`${item}`] = {
	// 			quantidade: novoResumo[item],
	// 			preco: getPreco(item)
	// 		};
	// 	}
	// }

///////////////////////////////////////////////////////////////////////////////////////////////////

	function getTiposCarnes(novoResumo) {
		// 1: bovina / 2: suina / 4: frango /
		// 3: bovina + suina / 5: bovina+frango / 6: suina+frango 
		// 7: bovina + suina + frango

		let selecionouBovina = false;
		let selecionouSuina  = false;
		let selecionouFrango = false;

		for (let i = 0; i < novoResumo[0].cBovinas.length; i++) {
			if (novoResumo[0].cBovinas[i].selected == true) {
				selecionouBovina = true;
				break;
			}			
		}

		for (let i = 0; i < novoResumo[0].cSuinas.length; i++) {
			if (novoResumo[0].cSuinas[i].selected == true) {
				selecionouSuina = true;
				break;
			}			
		}

		for (let i = 0; i < novoResumo[0].cFrango.length; i++) {
			if (novoResumo[0].cFrango[i].selected == true) {
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

	function dividirCarnes(comprarBovinas, comprarSuinas, comprarFrango) {
		// Dividir o total de cada carne para cada uma das carnes da respectiva categoria
		let optBovinas = 0;
		for (let i = 0; i < novoResumo[0].cBovinas.length; i++) {
			if (novoResumo[0].cBovinas[i].selected == true) {
				// console.log(novoResumo[0].cBovinas[i].value);
				optBovinas += 1;
			}
		}

		for (let i = 0; i < novoResumo[0].cBovinas.length; i++) {
			if (novoResumo[0].cBovinas[i].selected == true) {
				// console.log(novoResumo[0].cBovinas[i].value);
				novoResumo[0].cBovinas[i].quantidade = comprarBovinas / optBovinas;
			}
		}

		// suinas
		let optSuinas = 0;
		for (let i = 0; i < novoResumo[0].cSuinas.length; i++) {
			if (novoResumo[0].cSuinas[i].selected == true) {
				// console.log(novoResumo[0].cSuinas[i].value);
				optSuinas += 1;
			}
		}

		for (let i = 0; i < novoResumo[0].cSuinas.length; i++) {
			if (novoResumo[0].cSuinas[i].selected == true) {
				// console.log(novoResumo[0].cSuinas[i].value);
				novoResumo[0].cSuinas[i].quantidade = comprarSuinas / optSuinas;
			}
		}

		// frango
		let optFrango = 0;
		for (let i = 0; i < novoResumo[0].cFrango.length; i++) {
			if (novoResumo[0].cFrango[i].selected == true) {
				// console.log(novoResumo[0].cFrango[i].value);
				optFrango += 1;
			}
		}

		for (let i = 0; i < novoResumo[0].cFrango.length; i++) {
			if (novoResumo[0].cFrango[i].selected == true) {
				// console.log(novoResumo[0].cFrango[i].value);
				novoResumo[0].cFrango[i].quantidade = comprarFrango / optFrango;
			}
		}
	}

	function dividirBebidas() {
		if (novoResumo[0].Bebidas.length == 0) {
			return;
		}

		let optBebidasAlc = 0;
		for (let i = 0; i < novoResumo[0].Bebidas.length; i++) {
			if (novoResumo[0].Bebidas[i].alcoholic == true && novoResumo[0].Bebidas[i].selected == true) {
				optBebidasAlc += 1;
			}
		}

		if (optBebidasAlc == 2) {
			for (let i = 0; i < novoResumo[0].Bebidas.length; i++) {
				if (novoResumo[0].Bebidas[i].label == "Cerveja") {
					novoResumo[0].Bebidas[i].quantidade = arredondarParaCimaMult(totalAlcool * 0.7, 350) / 350; // arredondado para multiplos de 350 (para dividir em latas de 350 ml)
				}
				if (novoResumo[0].Bebidas[i].label == "Caipirinha") {
					novoResumo[0].Bebidas[i].quantidade = Math.ceil((totalAlcool * 0.3) / 1000);
				}
			}
		} else {
			for (let i = 0; i < novoResumo[0].Bebidas.length; i++) {
				if (novoResumo[0].Bebidas[i].alcoholic == true && novoResumo[0].Bebidas[i].selected == true) {
					novoResumo[0].Bebidas[i].quantidade = totalAlcool / optBebidasAlc;
				}
			}
		}

		// NOT ALCOHOL
		let selecionouSuco = false;
		let selecionouRefrigerante = false ;

		for (let i = 0; i < novoResumo[0].Bebidas.length; i++) {
			if (novoResumo[0].Bebidas[i].label == "Suco" && novoResumo[0].Bebidas[i].selected == true) {
				selecionouSuco = true;
			}
			else if (novoResumo[0].Bebidas[i].label == "Refrigerante" && novoResumo[0].Bebidas[i].selected == true) {
				selecionouRefrigerante = true;
			}
		
			
		} 

		if (selecionouSuco && selecionouRefrigerante) {
			for (let i = 0; i < novoResumo[0].Bebidas.length; i++) {
				if (novoResumo[0].Bebidas[i].label == "Suco" && novoResumo[0].Bebidas[i].selected == true) {
					novoResumo[0].Bebidas[i].quantidade = arredondarParaCimaPar((totalNotAlcool * 0.7) / 1000);// arredondado para multiplos de 2 (para dividir em garrafas de 2 litros)
				}
				else if (novoResumo[0].Bebidas[i].label == "Refrigerante" && novoResumo[0].Bebidas[i].selected == true) {
					novoResumo[0].Bebidas[i].quantidade = Math.ceil((totalNotAlcool * 0.3) / 1000); // litros
				} else if ((novoResumo[0].Bebidas[i].alcoholic == false) && (novoResumo[0].Bebidas[i].selected == true) && (novoResumo[0].Bebidas[i].label == "Água")) {
					novoResumo[0].Bebidas[i].quantidade = totalAgua / 1000;
				}
			}
		} else {
			for (let i = 0; i < novoResumo[0].Bebidas.length; i++) {
				if ((novoResumo[0].Bebidas[i].alcoholic == false) && (novoResumo[0].Bebidas[i].selected == true) && (novoResumo[0].Bebidas[i].label != "Água")) {
					novoResumo[0].Bebidas[i].quantidade = totalNotAlcool;
				} else if ((novoResumo[0].Bebidas[i].alcoholic == false) && (novoResumo[0].Bebidas[i].selected == true) && (novoResumo[0].Bebidas[i].label == "Água")) {
					novoResumo[0].Bebidas[i].quantidade = totalAgua;
				}
			}
		}
	}


	function dividirAcompanhamentos() {
		if (novoResumo[0].Acomp.length == 0) {
			return;
		}

		for(let i = 0; i < novoResumo[0].Acomp.length; i++) {
			if (novoResumo[0].Acomp[i].selected == true) {
				switch (novoResumo[0].Acomp[i].label) {
					case "Arroz":
						novoResumo[0].Acomp[i].quantidade = arredondarParaCimaMult(arrozPessoa*qtdConvidados, 1000); // pacote de 1000g
						break;
					case "Pão de Alho":
						novoResumo[0].Acomp[i].quantidade = paoDeAlhoPessoa*qtdConvidados; //g
						break;
					case "Queijo Coalho":
						novoResumo[0].Acomp[i].quantidade = Math.ceil(queijoCoalhoPessoa*qtdConvidados / 7); // pacote de 7 uni.
						break;
					case "Farofa Pronta":
						novoResumo[0].Acomp[i].quantidade = arredondarParaCimaMult(farofaProntaPessoa*qtdConvidados, 500) / 500; // pacote de 500g
						break;
					case "Pão Francês":
						novoResumo[0].Acomp[i].quantidade = paoFrancesPessoa*qtdConvidados; //g
						break;
					default:
						break;
				}
			}
		}
	}

	function dividirSuprimentos() {
		if (novoResumo[0].Suprim.length == 0) {
			return;
		}

		for(let i = 0; i < novoResumo[0].Suprim.length; i++) {
			if (novoResumo[0].Suprim[i].selected == true) {
				switch (novoResumo[0].Suprim[i].label) {
					case "Carvão":
						novoResumo[0].Suprim[i].quantidade = Math.ceil(totalCarvão / 1000); // pacote de 1kg
						break;
					case "Copos":
						novoResumo[0].Suprim[i].quantidade = arredondarParaCimaMult(coposPessoa*qtdConvidados, 50) / 50; // pacote de 50 unidades
						break;
					case "Guardanapos":
						novoResumo[0].Suprim[i].quantidade = arredondarParaCimaMult(guardanaposPessoa*qtdConvidados, 50) / 50; // pacote de 50 unidades
						break;
					case "Pratos":
						novoResumo[0].Suprim[i].quantidade = arredondarParaCimaMult(pratosPessoa*qtdConvidados, 50) / 50; // pacote de 50 unidades
						break;
					case "Talheres":
						novoResumo[0].Suprim[i].quantidade = arredondarParaCimaMult(talheresPessoa*qtdConvidados, 50) / 50; // pacote de 50 unidades
						break;
					default:
						break;
				}
			}
		}
	}

	function arredondar(valor) {
		return Math.round(valor / 10) * 10;
	}
	// q situação ein rapaziada X_X
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

	// return novonovoResumo;
	return novoResumo;
}
export default gerarnovoResumo;
