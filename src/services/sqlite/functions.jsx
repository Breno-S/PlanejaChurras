import db from '../../database';

async function fetchPrice(productName) {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT preco_unitario FROM Produto WHERE nome_produto LIKE ?",
                ['%'+productName+'%'],
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
    let idChurras = 0;
	db.transaction(tx => {
		tx.executeSql("INSERT INTO Churras (nome_churras, qtd_adultos, qtd_jovens, qtd_criancas, preco_total, preco_pessoa) VALUES (?, ?, ?, ?, ?, ?);",
			[dados.nome_churras, dados.qtd_adultos, dados.qtd_jovens, dados.qtd_criancas, dados.precoTotal, dados.precoPessoa],
			(_, resultSet) => {
                console.log("Registro adicionado à tabela 'Churras'");
                idChurras = resultSet.insertId;
            },
			(_, error) => console.error("Erro criando registro em 'Churras'", error)
		)
	});

	db.transaction(tx => {
		tx.executeSql("INSERT INTO Local_Churras (fk_churras, cep, logradouro, numero, complemento, municipio, estado) VALUES (?, ?, ?, ?, ?, ?, ?);",
			[idChurras, dados.cep, dados.logradouro, dados.numero, dados.complemento, dados.municipio ,dados.estado],
			(_, resultSet) => console.log("Registro adicionado à tabela 'Local_Churras'"),
			(_, error) => console.error("Erro criando registro em 'Local_Churras'", error)
		)
	});

	db.transaction(tx => {
		tx.executeSql("INSERT INTO Info_Churras (fk_churras, nome_anfitriao, telefone) VALUES (?, ?, ?);",
			[idChurras, dados.nome, dados.telefone],
			(_, resultSet) => console.log("Registro adicionado à tabela 'Info_Churras'"),
			(_, error) => console.error("Erro criando registro em 'Info_Churras'", error)
		)
	});

    dados[0].cBovinas.map((item, index) => {
        if(item.selected) {
            //buscar o id do produto
            let idProduto = 0;
            db.transaction(tx => {
            tx.executeSql("SELECT pk_produto FROM Produto WHERE nome_produto = ?;",
                [item.value],
                (_, resultSet) => {
                    console.log("Produto encontrado:", item.value);
                    idProduto = resultSet.rows._array;
                },
                (_, error) => console.error("Produto não encontrado", error)
            )
            });
            
            db.transaction(tx => {
            tx.executeSql("INSERT INTO Item_Churras (fk_churras, fk_produto, quantidade) VALUES (?, ?, ?);",
                [idChurras, idProduto, item.quantidade],
                (_, resultSet) => console.log("Registro adicionado à tabela 'Info_Churras'"),
                (_, error) => console.error("Erro criando registro em 'Info_Churras'", error)
            )
            }); 
        }
    })
}

// async function getPreco(nome) {
// 	await fetchPrice(nome).then(result => {
// 		return result;
// 	})
// }


const getPreco = async (nome) => {
    // console.log('nome', nome);
    try {
        await fetchPrice(nome)
        .then((resolve => {
            // console.log(resolve);
            return resolve;
        }))
        .catch(error => console.log(error));
        // return result;
    } catch (error) {
        // Lidar com o erro aqui, se necessário.
        console.error('Erro ao Pegar Preço: '+error);
    }
}


export {
	salvaChurras,
	fetchPrice,
	getPreco,
}