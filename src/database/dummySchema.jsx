/*
* ESTE ARQUIVO CRIA UM ESQUEMA PARA SER UTILIZADO DURANTE O DESENVOLVIMENTO DO APLICATIVO
*/

import db from ".";

import { dummyDataProdutos, dummyDataChurras, dummyDataInfo_Churras, dummyDataLocal_Churras, dummyDataItem_Churras } from "./db_reference/dummyData"; 

export default function createDummySchema() {
	
/******************************************************************************/
/******************************** PRODUTO *************************************/
/******************************************************************************/

////////////////////////// SOMENTE PARA TESTES
	db.transaction(tx => {
		tx.executeSql("DROP TABLE IF EXISTS Produto;",
		[],
		// (_, resultSet) => console.log("Tabela 'Produto' deletada"),
		(_, resultSet) => null,
		(_, error) => console.error("Erro deletando tabela 'Produto'", error)
		)
	});
////////////////////////// SOMENTE PARA TESTES

	db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS Produto (pk_produto INTEGER PRIMARY KEY AUTOINCREMENT, nome_produto VARCHAR(64), preco_unitario DECIMAL(8,2), categoria VARCHAR(24) , medida VARCHAR(10) , CONSTRAINT unique_produto UNIQUE (nome_produto, categoria));",
			[],
			// (_, resultSet) => console.log("Tabela 'Produto' criada"),
			(_, resultSet) => null,
			(_, error) => console.error("Erro criando tabela 'Produto'", error)
		)
	});

	// Popular tabela
	for (let i = 0; i < dummyDataProdutos.length; i++) {
		db.transaction(tx => {
			tx.executeSql("INSERT INTO Produto (nome_produto, preco_unitario, categoria, medida) VALUES (?, ?, ?, ?);",
				[...Object.values(dummyDataProdutos[i])],
				// (_, resultSet) => console.log("Registro adicionado à tabela 'Produto'"),
				(_, resultSet) => null,
				(_, error) => console.error("Erro criando registro em 'Produto'", error)
			)
		});
	}

/******************************************************************************/
/******************************** CHURRAS *************************************/
/******************************************************************************/

////////////////////////// SOMENTE PARA TESTES
	db.transaction(tx => {
		tx.executeSql("DROP TABLE IF EXISTS Churras;",
		[],
		// (_, resultSet) => console.log("Tabela 'Churras' deletada"),
		(_, resultSet) => null,
		(_, error) => console.error("Erro deletando tabela 'Churras'", error)
		)
	});
////////////////////////// SOMENTE PARA TESTES

	db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS Churras (pk_churras INTEGER PRIMARY KEY AUTOINCREMENT, nome_churras VARCHAR(128) , qtd_adultos TINYINT(2) , qtd_jovens TINYINT(2) , qtd_criancas TINYINT(2) , preco_total DECIMAL(10, 2), preco_pessoa DECIMAL(10, 2), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP); CREATE TRIGGER update_churras_modtime AFTER UPDATE ON Churras FOR EACH ROW BEGIN UPDATE Churras SET updated_at = CURRENT_TIMESTAMP WHERE pk_churras = OLD.pk_churras; END;",
			[],
			// (_, resultSet) => console.log("Tabela 'Churras' criada"),
			(_, resultSet) => null,
			(_, error) => console.error("Erro criando tabela 'Churras'", error)
		)
	});

	// Popular tabela
	

/******************************************************************************/
/*************************** INFO_CHURRAS *************************************/
/******************************************************************************/

////////////////////////// SOMENTE PARA TESTES
	db.transaction(tx => {
		tx.executeSql("DROP TABLE IF EXISTS Info_Churras;",
		[],
		// (_, resultSet) => console.log("Tabela 'Info_Churras' deletada"),
		(_, resultSet) => null,
		(_, error) => console.error("Erro deletando tabela 'Info_Churras'", error)
		)
	});
////////////////////////// SOMENTE PARA TESTES

	db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS Info_Churras (pk_info_churras INTEGER PRIMARY KEY AUTOINCREMENT, fk_churras INT(11) , nome_anfitriao VARCHAR(64) , telefone VARCHAR(16) , FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras));",
			[],
			// (_, resultSet) => console.log("Tabela 'Info_Churras' criada"),
			(_, resultSet) => null,
			(_, error) => console.error("Erro criando tabela 'Info_Churras'", error)
		)
	});

	// Popular tabela
	

/******************************************************************************/
/*************************** LOCAL_CHURRAS ************************************/
/******************************************************************************/

////////////////////////// SOMENTE PARA TESTES
	db.transaction(tx => {
		tx.executeSql("DROP TABLE IF EXISTS Local_Churras;",
		[],
		// (_, resultSet) => console.log("Tabela 'Local_Churras' deletada"),
		(_, resultSet) => null,
		(_, error) => console.error("Erro deletando tabela 'Local_Churras'", error)
		)
	});
////////////////////////// SOMENTE PARA TESTES

	db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS Local_Churras (pk_local_churras INTEGER PRIMARY KEY AUTOINCREMENT, fk_churras INT(11) , cep VARCHAR(9) , logradouro VARCHAR(64) , numero VARCHAR(8) , complemento VARCHAR(8), municipio VARCHAR(32) , estado VARCHAR(20) , FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras));",
			[],
			// (_, resultSet) => console.log("Tabela 'Local_Churras' criada"),
			(_, resultSet) => null,
			(_, error) => console.error("Erro criando tabela 'Local_Churras'", error)
		)
	});

	// Popular tabela
	

/******************************************************************************/
/*************************** ITEM_CHURRAS *************************************/
/******************************************************************************/

////////////////////////// SOMENTE PARA TESTES
	db.transaction(tx => {
		tx.executeSql("DROP TABLE IF EXISTS Item_Churras;",
		[],
		// (_, resultSet) => console.log("Tabela 'Item_Churras' deletada"),
		(_, resultSet) => null,
		(_, error) => console.error("Erro deletando tabela 'Item_Churras'", error)
		)
	});
////////////////////////// SOMENTE PARA TESTES

	db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS Item_Churras (pk_item_churras INTEGER PRIMARY KEY AUTOINCREMENT, fk_churras INT(11) , fk_produto INT(11) , quantidade DECIMAL(8, 2) , FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras), FOREIGN KEY(fk_produto) REFERENCES Produto (pk_produto));",
			[],
			// (_, resultSet) => console.log("Tabela 'Item_Churras' criada"),
			(_, resultSet) => null,
			(_, error) => console.error("Erro criando tabela 'Item_Churras'", error)
		)
	});

	// Popular tabela
	
}