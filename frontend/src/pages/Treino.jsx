import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useConfiguracoes } from "../context/ConfiguracoesContext";
import {
    obterRespostasAceitas,
    respostasIguais
} from "../utils/respostaCorreta"
import { obterExibicao } from "../utils/exibicaoVerbo";
import Modal from "../components/Modal";
import "./css/treino.css";
import Toast from "../components/Toast";


const API_URL = "http://localhost:5000/api";



const nomesForma = {
    masu: "ます",
    te: "て",
    ta: "た",
    nai: "ない",
    mashou: "ましょう"
};

export default function Treino() {

     const navigate = useNavigate();

    const { configuracoes } = useConfiguracoes();

    const [filaTreino, setFilaTreino] = useState([]);

    const [resposta, setResposta] = useState("");
    
    const [mensagemToast, setMensagemToast] = useState("");

    const [tipoToast, setTipoToast] = useState(""); 

    const [resultado, setResultado] = useState(null);

    const [acertos, setAcertos] = useState(0);

    const [erros, setErros] = useState(0);

    const [estatisticasSessao, setEstatisticasSessao] = useState({});

    const [treinoFinalizado, setTreinoFinalizado] = useState(false);

    const [modalAberto, setModalAberto] = useState(false);

    const inputRef = useRef(null);
    const proximoRef = useRef(null);

  useEffect(() => {
    if (filaTreino.length === 0) {
        return;
    }

    if (resultado) {
        proximoRef.current?.focus({ preventScroll: true });
    } else {
        inputRef.current?.focus({ preventScroll: true });
    }
}, [resultado, filaTreino]);

    useEffect(() => {

        carregarTreino();

    }, []);

    async function carregarTreino() {

        const grupos = Object.keys(configuracoes.grupos)

            .filter(grupo => configuracoes.grupos[grupo])

            .join(",");

        const response = await fetch(

            `${API_URL}/treino?grupos=${grupos}&quantidade=${configuracoes.quantidade}`

        );

        const verbos = await response.json();

        setFilaTreino(verbos);

    }
  function acertouVerbo() {

    const novaFila = [...filaTreino];

    novaFila.shift();

    setFilaTreino(novaFila);

}

function errouVerbo() {

    const novaFila = [...filaTreino];

    const verbo = novaFila.shift();

    novaFila.push(verbo);

    setFilaTreino(novaFila);

}
async function salvarEstatisticas() {

    try {

        for (const id of Object.keys(estatisticasSessao)) {

            const estatisticas = estatisticasSessao[id];

            await fetch(
                `${API_URL}/verbs/${id}/estatisticas`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        acertos: estatisticas.acertos,
                        erros: estatisticas.erros
                    })
                }
            );

        }

        console.log(
            "Estatísticas do treino salvas com sucesso."
        );

    } catch (error) {

        console.error(
            "Erro ao salvar estatísticas:",
            error
        );

    }

}
function voltar() {

    if (acertos + erros === 0) {

        navigate("/");

        return;
    }

    setModalAberto(true);
}

async function salvarESair() {

    await salvarEstatisticas();

    navigate("/");

}

function sairSemSalvar() {

    navigate("/");

}

async function proximaPergunta() {

    if (resultado.acertou) {

        const novaFila = [...filaTreino];

        novaFila.shift();

        if (novaFila.length === 0) {

    setFilaTreino([]);

    await salvarEstatisticas();

    setTreinoFinalizado(true);
    setResultado(null);
    setResposta("");

    return;
}

        setFilaTreino(novaFila);

    } else {

        const novaFila = [...filaTreino];

        const verbo = novaFila.shift();

        novaFila.push(verbo);

        setFilaTreino(novaFila);
    }

    setResultado(null);
    setResposta("");

}
if (treinoFinalizado) {

    const totalRespostas = acertos + erros;

    const percentual =
        totalRespostas > 0
            ? Math.round((acertos / totalRespostas) * 100)
            : 0;

    return (
        <div className="treino-finalizado">

            <h1>🎉 Treino concluído!</h1>

            <div className="resultado-final">

                <div className="resultado-final-item">
                    <strong>ACERTOS</strong>
                    <span className="acertos">
                        {acertos}
                    </span>
                </div>

                <div className="resultado-final-item">
                    <strong>ERROS</strong>
                    <span className="erros">
                        {erros}
                    </span>
                </div>

                <div className="resultado-final-item">
                    <strong>APROVEITAMENTO</strong>
                    <span>
                        {percentual}%
                    </span>
                </div>

            </div>

            <div className="botoes-final">

                <button
                    onClick={() => window.location.reload()}
                    className="btn-final repetir"
                >
                    🔄 Repetir treino
                </button>

                <button
                    onClick={() => window.location.href = "/"}
                    className="btn-final"
                >
                    🏠 Voltar ao menu
                </button>

            </div>

        </div>
    );
}
if (filaTreino.length === 0) {

    return null;

}

function verificarResposta() {

   if (resposta.trim() === "") {
    setMensagemToast("Digite uma resposta antes de continuar.");
    setTipoToast("erro");
    return;
}
    const verboAtual = filaTreino[0];

    const respostasAceitas = obterRespostasAceitas(
        verboAtual,
        configuracoes.forma,
        configuracoes.tipoResposta
    );


   const acertou = respostasAceitas.some(
    (respostaAceita) =>
        respostasIguais(resposta, respostaAceita)
);

    if (acertou) {

    setAcertos((valor) => valor + 1);

} else {

    setErros((valor) => valor + 1);

}

    setEstatisticasSessao((estadoAtual) => {

    const id = verboAtual.id;

    const estatisticaAtual =
        estadoAtual[id] || {
            acertos: 0,
            erros: 0
        };

    return {
        ...estadoAtual,

        [id]: {
            acertos:
                estatisticaAtual.acertos +
                (acertou ? 1 : 0),

            erros:
                estatisticaAtual.erros +
                (acertou ? 0 : 1)
        }
    };

});
    setResultado({
        acertou,
        respostaUsuario: resposta,
        respostasAceitas
    });

}
const exibicao = obterExibicao(
    filaTreino[0],
    configuracoes.exibicao
);

  return (
    <>
        {mensagemToast && (
            <Toast
                mensagem={mensagemToast}
                tipo={tipoToast}
                onClose={() => setMensagemToast("")}
            />
        )}

        <div className="treino-container">
                <button
            onClick={voltar}
            className="btn-voltar"
        >
            ←
        </button>

        <h1 className="titulo-treino"> Treino </h1>

        
        <div className="treino-info">

    <div className="info-item">
        <strong>Forma</strong>
        <span>{nomesForma[configuracoes.forma]}</span>
    </div>

   <div className="info-item">
    <strong>Grupos</strong>

    <div className="grupos-lista">
        {Object.keys(configuracoes.grupos)
            .filter(g => configuracoes.grupos[g])
            .map(g => {
                const nomes = {
                    godan: "Godan",
                    ichidan: "Ichidan",
                    irregular: "Irregulares"
                };

                return (
                    <span key={g}>
                        {nomes[g]}
                    </span>
                );
            })}
    </div>
</div>

    <div className="info-item">
        <strong>Quantidade</strong>
        <span>{filaTreino.length} verbos</span>
    </div>

</div>


       <div className="verbo-exibicao">
        <h1
      className="verbo-principal"
>
    {exibicao.linha1}
</h1>

<p
    className="verbo-secundario" 
>
    {exibicao.linha2}
       </p>   
        </div>

      
<div className="significado-container">
    
                <strong>
                    {filaTreino[0].significados.join(", ")}
                </strong>
</div>
        

  <div className="area-interacao">

    {!resultado ? (

        <div className="area-resposta">

            <input
                ref={inputRef}
                type="text"
                value={resposta}
                onChange={(e) => setResposta(e.target.value)}
                placeholder="Digite a resposta"
                className="input-resposta"
                 onKeyDown={(e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            verificarResposta();
        }
    }}
            />

            <button
                onClick={verificarResposta}
                className="btn-responder"
            >
                Responder
            </button>

        </div>

    ) : (

     <div
    className={`resultado-container ${
        resultado.acertou
            ? "resultado-correto"
            : "resultado-incorreto"
    }`}
>  

            <h2>
                {resultado.acertou
                    ? "✅ Correto!"
                    : "❌ Incorreto!"}
            </h2>

     <div className="resultado-info">

    <div className="resultado-item">
        <strong>Sua resposta</strong>
        <span>{resultado.respostaUsuario}</span>
    </div>

    <div className="resultado-item">
        <strong>Correta</strong>
       <div className="respostas-corretas">
    {resultado.respostasAceitas.map((resposta, index) => (
        <span key={index}>
            {resposta}
        </span>
    ))}
</div>
    </div>

   <div className="resultado-item">
    <strong>Significado</strong>

    <div className="significados-lista">
        {filaTreino[0].conjugacoes[configuracoes.forma].significado
            .split("/")
            .map((significado, index) => (
                <span key={index}>
                    {significado.trim()}
                </span>
            ))}
    </div>
</div> 

</div>      
            <button
            ref={proximoRef}
                onKeyDown={(e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            proximaPergunta();
        }
    }}
                onClick={proximaPergunta}
                className="btn-proximo"
            >
                {filaTreino.length === 1 && resultado.acertou
                    ? "🏁 Finalizar treino"
                    : "Próximo →"}
            </button>

        </div>

    )}

</div>  


<Modal
    aberto={modalAberto}
    titulo="Sair do treino"
    mensagem="Você já respondeu algumas perguntas. Deseja salvar seu progresso?"
    onClose={() => setModalAberto(false)}
>
    <div className="modal-botoes">

        <button
            onClick={salvarESair}
            className="modal-btn modal-salvar"
        >
            💾 Salvar e sair
        </button>

        <button
            onClick={sairSemSalvar}
            className="modal-btn modal-sair"
        >
            🗑️ Sair sem salvar
        </button>

        <button
            onClick={() => setModalAberto(false)}
            className="modal-btn modal-continuar"
        >
            Continuar treinando
        </button>

    </div>
</Modal>

    </div>
 </>
);

}