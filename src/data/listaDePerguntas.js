const questionario = [
  {
    pergunta: "Em que ano foi fundada a empresa que deu origem à Energisa?",
    resposta1: "1905",
    resposta2: "1950",
    resposta3: "1998",
    respostaCerta: "1905",
  }, // res1 certa

  {
    pergunta: "Em qual cidade nasceu a empresa que originou o Grupo Energisa?",
    resposta1: "Belo Horizonte (MG)",
    resposta2: "Cataguases (MG)",
    resposta3: "Juiz de Fora (MG)",
    respostaCerta: "Cataguases (MG)",
  }, // res2 certa

  {
    pergunta:
      "Qual era o nome original da empresa fundada em 1905, antes de se tornar Energisa?",
    resposta1: "Companhia Força e Luz Cataguazes-Leopoldina (CFLCL)",
    resposta2: "Eletrobras Minas",
    resposta3: "Companhia Mineira de Energia",
    respostaCerta: "Companhia Força e Luz Cataguazes-Leopoldina (CFLCL)",
  }, // res1 certa

  {
    pergunta:
      "Qual foi a primeira usina hidrelétrica construída pela empresa, em 1908?",
    resposta1: "Usina Itaipu",
    resposta2: "Usina Maurício",
    resposta3: "Usina Furnas",
    respostaCerta: "Usina Maurício",
  }, // res2 certa

  {
    pergunta:
      "Em que ano o Grupo Cataguases-Leopoldina passou a adotar o nome Energisa?",
    resposta1: "2008",
    resposta2: "1990",
    resposta3: "2015",
    respostaCerta: "2008",
  }, // res1 certa

  {
    pergunta: "Qual é o principal ramo de atuação da Energisa?",
    resposta1: "Telecomunicações",
    resposta2: "Setor bancário",
    resposta3: "Energia elétrica",
    respostaCerta: "Energia elétrica",
  }, // res3 certa

  {
    pergunta:
      "Cataguases, cidade-sede da Energisa, é historicamente conhecida como um importante polo de qual movimento cultural brasileiro?",
    resposta1: "Barroco",
    resposta2: "Modernismo",
    resposta3: "Romantismo",
    respostaCerta: "Modernismo",
  }, // res2 certa

  {
    pergunta:
      "Aproximadamente quantos municípios a Energisa Minas Gerais atende hoje?",
    resposta1: "66",
    resposta2: "10",
    resposta3: "300",
    respostaCerta: "66",
  }, // res1 certa

  {
    pergunta:
      "Em 2025, o Grupo Energisa celebrou quantos anos de história, com sessão especial no Senado?",
    resposta1: "50 anos",
    resposta2: "120 anos",
    resposta3: "80 anos",
    respostaCerta: "120 anos",
  }, // res2 certa

  {
    pergunta:
      "Além de energia elétrica, em quais outros segmentos o Grupo Energisa atua atualmente?",
    resposta1: "Gás natural e soluções renováveis",
    resposta2: "Fabricação de automóveis",
    resposta3: "Mineração de ferro",
    respostaCerta: "Gás natural e soluções renováveis",
  }, // res1 certa

  {
    pergunta:
      "Qual é a posição da Energisa entre os maiores grupos de distribuição de energia do Brasil?",
    resposta1: "1º maior",
    resposta2: "5º maior",
    resposta3: "15º maior",
    respostaCerta: "5º maior",
  }, // res2 certa

  {
    pergunta:
      "Uma característica marcante da história da Energisa é que ela permaneceu, ao longo de mais de um século, sob controle de quem?",
    resposta1: "Do governo federal",
    resposta2: "De investidores estrangeiros",
    resposta3: "Da família fundadora",
    respostaCerta: "Da família fundadora",
  }, // res3 certa

  {
    pergunta:
      "Em que Bolsa de Valores a CFLCL (origem da Energisa) obteve registro em 1907, sendo a terceira sociedade anônima a fazê-lo?",
    resposta1: "Bolsa de Valores de São Paulo",
    resposta2: "Bolsa de Valores de Nova York",
    resposta3: "Bolsa de Valores do Rio de Janeiro",
    respostaCerta: "Bolsa de Valores do Rio de Janeiro",
  }, // res3 certa

  {
    pergunta:
      "O que significa a sigla PDCA, um dos ciclos mais conhecidos da gestão?",
    resposta1: "Plan, Do, Check, Act",
    resposta2: "Produção, Distribuição, Compra, Auditoria",
    resposta3: "Planejar, Delegar, Cobrar, Avaliar",
    respostaCerta: "Plan, Do, Check, Act",
  }, // res1 certa

  {
    pergunta:
      "Na gestão, qual é a principal diferença entre missão e visão de uma empresa?",
    resposta1: "Missão é o propósito atual; visão é o futuro desejado",
    resposta2: "São exatamente a mesma coisa",
    resposta3: "Missão é o logotipo; visão é o slogan",
    respostaCerta: "Missão é o propósito atual; visão é o futuro desejado",
  }, // res1 certa

  {
    pergunta:
      "O que a sigla SWOT (ou FOFA em português) analisa em uma empresa?",
    resposta1: "Salários, Vendas, Ofertas e Tarifas",
    resposta2: "Forças, Fraquezas, Oportunidades e Ameaças",
    resposta3: "Setores, Serviços, Produtos e Times",
    respostaCerta: "Forças, Fraquezas, Oportunidades e Ameaças",
  }, // res2 certa

  {
    pergunta: "O que é um KPI na gestão empresarial?",
    resposta1: "Um tipo de imposto",
    resposta2: "Um indicador-chave de desempenho",
    resposta3: "Um cargo de diretoria",
    respostaCerta: "Um indicador-chave de desempenho",
  }, // res2 certa

  {
    pergunta:
      "Segundo a teoria clássica da administração, quais são as quatro funções básicas de um gestor?",
    resposta1: "Vender, comprar, produzir e estocar",
    resposta2: "Contratar, demitir, treinar e avaliar",
    resposta3: "Planejar, organizar, dirigir e controlar",
    respostaCerta: "Planejar, organizar, dirigir e controlar",
  }, // res3 certa

  {
    pergunta: "O que é feedback no contexto de gestão de equipes?",
    resposta1: "Retorno sobre o desempenho de alguém",
    resposta2: "Um tipo de bônus salarial",
    resposta3: "Um relatório financeiro anual",
    respostaCerta: "Retorno sobre o desempenho de alguém",
  }, // res1 certa

  {
    pergunta: "O que representa um organograma dentro de uma empresa?",
    resposta1: "O fluxo de caixa mensal",
    resposta2: "A estrutura hierárquica da empresa",
    resposta3: "O calendário de férias dos funcionários",
    respostaCerta: "A estrutura hierárquica da empresa",
  }, // res2 certa

  {
    pergunta: "Na gestão financeira, o que significa a sigla ROI?",
    resposta1: "Retorno Sobre Investimento",
    resposta2: "Regime de Obrigações Internas",
    resposta3: "Relatório de Operações Industriais",
    respostaCerta: "Retorno Sobre Investimento",
  }, // res1 certa

  {
    pergunta:
      "A Matriz de Eisenhower, usada na gestão do tempo, organiza tarefas com base em quais critérios?",
    resposta1: "Custo e lucro",
    resposta2: "Urgência e importância",
    resposta3: "Tamanho e cor",
    respostaCerta: "Urgência e importância",
  }, // res2 certa

  {
    pergunta: "O que é cultura organizacional?",
    resposta1: "Valores e comportamentos compartilhados na empresa",
    resposta2: "O nome fantasia da empresa",
    resposta3: "O plano de marketing anual",
    respostaCerta: "Valores e comportamentos compartilhados na empresa",
  }, // res1 certa

  {
    pergunta:
      "Na gestão de projetos, o que é o chamado 'escopo' de um projeto?",
    resposta1: "O orçamento total disponível",
    resposta2: "Tudo que precisa ser entregue no projeto",
    resposta3: "A equipe responsável pelo projeto",
    respostaCerta: "Tudo que precisa ser entregue no projeto",
  }, // res2 certa

  {
    pergunta:
      "O que caracteriza a chamada 'liderança situacional', um conceito mais avançado de gestão de pessoas?",
    resposta1: "O líder adapta seu estilo conforme a equipe",
    resposta2: "O líder usa sempre o mesmo estilo",
    resposta3: "O líder delega toda decisão ao RH",
    respostaCerta: "O líder adapta seu estilo conforme a equipe",
  }, // res1 certa

  // ===== NOVAS PERGUNTAS SOBRE A ENERGISA =====

  {
    pergunta: "Quantas distribuidoras o Grupo Energisa controla atualmente?",
    resposta1: "5",
    resposta2: "11",
    resposta3: "20",
    respostaCerta: "11",
  }, // res2 certa

  {
    pergunta: "Onde fica a sede do Grupo Energisa?",
    resposta1: "Belo Horizonte (MG)",
    resposta2: "Cataguases (MG)",
    resposta3: "Rio de Janeiro (RJ)",
    respostaCerta: "Cataguases (MG)",
  }, // res2 certa

  {
    pergunta:
      "Em quantos estados brasileiros a Energisa atua atualmente através de suas distribuidoras?",
    resposta1: "5",
    resposta2: "8",
    resposta3: "11",
    respostaCerta: "11",
  }, // res3 certa

  {
    pergunta:
      "Qual é o código de negociação (ticker) das ações da Energisa na B3?",
    resposta1: "ENGI11",
    resposta2: "ENBR3",
    resposta3: "EGIE3",
    respostaCerta: "ENGI11",
  }, // res1 certa

  {
    pergunta:
      "Aproximadamente quantos clientes o Grupo Energisa atende no Brasil?",
    resposta1: "2 milhões",
    resposta2: "8 milhões",
    resposta3: "30 milhões",
    respostaCerta: "8 milhões",
  }, // res2 certa

  {
    pergunta:
      "Aproximadamente quantas pessoas são beneficiadas pelos serviços da Energisa?",
    resposta1: "5 milhões",
    resposta2: "20 milhões",
    resposta3: "50 milhões",
    respostaCerta: "20 milhões",
  }, // res2 certa

  {
    pergunta:
      "Qual empresa do Grupo Energisa atua na geração distribuída com fontes renováveis?",
    resposta1: "Alsol Energias Renováveis",
    resposta2: "Multi Energisa",
    resposta3: "Energisa Transmissão",
    respostaCerta: "Alsol Energias Renováveis",
  }, // res1 certa

  {
    pergunta:
      "Qual empresa do Grupo Energisa centraliza os canais de atendimento (call center)?",
    resposta1: "Alsol",
    resposta2: "Multi Energisa",
    resposta3: "Central de Serviços Energisa",
    respostaCerta: "Multi Energisa",
  }, // res2 certa

  {
    pergunta:
      "Qual empresa do Grupo é responsável por administrar as linhas de transmissão e subestações ligadas ao Sistema Interligado Nacional?",
    resposta1: "Energisa Geração",
    resposta2: "Energisa Transmissão",
    resposta3: "Energisa Soluções",
    respostaCerta: "Energisa Transmissão",
  }, // res2 certa

  {
    pergunta:
      "Qual empresa do Grupo atua no mercado livre de energia (Ambiente de Contratação Livre)?",
    resposta1: "Energisa Comercializadora",
    resposta2: "Energisa Geração",
    resposta3: "Alsol",
    respostaCerta: "Energisa Comercializadora",
  }, // res1 certa

  {
    pergunta:
      "A Energisa é considerada o maior grupo do setor elétrico em qual tipo de capital?",
    resposta1: "Capital nacional privado",
    resposta2: "Capital estrangeiro",
    resposta3: "Capital estatal",
    respostaCerta: "Capital nacional privado",
  }, // res1 certa

  {
    pergunta:
      "Além da distribuição, em qual outro segmento de infraestrutura elétrica a Energisa também atua?",
    resposta1: "Transmissão de energia",
    resposta2: "Mineração",
    resposta3: "Telecomunicações",
    respostaCerta: "Transmissão de energia",
  }, // res1 certa

  {
    pergunta:
      "A Energisa é reconhecida como o maior grupo elétrico de qual região do Brasil?",
    resposta1: "Amazônia Legal",
    resposta2: "Nordeste",
    resposta3: "Sul",
    respostaCerta: "Amazônia Legal",
  }, // res1 certa

  {
    pergunta:
      "Em que ano a origem da Energisa abriu capital, tornando-se uma das primeiras companhias abertas do Brasil?",
    resposta1: "1907",
    resposta2: "1930",
    resposta3: "1960",
    respostaCerta: "1907",
  }, // res1 certa

  {
    pergunta:
      "Qual é a área aproximada de concessão de distribuição do Grupo Energisa?",
    resposta1: "200 mil km²",
    resposta2: "2 milhões de km²",
    resposta3: "8 milhões de km²",
    respostaCerta: "2 milhões de km²",
  }, // res2 certa

  {
    pergunta:
      "Além de energia elétrica, a Energisa também distribui qual outro tipo de gás?",
    resposta1: "Gás hélio",
    resposta2: "Gás natural",
    resposta3: "Gás hidrogênio",
    respostaCerta: "Gás natural",
  }, // res2 certa

  {
    pergunta:
      "Aproximadamente quantos colaboradores (próprios e terceiros) formam a força de trabalho do Grupo Energisa?",
    resposta1: "2 mil",
    resposta2: "19 mil",
    resposta3: "100 mil",
    respostaCerta: "19 mil",
  }, // res2 certa

  {
    pergunta:
      "O Grupo Energisa é classificado como o quinto maior grupo do Brasil em qual atividade?",
    resposta1: "Distribuição de energia elétrica",
    resposta2: "Produção de petróleo",
    resposta3: "Telecomunicações",
    respostaCerta: "Distribuição de energia elétrica",
  }, // res1 certa

  {
    pergunta:
      "Qual dos estados abaixo NÃO possui distribuidora do Grupo Energisa?",
    resposta1: "Bahia",
    resposta2: "Paraíba",
    resposta3: "Minas Gerais",
    respostaCerta: "Bahia",
  }, // res1 certa

  {
    pergunta:
      "A empresa que deu origem à Energisa começou suas atividades atendendo a qual necessidade de Cataguases, no início do século XX?",
    resposta1: "Iluminação pública e energia elétrica",
    resposta2: "Telefonia",
    resposta3: "Abastecimento de água",
    respostaCerta: "Iluminação pública e energia elétrica",
  }, // res1 certa

  {
    pergunta:
      "Em 2025, os 120 anos do Grupo Energisa foram celebrados com sessão especial em qual casa legislativa?",
    resposta1: "Senado Federal",
    resposta2: "Câmara dos Deputados",
    resposta3: "Assembleia Legislativa de MG",
    respostaCerta: "Senado Federal",
  }, // res1 certa

  {
    pergunta:
      "Como é chamada a plataforma da Energisa que reúne atividades operacionais e serviços transacionais repetitivos?",
    resposta1: "Central de Serviços Energisa",
    resposta2: "Multi Energisa",
    resposta3: "Energisa Soluções",
    respostaCerta: "Central de Serviços Energisa",
  }, // res1 certa

  {
    pergunta:
      "A Energisa Soluções atua principalmente com qual tipo de cliente?",
    resposta1: "Clientes industriais e do setor elétrico",
    resposta2: "Apenas clientes residenciais",
    resposta3: "Apenas clientes rurais",
    respostaCerta: "Clientes industriais e do setor elétrico",
  }, // res1 certa

  {
    pergunta:
      "Qual aquisição ampliou significativamente a base de clientes da Energisa, incorporando distribuidoras que estavam sob intervenção da ANEEL?",
    resposta1: "Aquisição do Grupo Rede",
    resposta2: "Aquisição do Grupo Eletrobras",
    resposta3: "Aquisição do Grupo CPFL",
    respostaCerta: "Aquisição do Grupo Rede",
  }, // res1 certa

  {
    pergunta:
      "As ações da Energisa (ENGI11) integram quais índices da B3 (Bolsa brasileira)?",
    resposta1: "Índices como IEE e IBrX",
    resposta2: "Nenhum índice",
    resposta3: "Apenas índice de commodities",
    respostaCerta: "Índices como IEE e IBrX",
  }, // res1 certa

  // ===== NOVAS PERGUNTAS SOBRE GESTÃO BÁSICA =====

  {
    pergunta: "O que é benchmarking na gestão empresarial?",
    resposta1: "Comparar práticas com outras empresas",
    resposta2: "Calcular impostos da empresa",
    resposta3: "Contratar novos funcionários",
    respostaCerta: "Comparar práticas com outras empresas",
  }, // res1 certa

  {
    pergunta: "O que avalia a Matriz BCG, ferramenta de gestão estratégica?",
    resposta1: "Portfólio de produtos da empresa",
    resposta2: "Folha de pagamento",
    resposta3: "Estoque de matéria-prima",
    respostaCerta: "Portfólio de produtos da empresa",
  }, // res1 certa

  {
    pergunta: "O que é Compliance dentro de uma empresa?",
    resposta1: "Conformidade com leis e normas",
    resposta2: "Área de vendas da empresa",
    resposta3: "Tipo de contrato de trabalho",
    respostaCerta: "Conformidade com leis e normas",
  }, // res1 certa

  {
    pergunta: "O que significa Turnover na gestão de pessoas?",
    resposta1: "Rotatividade de funcionários",
    resposta2: "Lucro líquido da empresa",
    resposta3: "Meta de vendas mensal",
    respostaCerta: "Rotatividade de funcionários",
  }, // res1 certa

  {
    pergunta: "O que é onboarding em uma empresa?",
    resposta1: "Processo de integração de novos colaboradores",
    resposta2: "Demissão em massa",
    resposta3: "Avaliação de desempenho anual",
    respostaCerta: "Processo de integração de novos colaboradores",
  }, // res1 certa

  {
    pergunta: "Para que serve o Diagrama de Ishikawa (espinha de peixe)?",
    resposta1: "Identificar causas de um problema",
    resposta2: "Calcular o fluxo de caixa",
    resposta3: "Organizar o organograma",
    respostaCerta: "Identificar causas de um problema",
  }, // res1 certa

  {
    pergunta:
      "O que caracteriza o método Just in Time na gestão de produção e estoque?",
    resposta1: "Produzir só quando necessário",
    resposta2: "Estocar grande quantidade sempre",
    resposta3: "Terceirizar toda a produção",
    respostaCerta: "Produzir só quando necessário",
  }, // res1 certa

  {
    pergunta: "O que é Kaizen, conceito japonês aplicado à gestão?",
    resposta1: "Melhoria contínua dos processos",
    resposta2: "Corte de gastos único",
    resposta3: "Demissão programada",
    respostaCerta: "Melhoria contínua dos processos",
  }, // res1 certa

  {
    pergunta: "O que é o Balanced Scorecard (BSC)?",
    resposta1: "Ferramenta de indicadores estratégicos",
    resposta2: "Sistema de ponto eletrônico",
    resposta3: "Plano de saúde corporativo",
    respostaCerta: "Ferramenta de indicadores estratégicos",
  }, // res1 certa

  {
    pergunta: "O que são stakeholders de uma empresa?",
    resposta1: "Partes interessadas na empresa",
    resposta2: "Apenas os acionistas",
    resposta3: "Apenas os concorrentes",
    respostaCerta: "Partes interessadas na empresa",
  }, // res1 certa

  {
    pergunta:
      "O que é ponto de equilíbrio (break-even) nas finanças de uma empresa?",
    resposta1: "Quando receitas igualam despesas",
    resposta2: "O lucro máximo da empresa",
    resposta3: "O prejuízo total do período",
    respostaCerta: "Quando receitas igualam despesas",
  }, // res1 certa

  {
    pergunta: "O que é fluxo de caixa?",
    resposta1: "Entradas e saídas de dinheiro da empresa",
    resposta2: "Relatório de vendas do mês",
    resposta3: "Plano de marketing anual",
    respostaCerta: "Entradas e saídas de dinheiro da empresa",
  }, // res1 certa

  {
    pergunta: "O que é orçamento empresarial (budget)?",
    resposta1: "Planejamento financeiro futuro",
    resposta2: "Contrato de trabalho",
    resposta3: "Inventário de produtos",
    respostaCerta: "Planejamento financeiro futuro",
  }, // res1 certa

  {
    pergunta: "O que é gestão por competências?",
    resposta1: "Alinhar habilidades às necessidades da empresa",
    resposta2: "Pagar sempre o mesmo salário fixo",
    resposta3: "Medir apenas horas trabalhadas",
    respostaCerta: "Alinhar habilidades às necessidades da empresa",
  }, // res1 certa

  {
    pergunta: "O que é endomarketing?",
    resposta1: "Ações de marketing para o público interno",
    resposta2: "Propaganda voltada ao público externo",
    resposta3: "Pesquisa sobre a concorrência",
    respostaCerta: "Ações de marketing para o público interno",
  }, // res1 certa

  {
    pergunta: "O que é comunicação assertiva no ambiente de trabalho?",
    resposta1: "Expressar ideias com clareza e respeito",
    resposta2: "Evitar falar com a equipe",
    resposta3: "Comunicação feita apenas por escrito",
    respostaCerta: "Expressar ideias com clareza e respeito",
  }, // res1 certa

  {
    pergunta: "O que é delegação na gestão de equipes?",
    resposta1: "Atribuir tarefas e responsabilidades a outros",
    resposta2: "Centralizar todas as decisões",
    resposta3: "Eliminar cargos da equipe",
    respostaCerta: "Atribuir tarefas e responsabilidades a outros",
  }, // res1 certa

  {
    pergunta: "O que é plano de carreira?",
    resposta1: "Caminho estruturado de crescimento profissional",
    resposta2: "Tabela de salários fixos",
    resposta3: "Escala de férias dos funcionários",
    respostaCerta: "Caminho estruturado de crescimento profissional",
  }, // res1 certa

  {
    pergunta: "O que é clima organizacional?",
    resposta1: "Percepção dos colaboradores sobre o ambiente de trabalho",
    resposta2: "Número total de funcionários",
    resposta3: "Faturamento anual da empresa",
    respostaCerta: "Percepção dos colaboradores sobre o ambiente de trabalho",
  }, // res1 certa

  {
    pergunta: "O que é absenteísmo na gestão de pessoas?",
    resposta1: "Ausência frequente de colaboradores ao trabalho",
    resposta2: "Excesso de horas extras",
    resposta3: "Alta produtividade da equipe",
    respostaCerta: "Ausência frequente de colaboradores ao trabalho",
  }, // res1 certa

  {
    pergunta: "O que analisam as 5 Forças de Porter?",
    resposta1: "A competitividade de um setor",
    resposta2: "A lista de fornecedores da empresa",
    resposta3: "Os tipos de contrato de trabalho",
    respostaCerta: "A competitividade de um setor",
  }, // res1 certa

  {
    pergunta: "O que é brainstorming?",
    resposta1: "Técnica de geração de ideias em grupo",
    resposta2: "Técnica de corte de custos",
    resposta3: "Tipo de treinamento técnico",
    respostaCerta: "Técnica de geração de ideias em grupo",
  }, // res1 certa

  {
    pergunta: "O que é empowerment na gestão de pessoas?",
    resposta1: "Dar mais autonomia aos colaboradores",
    resposta2: "Reduzir os salários da equipe",
    resposta3: "Aumentar os níveis hierárquicos",
    respostaCerta: "Dar mais autonomia aos colaboradores",
  }, // res1 certa

  {
    pergunta: "O que é governança corporativa?",
    resposta1: "Práticas de gestão, controle e transparência",
    resposta2: "Apenas o setor jurídico da empresa",
    resposta3: "O mesmo que marketing institucional",
    respostaCerta: "Práticas de gestão, controle e transparência",
  }, // res1 certa

  {
    pergunta: "O que é a metodologia SMART, usada na definição de metas?",
    resposta1: "Metas específicas, mensuráveis e com prazo",
    resposta2: "Apenas metas financeiras",
    resposta3: "Metas sem prazo definido",
    respostaCerta: "Metas específicas, mensuráveis e com prazo",
  }, // res1 certa
];

export { questionario as listaDePerguntas };
