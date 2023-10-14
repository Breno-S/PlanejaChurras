import db from '../../database';

function salvaChurras(dados) {
	console.log(dados);
	// db.transaction(tx => {
	// 	tx.executeSql("INSERT INTO Churras (nome_churras, qtd_adultos, qtd_jovens, qtd_criancas, preco_total, preco_pessoa) VALUES (?, ?, ?, ?, ?, ?);",
	// 		[...Object.values(dummyDataChurras)],
	// 		(_, resultSet) => console.log("Registro adicionado à tabela 'Churras'"),
	// 		(_, error) => console.error("Erro criando registro em 'Churras'", error)
	// 	)
	// });
}

export {
	salvaChurras
}