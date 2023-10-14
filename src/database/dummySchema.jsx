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
		tx.executeSql("CREATE TABLE IF NOT EXISTS Produto (pk_produto INTEGER PRIMARY KEY AUTOINCREMENT, nome_produto VARCHAR(64), preco_unitario DECIMAL(8,2), categoria VARCHAR(24) NOT NULL, medida VARCHAR(10) NOT NULL, CONSTRAINT unique_produto UNIQUE (nome_produto, categoria));",
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
		tx.executeSql("CREATE TABLE IF NOT EXISTS Churras (pk_churras INTEGER PRIMARY KEY AUTOINCREMENT, nome_churras VARCHAR(128) NOT NULL, qtd_adultos TINYINT(2) NOT NULL, qtd_jovens TINYINT(2) NOT NULL, qtd_criancas TINYINT(2) NOT NULL, preco_total DECIMAL(10, 2), preco_pessoa DECIMAL(10, 2), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP); CREATE TRIGGER update_churras_modtime AFTER UPDATE ON Churras FOR EACH ROW BEGIN UPDATE Churras SET updated_at = CURRENT_TIMESTAMP WHERE pk_churras = OLD.pk_churras; END;",
			[],
			// (_, resultSet) => console.log("Tabela 'Churras' criada"),
			(_, resultSet) => null,
			(_, error) => console.error("Erro criando tabela 'Churras'", error)
		)
	});

	// Popular tabela
	for (let i = 0; i < 3; i++) {
		db.transaction(tx => {
			tx.executeSql("INSERT INTO Churras (nome_churras, qtd_adultos, qtd_jovens, qtd_criancas, preco_total, preco_pessoa) VALUES (?, ?, ?, ?, ?, ?);",
				[...Object.values(dummyDataChurras)],
				// (_, resultSet) => console.log("Registro adicionado à tabela 'Churras'"),
				(_, resultSet) => null,
				(_, error) => console.error("Erro criando registro em 'Churras'", error)
			)
		});
	}

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
		tx.executeSql("CREATE TABLE IF NOT EXISTS Info_Churras (pk_info_churras INTEGER PRIMARY KEY AUTOINCREMENT, fk_churras INT(11) NOT NULL, nome_anfitriao VARCHAR(64) NOT NULL, telefone VARCHAR(16) NOT NULL, FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras));",
			[],
			// (_, resultSet) => console.log("Tabela 'Info_Churras' criada"),
			(_, resultSet) => null,
			(_, error) => console.error("Erro criando tabela 'Info_Churras'", error)
		)
	});

	// Popular tabela
	for (let i = 0; i < 3; i++) {
		db.transaction(tx => {
			tx.executeSql("INSERT INTO Info_Churras (fk_churras, nome_anfitriao, telefone) VALUES (?, ?, ?);",
				[i+1, dummyDataInfo_Churras.nome_anfitriao, dummyDataInfo_Churras.telefone],
				// (_, resultSet) => console.log("Registro adicionado à tabela 'Info_Churras'"),
				(_, resultSet) => null,
				(_, error) => console.error("Erro criando registro em 'Info_Churras'", error)
			)
		});

	}

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
		tx.executeSql("CREATE TABLE IF NOT EXISTS Local_Churras (pk_local_churras INTEGER PRIMARY KEY AUTOINCREMENT, fk_churras INT(11) NOT NULL, cep VARCHAR(9) NOT NULL, logradouro VARCHAR(64) NOT NULL, numero VARCHAR(8) NOT NULL, complemento VARCHAR(8), municipio VARCHAR(32) NOT NULL, estado VARCHAR(20) NOT NULL, FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras));",
			[],
			// (_, resultSet) => console.log("Tabela 'Local_Churras' criada"),
			(_, resultSet) => null,
			(_, error) => console.error("Erro criando tabela 'Local_Churras'", error)
		)
	});

	// Popular tabela
	for (let i = 0; i < 3; i++) {
		db.transaction(tx => {
			tx.executeSql("INSERT INTO Local_Churras (fk_churras, cep, logradouro, numero, complemento, municipio, estado) VALUES (?, ?, ?, ?, ?, ?, ?);",
				[i+1, dummyDataLocal_Churras.cep, dummyDataLocal_Churras.logradouro, dummyDataLocal_Churras.numero, dummyDataLocal_Churras.complemento, dummyDataLocal_Churras.municipio, dummyDataLocal_Churras.estado],
				// (_, resultSet) => console.log("Registro adicionado à tabela 'Local_Churras'"),
				(_, resultSet) => null,
				(_, error) => console.error("Erro criando registro em 'Local_Churras'", error)
			)
		});
	}

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
		tx.executeSql("CREATE TABLE IF NOT EXISTS Item_Churras (pk_item_churras INTEGER PRIMARY KEY AUTOINCREMENT, fk_churras INT(11) NOT NULL, fk_produto INT(11) NOT NULL, quantidade DECIMAL(8, 2) NOT NULL, FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras));",
			[],
			// (_, resultSet) => console.log("Tabela 'Item_Churras' criada"),
			(_, resultSet) => null,
			(_, error) => console.error("Erro criando tabela 'Item_Churras'", error)
		)
	});

	// Popular tabela
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < dummyDataItem_Churras.length; j++) {
			db.transaction(tx => {
				tx.executeSql("INSERT INTO Item_Churras (fk_churras, fk_produto, quantidade) VALUES (?, ?, ?);",
					[i+1, dummyDataItem_Churras[j].fk_produto, dummyDataItem_Churras[j].quantidade],
					// (_, resultSet) => console.log("Registro adicionado à tabela 'Item_Churras'"),
					(_, resultSet) => null,
					(_, error) => console.error("Erro criando registro em 'Item_Churras'", error)
				)
			});
		}
	}
}