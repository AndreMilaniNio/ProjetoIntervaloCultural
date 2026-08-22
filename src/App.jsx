import { useState, useMemo } from "react";
import "./App.css";
import { listaDePerguntas } from "./data/listaDePerguntas";

// Embaralha um array (Fisher-Yates) sem alterar o original
function embaralharPerguntas(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Gera uma nova lista com 10 perguntas aleatórias
function gerarPerguntasDoJogo() {
  return embaralharPerguntas(listaDePerguntas).slice(0, 10);
}

// Funcionalidade geral da aplicação
function App() {
  const [feedback, setFeedback] = useState("");
  const [NumeroDaQuestao, setNumeroDaQuestao] = useState(0);
  const [desabilitado, setDesabilitado] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState("");

  // Lista de 10 perguntas sorteadas, gerada uma vez ao montar o componente
  const [perguntasDoJogo, setPerguntasDoJogo] = useState(gerarPerguntasDoJogo);

  // Pergunta atual (precisa vir antes do return condicional, pois hooks abaixo dependem dela)
  const perguntaAtual = perguntasDoJogo[NumeroDaQuestao];

  // Embaralha as opções de resposta da pergunta atual.
  // Recalcula apenas quando a pergunta muda, para não embaralhar de novo a cada clique/re-render.
  const opcoesEmbaralhadas = useMemo(() => {
    if (!perguntaAtual) return [];
    return embaralharPerguntas([
      perguntaAtual.resposta1,
      perguntaAtual.resposta2,
      perguntaAtual.resposta3,
    ]);
  }, [perguntaAtual]);

  // Verifica se a função escolhida é a correta
  function verificaResposta(respostaEscolhida) {
    setDesabilitado(true);
    setRespostaSelecionada(respostaEscolhida);

    if (respostaEscolhida === perguntasDoJogo[NumeroDaQuestao].respostaCerta) {
      setAcertos((old) => old + 1);
      setFeedback("Certa a resposta!");
    } else {
      setFeedback("Errada a resposta!");
    }

    setTimeout(() => {
      setFeedback("");
      setDesabilitado(false);
      setRespostaSelecionada("");
      setNumeroDaQuestao((old) => old + 1);
    }, 1600);
  }

  // Reinicia o Quiz a partir de um certo valor e sorteia novas perguntas
  function reiniciarQuiz() {
    setPerguntasDoJogo(gerarPerguntasDoJogo()); // sorteia 10 novas perguntas
    setNumeroDaQuestao(0);
    setAcertos(0);
    setFeedback("");
    setDesabilitado(false);
    setRespostaSelecionada("");
  }

  // Tela final após terminar o quiz
  if (NumeroDaQuestao >= perguntasDoJogo.length) {
    return (
      <main className="container-quiz">
        <div className="tela-resultado-final animacao-entrada">
          <div className="caixa-resumo-final">
            <h1 className="titulo-resumo-final">Resultado Final</h1>
            <p className="texto-resumo-final">
              {acertos < 7
                ? `Você acertou ${acertos} de ${perguntasDoJogo.length} perguntas. Infelizmente não ganha o precioso prêmio...`
                : `Você acertou ${acertos} de ${perguntasDoJogo.length} perguntas, conseguiu o prêmio!`}
            </p>
          </div>

          <span className="container-botao-reiniciar">
            <button className="botao-reiniciar" onClick={reiniciarQuiz}>
              Jogar novamente
            </button>
          </span>
        </div>

        <p className="rodape-assinatura">Feito por - André Milani</p>
      </main>
    );
  }

  // Tela comum do Quiz
  return (
    <main className="container-quiz">
      <img
        className="logomarca-energisa"
        src="./EnergisaLogomarca.png"
        alt="Logomarca Energisa"
      />
      <div className="container-perguntas">
        <div className="painel-quiz">
          <div className="cabecalho-painel">
            <span className="contador-perguntas">
              {NumeroDaQuestao + 1} / {perguntasDoJogo.length}
            </span>
          </div>

          <div className="corpo-quiz">
            <div className="caixa-enunciado">
              <h1 className="texto-enunciado">
                <span className="numero-enunciado">{NumeroDaQuestao + 1}.</span>{" "}
                {perguntaAtual.pergunta}
              </h1>
            </div>

            <ul className="lista-respostas">
              {opcoesEmbaralhadas.map((resposta, indice) => (
                <li className="item-resposta" key={indice}>
                  <button
                    className={`botao-resposta ${
                      desabilitado
                        ? resposta === perguntaAtual.respostaCerta
                          ? "resposta-correta"
                          : resposta === respostaSelecionada
                            ? "resposta-errada"
                            : "resposta-neutra"
                        : ""
                    }`}
                    onClick={() => verificaResposta(resposta)}
                    disabled={desabilitado}
                  >
                    {resposta}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Caixa de retorno visual ao responder */}
          <span
            className={`feedback-mensagem ${
              feedback === "Certa a resposta!"
                ? "feedback-mensagem-correta"
                : feedback === "Errada a resposta!"
                  ? "feedback-mensagem-errada"
                  : ""
            }`}
          >
            <h2
              className={
                feedback ? "feedback-texto animacao-entrada" : "feedback-texto"
              }
            >
              {feedback}
            </h2>
          </span>
        </div>
      </div>

      <p className="rodape-assinatura">Feito por - André Milani</p>
    </main>
  );
}

export default App;
