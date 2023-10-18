// TUDO MEDIDO EM GRAMAS E MILILITROS, SUPRIMENTOS SÃO DESCARTÁVEIS

export default function gerarListaCompras(infoInput){
	let listaCompras = {};

	// const infoInput = {
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

	const qtdConvidados = parseInt(infoInput.qtdAdultos) + parseInt(infoInput.qtdJovens) + parseInt(infoInput.qtdCriancas);

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
	const paoDeAlhoPessoa = 4;
	const queijoCoalhoPessoa = 4;
	const farofaProntaPessoa = 100; //gramas
	const paoFrancesPessoa = 200; //gramas (4 pães)  

	// carnes
	const totalCarne = (infoInput.qtdAdultos*400 + infoInput.qtdJovens*300 + infoInput.qtdCriancas*200);

	const totalCarvão = totalCarne * 1.5;

	const totalAlcool = alcoolPessoa * infoInput.qtdAdultos;
	const totalNotAlcool = notAlcoolPessoa * qtdConvidados;
	const totalAgua = aguaPessoa * qtdConvidados;

	const tiposCarnes = getTiposCarnes(infoInput);
	const [comprarBovinas, comprarSuinas, comprarFrango] = getQtdCarnes(tiposCarnes);

	// Preencher a lista de compras
	dividirCarnes(comprarBovinas, comprarSuinas, comprarFrango);
	dividirBebidas();
	dividirAcompanhamentos();
	dividirSuprimentos();

	// Arredondar valores maiores que 100
	for (const key in listaCompras) {
		if (Object.hasOwnProperty.call(listaCompras, key)) {
            if (listaCompras[key] > 100) {
                listaCompras[key] = arredondar(listaCompras[key]);
            }
		}
	}

	// console.log(listaCompras);

///////////////////////////////////////////////////////////////////////////////////////////////////

	function getTiposCarnes(infoInput) {
		// 1: bovina / 2: suina / 4: frango /
		// 3: bovina + suina / 5: bovina+frango / 6: suina+frango 
		// 7: bovina + suina + frango

		const selecionouBovina = (infoInput.cBovinas.length > 0) ? true : false;
		const selecionouSuina = (infoInput.cSuinas.length > 0) ? true : false;
		const selecionouFrango = (infoInput.cFrango.length > 0) ? true : false;

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
		if (optBovinas = infoInput.cBovinas.length) {
			for (let i = 0; i < optBovinas; i++) {
			    eval(`listaCompras.${infoInput.cBovinas[i]} = comprarBovinas / optBovinas`);
			}
		}

		if (optSuinas = infoInput.cSuinas.length) {
			for (let i = 0; i < optSuinas; i++) {
				eval(`listaCompras.${infoInput.cSuinas[i]} = comprarSuinas / optSuinas`);
			}
		}

		if (optFrango = infoInput.cFrango.length) {
			for (let i = 0; i < optFrango; i++) {
				eval(`listaCompras.${infoInput.cFrango[i]} = comprarFrango / optFrango`);
			}
		}
	}

	function dividirBebidas() {
		if (infoInput.Bebidas.length == 0 && infoInput.BebidasAlc.length == 0) {
			return;
		}

		// Dividir o total de bebidas alcoólicas entre as opções selecionadas
		if (optBebidasAlc = infoInput.BebidasAlc.length) {
			for (let i = 0; i < optBebidasAlc; i++) {
				eval(`listaCompras.${infoInput.BebidasAlc[i]} = totalAlcool / optBebidasAlc`);
			}
		}

		const selecionouAgua = (infoInput.Bebidas.includes("Água")) ? 1 : 0;

		// Dividir o total de bebidas não alcoólicas entre as opções selecionadas
		if (optBebidas = infoInput.Bebidas.length - selecionouAgua) {
			for (let i = 0; i < optBebidas; i++) {
				if (infoInput.Bebidas[i] == "Água") {
					continue;
				} else {
					eval(`listaCompras.${infoInput.Bebidas[i]} = totalNotAlcool / (optBebidas)`);
				}
			}
		}

		// Água
		if (selecionouAgua == 1) {
			listaCompras.Água = totalAgua;
		}
	}

	function dividirAcompanhamentos() {
		if (infoInput.Acomp.length == 0) {
			return;
		}

		for(let i = 0; i < infoInput.Acomp.length; i++) {
			switch (infoInput.Acomp[i]) {
				case "Arroz":
					listaCompras.Arroz = arrozPessoa*qtdConvidados;
					break;
				case "Pão de Alho":
					listaCompras["Pão de Alho"] = paoDeAlhoPessoa*qtdConvidados;
					break;
				case "Queijo Coalho":
					listaCompras["Queijo Coalho"] = queijoCoalhoPessoa*qtdConvidados;
					break;
				case "Farofa Pronta":
					listaCompras["Farofa Pronta"] = farofaProntaPessoa*qtdConvidados;                
					break;
				case "Pão Francês":
					listaCompras["Pão Francês"] = paoFrancesPessoa*qtdConvidados;
					break;
				default:
					break;
			}
		}
	}

	function dividirSuprimentos() {
		if (infoInput.Suprim.length == 0) {
			return;
		}

		for(let i = 0; i < infoInput.Suprim.length; i++) {
			switch (infoInput.Suprim[i]) {
				case "Carvão":
					listaCompras.Carvão = totalCarvão;
					break;
				case "Copos":
					listaCompras.Copos = coposPessoa*qtdConvidados;
					break;
				case "Guardanapos":
					listaCompras.Guardanapos = guardanaposPessoa*qtdConvidados;
					break;
				case "Pratos":
					listaCompras.Pratos = pratosPessoa*qtdConvidados;                
					break;
				case "Talheres":
					listaCompras.Talheres = talheresPessoa*qtdConvidados;
					break;
				default:
					break;
			}
		}
	}

	function arredondar(valor) {
		return Math.round(valor / 10) * 10;
	}

	return listaCompras;
}