/*
* ESTE ARQUIVO CRIA UM ESQUEMA PARA SER UTILIZADO DURANTE O DESENVOLVIMENTO DO APLICATIVO 
*/

import db from ".";

/******************************************************************************/
/******************************** CHURRAS *************************************/
/******************************************************************************/

export default function createDummySchema() {
	const dummyData1 = {
		nome_churras: "Churras Teste",
		qtd_adultos: 10,
		qtd_jovens: 100,
		qtd_criancas: 1000,
		preco_total: 2250.00,
		preco_pessoa: 225.00,
	}

////////////////////////// SOMENTE PARA TESTES
	db.transaction(tx => {
		tx.executeSql("DROP TABLE IF EXISTS Churras;",
		[],
		(_, resultSet) => console.log("Tabela 'Churras' deletada"),
		(_, error) => console.error("Erro deletando tabela 'Churras'", error)
		)
	});
////////////////////////// SOMENTE PARA TESTES

	db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS Churras (pk_churras INTEGER PRIMARY KEY AUTOINCREMENT, nome_churras VARCHAR(128) NOT NULL, qtd_adultos TINYINT(2) NOT NULL, qtd_jovens TINYINT(2) NOT NULL, qtd_criancas TINYINT(2) NOT NULL, preco_total DECIMAL(10, 2), preco_pessoa DECIMAL(10, 2), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP); CREATE TRIGGER update_churras_modtime AFTER UPDATE ON Churras FOR EACH ROW BEGIN UPDATE Churras SET updated_at = CURRENT_TIMESTAMP WHERE pk_churras = OLD.pk_churras; END;",
			[],
			(_, resultSet) => console.log("Tabela 'Churras' criada"),
			(_, error) => console.error("Erro criando 'tabela Churras'", error)
		)
	});

	// Popular tabela
	for (let i = 0; i < 3; i++) {
		db.transaction(tx => {
			tx.executeSql("INSERT INTO Churras (nome_churras, qtd_adultos, qtd_jovens, qtd_criancas, preco_total, preco_pessoa) VALUES (?, ?, ?, ?, ?, ?);",
				[...Object.values(dummyData1)],
				(_, resultSet) => console.log("Registro adicionado à tabela 'Churras'"),
				(_, error) => console.error("Erro criando registro em 'Churras'", error)
			)
		});
	}

/******************************************************************************/
/*************************** INFO_CHURRAS *************************************/
/******************************************************************************/

	const dummyData2 = {
		fk_churras: 1,
		nome_anfitriao: "Seu Madruga",
		telefone: "(11) 99999-9999",
	}

////////////////////////// SOMENTE PARA TESTES
	db.transaction(tx => {
		tx.executeSql("DROP TABLE IF EXISTS Info_Churras;",
		[],
		(_, resultSet) => console.log("Tabela 'Info_Churras' deletada"),
		(_, error) => console.error("Erro deletando tabela 'Info_Churras'", error)
		)
	});
////////////////////////// SOMENTE PARA TESTES

	db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS Info_Churras (pk_info_churras INTEGER PRIMARY KEY AUTOINCREMENT, fk_churras INT(11) NOT NULL, nome_anfitriao VARCHAR(64) NOT NULL, telefone VARCHAR(16) NOT NULL, FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras));",
			[],
			(_, resultSet) => console.log("Tabela 'Info_Churras' criada"),
			(_, error) => console.error("Erro criando 'tabela Info_Churras'", error)
		)
	});

	// Popular tabela
	for (let i = 0; i < 3; i++) {
		db.transaction(tx => {
			tx.executeSql("INSERT INTO Info_Churras (fk_churras, nome_anfitriao, telefone) VALUES (?, ?, ?);",
				[i+1, dummyData2.nome_anfitriao, dummyData2.telefone],
				(_, resultSet) => console.log("Registro adicionado à tabela 'Info_Churras'"),
				(_, error) => console.error("Erro criando registro em 'Info_Churras'", error)
			)
		});

	}

/******************************************************************************/
/*************************** LOCAL_CHURRAS ************************************/
/******************************************************************************/

	const dummyData3 = {
		fk_churras: 1,
		cep: "88523-497",
		logradouro: "Rua Terezinha Candinho do Amarante",
		numero: "123",
		complemento: null,
		municipio: "Lages",
		estado: "Santa Catarina",
	}

////////////////////////// SOMENTE PARA TESTES
	db.transaction(tx => {
		tx.executeSql("DROP TABLE IF EXISTS Local_Churras;",
		[],
		(_, resultSet) => console.log("Tabela 'Local_Churras' deletada"),
		(_, error) => console.error("Erro deletando tabela 'Local_Churras'", error)
		)
	});
////////////////////////// SOMENTE PARA TESTES

	db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS Local_Churras (pk_local_churras INTEGER PRIMARY KEY AUTOINCREMENT, fk_churras INT(11) NOT NULL, cep VARCHAR(9) NOT NULL, logradouro VARCHAR(64) NOT NULL, numero VARCHAR(8) NOT NULL, complemento VARCHAR(8), municipio VARCHAR(32) NOT NULL, estado VARCHAR(20) NOT NULL, FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras));",
			[],
			(_, resultSet) => console.log("Tabela 'Local_Churras' criada"),
			(_, error) => console.error("Erro criando 'tabela Local_Churras'", error)
		)
	});

	// Popular tabela
	for (let i = 0; i < 3; i++) {
		db.transaction(tx => {
			tx.executeSql("INSERT INTO Local_Churras (fk_churras, cep, logradouro, numero, complemento, municipio, estado) VALUES (?, ?, ?, ?, ?, ?, ?);",
				[i+1, dummyData3.cep, dummyData3.logradouro, dummyData3.numero, dummyData3.complemento, dummyData3.municipio, dummyData3.estado],
				(_, resultSet) => console.log("Registro adicionado à tabela 'Local_Churras'"),
				(_, error) => console.error("Erro criando registro em 'Local_Churras'", error)
			)
		});
	}

/******************************************************************************/
/*************************** ITEM_CHURRAS *************************************/
/******************************************************************************/

	const dummyData4 = [
		{
			nome_item: 'Linguiça',
			categoria: 'Carnes Suínas',
			medida: 'quilos',
			quantidade: 1.5,
		},
		{
			nome_item: 'Filé Mignon',
			categoria: 'Carnes Bovinas',
			medida: 'quilos',
			quantidade: 1.5,
		},
		{
			nome_item: 'Bisteca',
			categoria: 'Carnes Suínas',
			medida: 'quilos',
			quantidade: 1.5,
		},
		{
			nome_item: 'Cerveja',
			categoria: 'Bebidas Alcoólicas',
			medida: 'litros',
			quantidade: 4,
		},
	];

	////////////////////////// SOMENTE PARA TESTES
	db.transaction(tx => {
		tx.executeSql("DROP TABLE IF EXISTS Item_Churras;",
		[],
		(_, resultSet) => console.log("Tabela 'Item_Churras' deletada"),
		(_, error) => console.error("Erro deletando tabela 'Item_Churras'", error)
		)
	});
	////////////////////////// SOMENTE PARA TESTES

	db.transaction(tx => {
		tx.executeSql("CREATE TABLE IF NOT EXISTS Item_Churras (pk_item_churras INTEGER PRIMARY KEY AUTOINCREMENT, fk_churras INT(11) NOT NULL, nome_item VARCHAR(32) NOT NULL, categoria VARCHAR(24) NOT NULL, medida VARCHAR(10) NOT NULL, quantidade DECIMAL(8, 2) NOT NULL, FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras));",
			[],
			(_, resultSet) => console.log("Tabela 'Item_Churras' criada"),
			(_, error) => console.error("Erro criando 'tabela Item_Churras'", error)
		)
	});

	// Popular tabela
	for (let j = 0; j < 3; j++) {
		for (let i = 0; i < 4; i++) {
			db.transaction(tx => {
				tx.executeSql("INSERT INTO Item_Churras (fk_churras, nome_item, categoria, medida, quantidade) VALUES (?, ?, ?, ?, ?);",
					[j+1, dummyData4[i].nome_item, dummyData4[i].categoria, dummyData4[i].medida, dummyData4[i].quantidade],
					(_, resultSet) => console.log("Registro adicionado à tabela 'Item_Churras'"),
					(_, error) => console.error("Erro criando registro em 'Item_Churras'", error)
				)
			});
		}
	}

}