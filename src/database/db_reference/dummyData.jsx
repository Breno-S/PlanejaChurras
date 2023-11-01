const dummyDataProdutos = [
    // Carnes Bovinas
    {
        nome_produto: 'Fraldinha',
        preco_unitario: 29.99,
        categoria: 'Carnes Bovinas',
        medida: 'quilos',
    },
    {
        nome_produto: 'Contrafilé',
        preco_unitario: 34.98,
        categoria: 'Carnes Bovinas',
        medida: 'quilos',
    },
    {
        nome_produto: 'Alcatra',
        preco_unitario: 39.90,
        categoria: 'Carnes Bovinas',
        medida: 'quilos',
    },
    {
        nome_produto: 'Picanha',
        preco_unitario: 59.99,
        categoria:'Carnes Bovinas',
        medida: 'quilos',
    },
    {
        nome_produto: 'Cupim',
        preco_unitario: 49.90,
        categoria:'Carnes Bovinas',
        medida: 'quilos',
    },
    // Carnes Suínas
    {
        nome_produto: 'Pernil',
        preco_unitario: 22.50,
        categoria: 'Carnes Suínas',
        medida: 'quilos',
    },
    {
        nome_produto: 'Lombo',
        preco_unitario: 27.99,
        categoria: 'Carnes Suínas',
        medida: 'quilos',
    },
    {
        nome_produto: 'Bisteca Suína',
        preco_unitario: 16.80,
        categoria: 'Carnes Suínas',
        medida: 'quilos',
    },
    {
        nome_produto: 'Linguiça',
        preco_unitario: 19.99,
        categoria: 'Carnes Suínas',
        medida: 'quilos',
    },
    {
        nome_produto: 'Panceta',
        preco_unitario: 26.90,
        categoria:'Carnes Suínas',
        medida: 'quilos',
    },
    // Carnes de Frango
    {
        nome_produto: 'Coxa',
        preco_unitario: 10.80,
        categoria: 'Carnes de Frango',
        medida: 'quilos',
    },
    {
        nome_produto: 'Asa',
        preco_unitario: 16.80,
        categoria: 'Carnes de Frango',
        medida: 'quilos',
    },
    {
        nome_produto: 'Coração',
        preco_unitario: 38.80,
        categoria: 'Carnes de Frango',
        medida: 'quilos',
    },
    // Bebidas Não Alcoólicas
    {
        nome_produto: 'Água',
        preco_unitario: 3.50,
        categoria: 'Bebidas Não Alcoólicas',
        medida: 'litros'
    },
    {
        nome_produto: 'Refrigerante [2L]',
        preco_unitario: 5.49,
        categoria: 'Bebidas Não Alcoólicas',
        medida: 'unidades'
    },
    {
        nome_produto: 'Suco [1L]',
        preco_unitario: 4.99,
        categoria: 'Bebidas Não Alcoólicas',
        medida: 'unidades'
    },
    // Bebidas Alcoólicas
    {
        nome_produto: 'Cerveja [lata 350mL]',
        preco_unitario: 3.99,
        categoria: 'Bebidas Alcoólicas',
        medida: 'unidades'
    },
    {
        nome_produto: 'Caipirinha [1L]',
        preco_unitario: 38.54,
        categoria: 'Bebidas Alcoólicas',
        medida: 'unidades'
    },
    // Acompanhamentos
    {
        nome_produto: 'Arroz [1kg]',
        preco_unitario: 5.90,
        categoria: 'Acompanhamentos',
        medida: 'unidades'
    },
    {
        nome_produto: 'Pão de Alho',
        preco_unitario: 30.00,
        categoria: 'Acompanhamentos',
        medida: 'quilos'
    },
    {
        nome_produto: 'Queijo Coalho [pacote 7 espetos]',
        preco_unitario: 20.00,
        categoria: 'Acompanhamentos',
        medida: 'unidades'
    },
    {
        nome_produto: 'Farofa Pronta [500g]',
        preco_unitario: 15.00,
        categoria: 'Acompanhamentos',
        medida: 'unidades'
    },
    {
        nome_produto: 'Pão Francês',
        preco_unitario: 15.00,
        categoria: 'Acompanhamentos',
        medida: 'quilos'
    },
    // Suprimentos
    {
        nome_produto: 'Carvão [1kg]',
        preco_unitario: 10.00,
        categoria: 'Suprimentos',
        medida: 'quilos'
    },
    {
        nome_produto: 'Copos Descartáveis [kit 50 unid.]',
        preco_unitario: 7.58,
        categoria: 'Suprimentos',
        medida: 'unidades'
    },
    {
        nome_produto: 'Pratos Descartáveis [kit 50 unid.]',
        preco_unitario: 16.50,
        categoria: 'Suprimentos',
        medida: 'quilos'
    },
    {
        nome_produto: 'Guardanapos Descartáveis [kit 50 unid.]',
        preco_unitario: 1.59,
        categoria: 'Suprimentos',
        medida: 'unidades'
    },
    {
        nome_produto: 'Talheres Descartáveis (garfo e faca) [kit 50 unid.]',
        preco_unitario: 19.50,
        categoria: 'Suprimentos',
        medida: 'unidades'
    }
];

const dummyDataChurras = {
    nome_churras: "Churras Teste",
    qtd_adultos: 10,
    qtd_jovens: 4,
    qtd_criancas: 5,
    // Comente essas propriedades para testar o calculo com SQL
    preco_total: 2250.00,
    preco_pessoa: 225.00,
};

const dummyDataInfo_Churras = {
    fk_churras: 1,
    nome_anfitriao: "Seu Madruga",
    telefone: "(11) 99999-9999",
};

const dummyDataLocal_Churras = {
    fk_churras: 1,
    cep: "88523-497",
    logradouro: "Rua Terezinha Candinho do Amarante",
    numero: "123",
    complemento: null,
    municipio: "Lages",
    estado: "Santa Catarina",
}

const dummyDataItem_Churras = [
    {
        fk_produto: 1,
        quantidade: 1,
    },
    {
        fk_produto: 2,
        quantidade: 1,
    },
    {
        fk_produto: 3,
        quantidade: 1,
    },
    {
        fk_produto: 9,
        quantidade: 1,
    },
    {
        fk_produto: 13,
        quantidade: 0.8,
    },
    {
        fk_produto: 15,
        quantidade: 8,
    },
    {
        fk_produto: 17,
        quantidade: 8,
    },
    {
        fk_produto: 19,
        quantidade: 1,
    },
    {
        fk_produto: 24,
        quantidade: 2,
    },
    {
        fk_produto: 25,
        quantidade: 1,
    },
    {
        fk_produto: 26,
        quantidade: 1,
    },
    {
        fk_produto: 27,
        quantidade: 1,
    },
    {
        fk_produto: 28,
        quantidade: 1,
    },
];

export {
    dummyDataProdutos,
    dummyDataChurras,
    dummyDataInfo_Churras,
    dummyDataItem_Churras,
    dummyDataLocal_Churras
}