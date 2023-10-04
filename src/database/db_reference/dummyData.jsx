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
        nome_produto: 'Refrigerante',
        preco_unitario: 5.49,
        categoria: 'Bebidas Não Alcoólicas',
        medida: 'litros'
    },
    {
        nome_produto: 'Suco',
        preco_unitario: 4.99,
        categoria: 'Bebidas Não Alcoólicas',
        medida: 'litros'
    },
    // Bebidas Alcoólicas
    {
        nome_produto: 'Cerveja',
        preco_unitario: 8.99,
        categoria: 'Bebidas Alcoólicas',
        medida: 'litros'
    },
    {
        nome_produto: 'Caipirinha',
        preco_unitario: 38.54,
        categoria: 'Bebidas Alcoólicas',
        medida: 'litros'
    },
    // Acompanhamentos
    {
        nome_produto: 'Arroz',
        preco_unitario: 5.90,
        categoria: 'Acompanhamentos',
        medida: 'quilos'
    },
    {
        nome_produto: 'Pão de Alho',
        preco_unitario: 30.00,
        categoria: 'Acompanhamentos',
        medida: 'quilos'
    },
    {
        nome_produto: 'Queijo Coalho',
        preco_unitario: 53.90,
        categoria: 'Acompanhamentos',
        medida: 'quilos'
    },
    {
        nome_produto: 'Farofa Pronta',
        preco_unitario: 18.98,
        categoria: 'Acompanhamentos',
        medida: 'quilos'
    },
    {
        nome_produto: 'Pão Francês',
        preco_unitario: 15.00,
        categoria: 'Acompanhamentos',
        medida: 'quilos'
    },
    // Suprimentos
    {
        nome_produto: 'Carvão',
        preco_unitario: 10.00,
        categoria: 'Suprimentos',
        medida: 'quilos'
    },
    {
        nome_produto: 'Copos Descartáveis (50 unidades)',
        preco_unitario: 7.58,
        categoria: 'Suprimentos',
        medida: 'unidades'
    },
    {
        nome_produto: 'Pratos Descartáveis (50 unidades)',
        preco_unitario: 16.50,
        categoria: 'Suprimentos',
        medida: 'quilos'
    },
    {
        nome_produto: 'Guardanapos Descartáveis (50 unidades)',
        preco_unitario: 1.59,
        categoria: 'Suprimentos',
        medida: 'unidades'
    },
    {
        nome_produto: 'Kit 50 Talheres Descartáveis (garfo e faca)',
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
        fk_produto: 8,
        quantidade: 1,
    },
    {
        fk_produto: 12,
        quantidade: 0.8,
    },
    {
        fk_produto: 14,
        quantidade: 8,
    },
    {
        fk_produto: 16,
        quantidade: 8,
    },
    {
        fk_produto: 18,
        quantidade: 1,
    },
    {
        fk_produto: 23,
        quantidade: 2,
    },
    {
        fk_produto: 24,
        quantidade: 1,
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
];

export {
    dummyDataProdutos,
    dummyDataChurras,
    dummyDataInfo_Churras,
    dummyDataItem_Churras,
    dummyDataLocal_Churras
}