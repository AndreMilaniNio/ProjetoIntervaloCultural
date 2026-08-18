import { useState } from "react";
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

// Decide uma classe modificadora de tamanho de fonte a partir do
// comprimento do texto, para o texto nunca ultrapassar a caixa laranja.
function classeDeTamanho(texto, limites) {
  if (!texto) return "";
  if (texto.length > limites.grande) return "texto-minimo";
  if (texto.length > limites.medio) return "texto-reduzido";
  return "";
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
      <main className="quiz-energisa">
        <div className="tela-final animar">
          <div className="caixa-resultado-final">
            <h1 className="titulo-resultado">Resultado Final</h1>
            <p className="texto-resultado">
              {acertos < 10
                ? `Você acertou ${acertos} de ${perguntasDoJogo.length} perguntas. Infelizmente não ganha o precioso prêmio...`
                : `Você acertou mais de 10 perguntas, conseguiu o prêmio!`}
            </p>
          </div>

          <span className="area-botao-reiniciar">
            <button className="botao-reiniciar" onClick={reiniciarQuiz}>
              Jogar novamente
            </button>
          </span>
        </div>

        <p className="rodape-assinatura">Made by André Milani</p>
      </main>
    );
  }

  const perguntaAtual = perguntasDoJogo[NumeroDaQuestao];
  const classePergunta = classeDeTamanho(perguntaAtual.pergunta, {
    medio: 60,
    grande: 100,
  });

  // Tela comum do Quiz
  return (
    <main className="quiz-energisa">
      <img
        className="logomarca-energisa"
        src="/public/EnergisaLogomarca.png"
        alt="Logomarca Energisa"
      />
      <div className="palco-quiz">
        <div className="painel-quiz">
          <div className="cabecalho-painel">
            <span className="contador-perguntas">
              {NumeroDaQuestao + 1} / {perguntasDoJogo.length}
            </span>
          </div>

          <div className={`caixa-pergunta ${classePergunta}`}>
            <h1 className="texto-pergunta">
              <span className="numero-pergunta">{NumeroDaQuestao + 1}.</span>{" "}
              {perguntaAtual.pergunta}
            </h1>
          </div>

          <ul className="lista-respostas">
            {[
              perguntaAtual.resposta1,
              perguntaAtual.resposta2,
              perguntaAtual.resposta3,
            ].map((resposta, indice) => {
              const classeResposta = classeDeTamanho(resposta, {
                medio: 18,
                grande: 30,
              });
              return (
                <li className="item-resposta" key={indice}>
                  <button
                    className={`botao-resposta ${classeResposta} ${
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
              );
            })}
          </ul>

          {/* Caixa de retorno visual ao responder */}
          <span
            className={`feedback-mensagem ${
              feedback === "Certa a resposta!"
                ? "feedback-mensagem--certo"
                : feedback === "Errada a resposta!"
                  ? "feedback-mensagem--errado"
                  : ""
            }`}
          >
            <h2
              className={feedback ? "feedback-texto animar" : "feedback-texto"}
            >
              {feedback}
            </h2>
          </span>
        </div>
      </div>

      <p className="rodape-assinatura">Made by André Milani</p>
    </main>
  );
}

export default App;
