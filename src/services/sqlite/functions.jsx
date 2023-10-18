import db from '../../database';

function fetchPrice(productName) {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT preco_unitario FROM Produto WHERE nome_produto LIKE ?",
                [productName],
                (_, resultSet) => {
                    if (resultSet.rows.length > 0) {
                        const preco = resultSet.rows.item(0).preco_unitario;
                        resolve(preco);
                    } else {
                        reject(`Produto '${productName}' não encontrado no banco de dados.`);
                    }
                },
                (_, error) => {
                    reject(`Erro obtendo preço de '${productName}': ${error}`);
                }
            );
        });
    });
}


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

async function getPreco(nome) {
	await fetchPrice(nome).then(result => {
		return result;
	})
}

export {
	salvaChurras,
	fetchPrice,
	getPreco,
}