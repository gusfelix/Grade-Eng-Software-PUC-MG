const disciplinas = {
    // 1º Período
    "Algoritmos e Estruturas de Dados I": { codigo: "60422", periodo: 1, ch: 120, prereqs: [], correqs: [] },
    "Cálculo I": { codigo: "57384", periodo: 1, ch: 80, prereqs: [], correqs: [] },
    "Desenvolvimento de Interfaces Web": { codigo: "63317", periodo: 1, ch: 80, prereqs: [], correqs: [] },
    "Fundamentos de Engenharia de Software": { codigo: "56963", periodo: 1, ch: 80, prereqs: [], correqs: [] },
    "Introdução à Computação": { codigo: "60388", periodo: 1, ch: 70, prereqs: [], correqs: [] },
    "Trabalho Interdisciplinar: Aplicações Web": { codigo: "60423", periodo: 1, ch: 50, prereqs: [], correqs: ["Desenvolvimento de Interfaces Web", "Algoritmos e Estruturas de Dados I"], nota: "Correq: Desenv. Interfaces Web, Algoritmos I" },

    // 2º Período
    "Arquitetura de Computadores": { codigo: "60393", periodo: 2, ch: 40, prereqs: ["Introdução à Computação"], correqs: [] },
    "Bancos de Dados": { codigo: "60426", periodo: 2, ch: 80, prereqs: ["Algoritmos e Estruturas de Dados I"], correqs: [] },
    "Cálculo II": { codigo: "54810", periodo: 2, ch: 80, prereqs: ["Cálculo I"], correqs: [] },
    "Filosofia: Razão e Modernidade": { codigo: "54279", periodo: 2, ch: 40, prereqs: [], correqs: [] },
    "Laboratório de Programação Modular": { codigo: "60428", periodo: 2, ch: 40, prereqs: [], correqs: ["Programação Modular"], nota: "Correq: Programação Modular" },
    "Modelagem de Processos de Negócios": { codigo: "60424", periodo: 2, ch: 60, prereqs: ["Fundamentos de Engenharia de Software"], correqs: [] },
    "Programação Modular": { codigo: "60427", periodo: 2, ch: 80, prereqs: ["Algoritmos e Estruturas de Dados I"], correqs: [] },
    "Trabalho Interdisciplinar: Aplicações para Processos de Negócios": { codigo: "60425", periodo: 2, ch: 50, prereqs: [], correqs: ["Modelagem de Processos de Negócios", "Programação Modular", "Laboratório de Programação Modular"], nota: "Correq: Modelagem, Prog. Modular e Lab" },

    // 3º Período
    "Algoritmos e Estruturas de Dados II": { codigo: "60430", periodo: 3, ch: 120, prereqs: ["Algoritmos e Estruturas de Dados I"], correqs: [] },
    "Cultura Religiosa: Fenômeno Religioso": { codigo: "56212", periodo: 3, ch: 40, prereqs: [], correqs: [] },
    "Engenharia de Requisitos de Software": { codigo: "60432", periodo: 3, ch: 80, prereqs: ["Fundamentos de Engenharia de Software"], correqs: [] },
    "Introdução à Pesquisa em Informática": { codigo: "60429", periodo: 3, ch: 40, prereqs: [], correqs: [] },
    "Sistemas Operacionais": { codigo: "60431", periodo: 3, ch: 80, prereqs: ["Arquitetura de Computadores"], correqs: [] },
    "Trabalho Interdisciplinar: Aplicações para Cenários Reais": { codigo: "60433", periodo: 3, ch: 45, prereqs: [], correqs: ["Algoritmos e Estruturas de Dados II", "Engenharia de Requisitos de Software"], nota: "Correq: Algoritmos II, Eng. de Requisitos" },

    // 4º Período
    "Interação Humano-Computador": { codigo: "60439", periodo: 4, ch: 90, prereqs: ["Engenharia de Requisitos de Software"], correqs: [] },
    "Laboratório de Desenvolvimento de Software": { codigo: "60436", periodo: 4, ch: 40, prereqs: [], correqs: ["Projeto de Software"], nota: "Correq: Projeto de Software" },
    "Optativa I": { codigo: "60399", periodo: 4, ch: 80, prereqs: [], correqs: [] },
    "Projeto de Software": { codigo: "60435", periodo: 4, ch: 80, prereqs: ["Programação Modular", "Engenharia de Requisitos de Software"], correqs: [] },
    "Redes de Computadores": { codigo: "60437", periodo: 4, ch: 80, prereqs: ["Sistemas Operacionais"], correqs: [] },
    "Teoria dos Grafos e Computabilidade": { codigo: "60434", periodo: 4, ch: 120, prereqs: ["Algoritmos e Estruturas de Dados II"], correqs: [] },
    "Trabalho Interdisciplinar: Aplicações para Sustentabilidade": { codigo: "60438", periodo: 4, ch: 50, prereqs: [], correqs: ["Projeto de Software"], nota: "Correq: Projeto de Software" },

    // 5º Período
    "Arquitetura de Software": { codigo: "60442", periodo: 5, ch: 80, prereqs: ["Projeto de Software"], correqs: [] },
    "Cultura Religiosa: Pessoa e Sociedade": { codigo: "54318", periodo: 5, ch: 40, prereqs: [], correqs: [] },
    "Desenvolvimento de Aplicações Móveis e Distribuídas": { codigo: "60444", periodo: 5, ch: 80, prereqs: ["Programação Modular", "Redes de Computadores"], correqs: [] },
    "Estatística e Probabilidade": { codigo: "60441", periodo: 5, ch: 80, prereqs: ["Cálculo I"], correqs: [] },
    "Fundamentos de Projeto e Análise de Algoritmos": { codigo: "60440", periodo: 5, ch: 40, prereqs: ["Teoria dos Grafos e Computabilidade"], correqs: [] },
    "Gerência de Projetos de Software": { codigo: "60443", periodo: 5, ch: 60, prereqs: ["Engenharia de Requisitos de Software"], correqs: [] },
    "Laboratório de Desenvolvimento de Aplicações Móveis e Distribuídas": { codigo: "60445", periodo: 5, ch: 40, prereqs: [], correqs: ["Desenvolvimento de Aplicações Móveis e Distribuídas"], nota: "Correq: Desenv. Aplicações Móveis" },
    "Optativa II": { codigo: "60447", periodo: 5, ch: 80, prereqs: [], correqs: [] },
    "Trabalho Interdisciplinar: Aplicações Distribuídas": { codigo: "60446", periodo: 5, ch: 45, prereqs: [], correqs: ["Arquitetura de Software"], nota: "Correq: Arquitetura de Software" },

    // 6º Período
    "Engenharia Econômica para Software": { codigo: "63238", periodo: 6, ch: 80, prereqs: ["Gerência de Projetos de Software"], correqs: [] },
    "Gerência de Configuração e Evolução de Software": { codigo: "60451", periodo: 6, ch: 80, prereqs: ["Projeto de Software"], correqs: [] },
    "Laboratório de Experimentação de Software": { codigo: "60450", periodo: 6, ch: 40, prereqs: [], correqs: ["Medição e Experimentação em Engenharia de Software"], nota: "Correq: Medição e Experimentação" },
    "Medição e Experimentação em Engenharia de Software": { codigo: "60449", periodo: 6, ch: 80, prereqs: ["Estatística e Probabilidade"], correqs: [] },
    "Optativa III": { codigo: "60454", periodo: 6, ch: 80, prereqs: [], correqs: [] },
    "Teste de Software": { codigo: "60448", periodo: 6, ch: 80, prereqs: ["Engenharia de Requisitos de Software"], correqs: [] },
    "Trabalho Interdisciplinar: Pesquisa em Engenharia de Software": { codigo: "60453", periodo: 6, ch: 45, prereqs: [], correqs: ["Medição e Experimentação em Engenharia de Software"], nota: "Correq: Medição e Experimentação" },

    // 7º Período
    "Computadores e Sociedade": { codigo: "60456", periodo: 7, ch: 40, prereqs: [], correqs: [] },
    "Engenharia de Processos e Qualidade de Software": { codigo: "60457", periodo: 7, ch: 80, prereqs: ["Engenharia de Requisitos de Software"], correqs: [] },
    "Filosofia: Antropologia e Ética": { codigo: "60455", periodo: 7, ch: 80, prereqs: [], correqs: [] },
    "Gestão da Produção de Software": { codigo: "60458", periodo: 7, ch: 40, prereqs: ["Gerência de Projetos de Software"], correqs: [] },
    "Tecnologias da Informação e do Conhecimento": { codigo: "60459", periodo: 7, ch: 40, prereqs: ["Modelagem de Processos de Negócios"], correqs: [] },
    "Tópicos em Computação I": { codigo: "60460", periodo: 7, ch: 40, prereqs: ["Fundamentos de Projeto e Análise de Algoritmos"], correqs: [] },
    "Tópicos em Computação II": { codigo: "60461", periodo: 7, ch: 40, prereqs: ["Fundamentos de Projeto e Análise de Algoritmos"], correqs: [] },
    "Trabalho de Conclusão de Curso I": { codigo: "60462", periodo: 7, ch: 60, prereqs: ["Introdução à Pesquisa em Informática"], correqs: [] },

    // 8º Período
    "Modelagem e Avaliação de Desempenho": { codigo: "60465", periodo: 8, ch: 80, prereqs: ["Teoria dos Grafos e Computabilidade", "Estatística e Probabilidade"], correqs: [] },
    "Optativa IV": { codigo: "60106", periodo: 8, ch: 80, prereqs: [], correqs: [] },
    "Segurança e Auditoria de Sistemas": { codigo: "60467", periodo: 8, ch: 60, prereqs: ["Projeto de Software", "Redes de Computadores"], correqs: [] },
    "Tópicos em Engenharia de Software": { codigo: "60463", periodo: 8, ch: 40, prereqs: ["Projeto de Software"], correqs: [] },
    "Tópicos em Sistemas de Software": { codigo: "60464", codigosAlternativos: ["60418"], periodo: 8, ch: 40, prereqs: [], correqs: [], req_ch: 1800 },
    "Trabalho de Conclusão de Curso II": { codigo: "60466", periodo: 8, ch: 75, prereqs: ["Trabalho de Conclusão de Curso I"], correqs: [] }
};
