-- MODELO FÍSICO PARA CONSULTA E IMPLEMENTAÇÃO

DROP DATABASE IF EXISTS Planeja_Churras;
CREATE DATABASE Planeja_Churras;
USE Planeja_Churras;

CREATE TABLE Churras (
    pk_churras INT(11) AUTO_INCREMENT,
    nome_churras VARCHAR(128) NOT NULL,
    qtd_adultos TINYINT(2) NOT NULL,
    qtd_jovens TINYINT(2) NOT NULL,
    qtd_criancas TINYINT(2) NOT NULL,
    preco_total DECIMAL(10, 2),
    preco_pessoa DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (pk_churras)
);

CREATE TABLE Item_Churras (
    pk_item_churras INT(11) AUTO_INCREMENT,
    fk_churras INT(11) NOT NULL,
    fk_produto INT(11) NOT NULL,
    quantidade DECIMAL(8, 2) NOT NULL,
    PRIMARY KEY (pk_item_churras),
    FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras)
);

CREATE TABLE Info_Churras (
    pk_info_churras INT(11) AUTO_INCREMENT,
    fk_churras INT(11) NOT NULL,
    nome_anfitriao VARCHAR(64) NOT NULL,
    telefone VARCHAR(16) NOT NULL,
    PRIMARY KEY (pk_info_churras),
    FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras)
);

CREATE TABLE Local_Churras (
    pk_local_churras INT(11) AUTO_INCREMENT,
    fk_churras INT(11) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    logradouro VARCHAR(64) NOT NULL,
    numero VARCHAR(8) NOT NULL,
    complemento VARCHAR(8),
    municipio VARCHAR(32) NOT NULL,
    estado ENUM('Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins') NOT NULL,
    PRIMARY KEY (pk_local_churras),
    FOREIGN KEY(fk_churras) REFERENCES Churras (pk_churras)
);

CREATE TABLE Produto(
    pk_produto INT(11) AUTO_INCREMENT,
    nome_produto VARCHAR(32),
    preco_unitario DECIMAL(8,2),
    categoria ENUM('Carnes Bovinas', 'Carnes Suínas', 'Carnes de Frango', 'Bebidas Alcoólicas', 'Bebidas Não Alcoólicas', 'Acompanhamentos', 'Suprimentos') NOT NULL,
    medida ENUM('quilos', 'litros', 'unidades') NOT NULL,
    PRIMARY KEY (pk_produto),
    CONSTRAINT unique_produto UNIQUE (nome_produto, categoria)
);