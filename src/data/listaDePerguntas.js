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
    resposta3: "Energia elétrica (geração, distribuição e transmissão)",
    respostaCerta: "Energia elétrica (geração, distribuição e transmissão)",
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
    resposta1: "Distribuição de gás natural e biometano, e soluções renováveis",
    resposta2: "Fabricação de automóveis",
    resposta3: "Mineração de ferro",
    respostaCerta:
      "Distribuição de gás natural e biometano, e soluções renováveis",
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
    resposta3: "Da mesma família fundadora, ao longo de gerações",
    respostaCerta: "Da mesma família fundadora, ao longo de gerações",
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
    resposta1:
      "Missão é o propósito atual da empresa; visão é onde ela quer chegar no futuro",
    resposta2: "São exatamente a mesma coisa",
    resposta3: "Missão é o logotipo; visão é o slogan",
    respostaCerta:
      "Missão é o propósito atual da empresa; visão é onde ela quer chegar no futuro",
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
    resposta2: "Um indicador-chave de desempenho, usado para medir resultados",
    resposta3: "Um cargo de diretoria",
    respostaCerta:
      "Um indicador-chave de desempenho, usado para medir resultados",
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
    resposta1:
      "Um retorno dado sobre o desempenho de alguém, para reconhecer acertos ou apontar melhorias",
    resposta2: "Um tipo de bônus salarial",
    resposta3: "Um relatório financeiro anual",
    respostaCerta:
      "Um retorno dado sobre o desempenho de alguém, para reconhecer acertos ou apontar melhorias",
  }, // res1 certa

  {
    pergunta: "O que representa um organograma dentro de uma empresa?",
    resposta1: "O fluxo de caixa mensal",
    resposta2:
      "A estrutura hierárquica e as relações entre os cargos e setores",
    resposta3: "O calendário de férias dos funcionários",
    respostaCerta:
      "A estrutura hierárquica e as relações entre os cargos e setores",
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
    resposta1:
      "O conjunto de valores, crenças e comportamentos compartilhados dentro de uma empresa",
    resposta2: "O nome fantasia da empresa",
    resposta3: "O plano de marketing anual",
    respostaCerta:
      "O conjunto de valores, crenças e comportamentos compartilhados dentro de uma empresa",
  }, // res1 certa

  {
    pergunta:
      "Na gestão de projetos, o que é o chamado 'escopo' de um projeto?",
    resposta1: "O orçamento total disponível",
    resposta2:
      "O conjunto de tudo que precisa ser entregue e realizado para concluir o projeto",
    resposta3: "A equipe responsável pelo projeto",
    respostaCerta:
      "O conjunto de tudo que precisa ser entregue e realizado para concluir o projeto",
  }, // res2 certa

  {
    pergunta:
      "O que caracteriza a chamada 'liderança situacional', um conceito mais avançado de gestão de pessoas?",
    resposta1:
      "O líder adapta seu estilo de liderança conforme a maturidade e o contexto da equipe",
    resposta2:
      "O líder usa sempre o mesmo estilo, independentemente da situação",
    resposta3: "O líder delega toda a tomada de decisão para o RH",
    respostaCerta:
      "O líder adapta seu estilo de liderança conforme a maturidade e o contexto da equipe",
  }, // res1 certa
];

export { questionario as listaDePerguntas };
