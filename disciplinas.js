const disciplinas = {
    // 1º Período
    "Algoritmos e Estruturas de Dados I": { periodo: 1, ch: 120, prereqs: [], correqs: [] },
    "Cálculo I": { periodo: 1, ch: 80, prereqs: [], correqs: [] },
    "Desenvolvimento de Interfaces Web": { periodo: 1, ch: 80, prereqs: [], correqs: [] },
    "Fundamentos de Engenharia de Software": { periodo: 1, ch: 80, prereqs: [], correqs: [] },
    "Introdução à Computação": { periodo: 1, ch: 70, prereqs: [], correqs: [] },
    "Trabalho Interdisciplinar: Aplicações Web": { periodo: 1, ch: 50, prereqs: [], correqs: ["Desenvolvimento de Interfaces Web", "Algoritmos e Estruturas de Dados I"], nota: "Correq: Desenv. Interfaces Web, Algoritmos I" },

    // 2º Período
    "Arquitetura de Computadores": { periodo: 2, ch: 40, prereqs: ["Introdução à Computação"], correqs: [] },
    "Bancos de Dados": { periodo: 2, ch: 80, prereqs: ["Algoritmos e Estruturas de Dados I"], correqs: [] },
    "Cálculo II": { periodo: 2, ch: 80, prereqs: ["Cálculo I"], correqs: [] },
    "Filosofia: Razão e Modernidade": { periodo: 2, ch: 40, prereqs: [], correqs: [] },
    "Laboratório de Programação Modular": { periodo: 2, ch: 40, prereqs: [], correqs: ["Programação Modular"], nota: "Correq: Programação Modular" },
    "Modelagem de Processos de Negócios": { periodo: 2, ch: 60, prereqs: ["Fundamentos de Engenharia de Software"], correqs: [] },
    "Programação Modular": { periodo: 2, ch: 80, prereqs: ["Algoritmos e Estruturas de Dados I"], correqs: [] },
    "Trabalho Interdisciplinar: Aplicações para Processos de Negócios": { periodo: 2, ch: 50, prereqs: [], correqs: ["Modelagem de Processos de Negócios", "Programação Modular", "Laboratório de Programação Modular"], nota: "Correq: Modelagem, Prog. Modular e Lab" },

    // 3º Período
    "Algoritmos e Estruturas de Dados II": { periodo: 3, ch: 120, prereqs: ["Algoritmos e Estruturas de Dados I"], correqs: [] },
    "Cultura Religiosa: Fenômeno Religioso": { periodo: 3, ch: 40, prereqs: [], correqs: [] },
    "Engenharia de Requisitos de Software": { periodo: 3, ch: 80, prereqs: ["Fundamentos de Engenharia de Software"], correqs: [] },
    "Introdução à Pesquisa em Informática": { periodo: 3, ch: 40, prereqs: [], correqs: [] },
    "Sistemas Operacionais": { periodo: 3, ch: 80, prereqs: ["Arquitetura de Computadores"], correqs: [] },
    "Trabalho Interdisciplinar: Aplicações para Cenários Reais": { periodo: 3, ch: 45, prereqs: [], correqs: ["Algoritmos e Estruturas de Dados II", "Engenharia de Requisitos de Software"], nota: "Correq: Algoritmos II, Eng. de Requisitos" },

    // 4º Período
    "Interação Humano-Computador": { periodo: 4, ch: 90, prereqs: ["Engenharia de Requisitos de Software"], correqs: [] },
    "Laboratório de Desenvolvimento de Software": { periodo: 4, ch: 40, prereqs: [], correqs: ["Projeto de Software"], nota: "Correq: Projeto de Software" },
    "Optativa I": { periodo: 4, ch: 80, prereqs: [], correqs: [] },
    "Projeto de Software": { periodo: 4, ch: 80, prereqs: ["Programação Modular", "Engenharia de Requisitos de Software"], correqs: [] },
    "Redes de Computadores": { periodo: 4, ch: 80, prereqs: ["Sistemas Operacionais"], correqs: [] },
    "Teoria dos Grafos e Computabilidade": { periodo: 4, ch: 120, prereqs: ["Algoritmos e Estruturas de Dados II"], correqs: [] },
    "Trabalho Interdisciplinar: Aplicações para Sustentabilidade": { periodo: 4, ch: 50, prereqs: [], correqs: ["Projeto de Software"], nota: "Correq: Projeto de Software" },

    // 5º Período
    "Arquitetura de Software": { periodo: 5, ch: 80, prereqs: ["Projeto de Software"], correqs: [] },
    "Cultura Religiosa: Pessoa e Sociedade": { periodo: 5, ch: 40, prereqs: [], correqs: [] },
    "Desenvolvimento de Aplicações Móveis e Distribuídas": { periodo: 5, ch: 80, prereqs: ["Programação Modular", "Redes de Computadores"], correqs: [] },
    "Estatística e Probabilidade": { periodo: 5, ch: 80, prereqs: ["Cálculo I"], correqs: [] },
    "Fundamentos de Projeto e Análise de Algoritmos": { periodo: 5, ch: 40, prereqs: ["Teoria dos Grafos e Computabilidade"], correqs: [] },
    "Gerência de Projetos de Software": { periodo: 5, ch: 60, prereqs: ["Engenharia de Requisitos de Software"], correqs: [] },
    "Laboratório de Desenvolvimento de Aplicações Móveis e Distribuídas": { periodo: 5, ch: 40, prereqs: [], correqs: ["Desenvolvimento de Aplicações Móveis e Distribuídas"], nota: "Correq: Desenv. Aplicações Móveis" },
    "Optativa II": { periodo: 5, ch: 80, prereqs: [], correqs: [] },
    "Trabalho Interdisciplinar: Aplicações Distribuídas": { periodo: 5, ch: 45, prereqs: [], correqs: ["Arquitetura de Software"], nota: "Correq: Arquitetura de Software" },

    // 6º Período
    "Engenharia Econômica para Software": { periodo: 6, ch: 80, prereqs: ["Gerência de Projetos de Software"], correqs: [] },
    "Gerência de Configuração e Evolução de Software": { periodo: 6, ch: 80, prereqs: ["Projeto de Software"], correqs: [] },
    "Laboratório de Experimentação de Software": { periodo: 6, ch: 40, prereqs: [], correqs: ["Medição e Experimentação em Engenharia de Software"], nota: "Correq: Medição e Experimentação" },
    "Medição e Experimentação em Engenharia de Software": { periodo: 6, ch: 80, prereqs: ["Estatística e Probabilidade"], correqs: [] },
    "Optativa III": { periodo: 6, ch: 80, prereqs: [], correqs: [] },
    "Teste de Software": { periodo: 6, ch: 80, prereqs: ["Engenharia de Requisitos de Software"], correqs: [] },
    "Trabalho Interdisciplinar: Pesquisa em Engenharia de Software": { periodo: 6, ch: 45, prereqs: [], correqs: ["Medição e Experimentação em Engenharia de Software"], nota: "Correq: Medição e Experimentação" },

    // 7º Período
    "Computadores e Sociedade": { periodo: 7, ch: 40, prereqs: [], correqs: [] },
    "Engenharia de Processos e Qualidade de Software": { periodo: 7, ch: 80, prereqs: ["Engenharia de Requisitos de Software"], correqs: [] },
    "Filosofia: Antropologia e Ética": { periodo: 7, ch: 80, prereqs: [], correqs: [] },
    "Gestão da Produção de Software": { periodo: 7, ch: 40, prereqs: ["Gerência de Projetos de Software"], correqs: [] },
    "Tecnologias da Informação e do Conhecimento": { periodo: 7, ch: 40, prereqs: ["Modelagem de Processos de Negócios"], correqs: [] },
    "Tópicos em Computação I": { periodo: 7, ch: 40, prereqs: ["Fundamentos de Projeto e Análise de Algoritmos"], correqs: [] },
    "Tópicos em Computação II": { periodo: 7, ch: 40, prereqs: ["Fundamentos de Projeto e Análise de Algoritmos"], correqs: [] },
    "Trabalho de Conclusão de Curso I": { periodo: 7, ch: 60, prereqs: ["Introdução à Pesquisa em Informática"], correqs: [] },

    // 8º Período
    "Modelagem e Avaliação de Desempenho": { periodo: 8, ch: 80, prereqs: ["Teoria dos Grafos e Computabilidade", "Estatística e Probabilidade"], correqs: [] },
    "Optativa IV": { periodo: 8, ch: 80, prereqs: [], correqs: [] },
    "Segurança e Auditoria de Sistemas": { periodo: 8, ch: 60, prereqs: ["Projeto de Software", "Redes de Computadores"], correqs: [] },
    "Tópicos em Engenharia de Software": { periodo: 8, ch: 40, prereqs: ["Projeto de Software"], correqs: [] },
    "Tópicos em Sistemas de Software": { periodo: 8, ch: 40, prereqs: [], correqs: [], req_ch: 1800 },
    "Trabalho de Conclusão de Curso II": { periodo: 8, ch: 75, prereqs: ["Trabalho de Conclusão de Curso I"], correqs: [] }
};