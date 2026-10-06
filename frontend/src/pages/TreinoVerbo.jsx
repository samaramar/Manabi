import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Toast from "../components/Toast";
import Modal from "../components/Modal";
const API_URL = "http://localhost:5000/api";
import { obterExibicao } from "../utils/exibicaoVerbo" ;
import { useConfiguracoes } from "../context/ConfiguracoesContext";
import {
    obterRespostasAceitas,
    obterRespostaExibicao,
    respostasIguais
} from "../utils/respostaCorreta";
import "./css/treinoIndividual.css";

export default function TreinoVerbo() {
   
    const { id } = useParams();
    const navigate = useNavigate();
    const { configuracoes } = useConfiguracoes();
    const [verbo, setVerbo] = useState(null);

    const [modalAberto, setModalAberto] = useState(false);

    const [mensagemToast, setMensagemToast] = useState("");
    const [tipoToast, setTipoToast] = useState("");

    const [corrigida, setCorrigida] = useState(false);
    const [resultado, setResultado] = useState(null);

    const [treinoFinalizado, setTreinoFinalizado] = useState(false);

    const [indicePergunta, setIndicePergunta] = useState(0);
    const [resposta, setResposta] = useState("");
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);
    const inputRef = useRef(null);
const proximoRef = useRef(null);

    useEffect(() => {
    if (!verbo) {
        return;
    }

    if (resultado) {
        proximoRef.current?.focus({ preventScroll: true });
    } else {
        inputRef.current?.focus({ preventScroll: true });
    }
}, [resultado, indicePergunta, verbo]);

    const perguntas = [
        {
            nome: "ます",
            campo: "masu"
        },
        {
            nome: "て",
            campo: "te"
        },
        {
            nome: "た",
            campo: "ta"
        },
        {
            nome: "ない",
            campo: "nai"
        },
        {
            nome: "ましょう",
            campo: "mashou"
        }
    ];

    useEffect(() => {

    axios
        .get(`${API_URL}/verbs/${id}`)
        .then((response) => {
            setVerbo(response.data);
        })
        .catch((error) => {
            console.error("Erro ao buscar verbo:", error);
        });

}, [id]);

if (!verbo) {
    return <p>Carregando...</p>;
}

const exibicao = obterExibicao(
    verbo,
    configuracoes.exibicao
);

function voltar() {

    if (acertos + erros === 0) {

        navigate(`/verbos/${id}`);
        return;

    }

    setModalAberto(true);

}


async function salvarESair() {

   await axios.patch(
    `${API_URL}/verbs/${id}/estatisticas`,
    {
        acertos,
        erros
    }
);

navigate(`/verbos/${id}`);

}

function sairSemSalvar() {

    navigate(`/verbos/${id}`);

}

function verificarResposta() {

    if (resposta.trim() === "") {

    setMensagemToast("Digite uma resposta antes de continuar.");
    setTipoToast("erro");

    return;
}

   const respostasAceitas = obterRespostasAceitas(
    verbo,
    perguntas[indicePergunta].campo,
    configuracoes.tipoResposta
);

  const respostaCorreta = obterRespostaExibicao(
    verbo,
    perguntas[indicePergunta].campo,
    configuracoes.tipoResposta
);

   if (
    respostasAceitas.some(
        (respostaAceita) =>
            respostasIguais(resposta, respostaAceita)
    )
) {

    setAcertos((valor) => valor + 1);

    setResultado({
        acertou: true,
        respostaUsuario: resposta,
        respostaCorreta,
    });

} else {

    setErros((valor) => valor + 1);

    setResultado({
        acertou: false,
        respostaUsuario: resposta,
        respostaCorreta,
    });

}

setCorrigida(true);
}

async function proximaPergunta()  {

    setResposta("");
    setResultado(null);
    setCorrigida(false);

    if (indicePergunta < perguntas.length - 1) {

        setIndicePergunta((valor) => valor + 1);

    } else {

    try {

        await axios.patch(
            `${API_URL}/verbs/${id}/estatisticas`,
            {
                acertos,
                erros
            }
        );

        setTreinoFinalizado(true);

    } catch (error) {

        console.error(
            "Erro ao salvar estatísticas:",
            error
        );

    }

}

}

function repetirTreino() {

    setIndicePergunta(0);
    setResposta("");
    setAcertos(0);
    setErros(0);
    setResultado(null);
    setCorrigida(false);
    setTreinoFinalizado(false);

}


if (treinoFinalizado) {

    const totalPerguntas = perguntas.length;
    const percentual = Math.round((acertos / totalPerguntas) * 100);

    return (
    <>
        {mensagemToast && (
            <Toast
                mensagem={mensagemToast}
                tipo={tipoToast}
                onClose={() => setMensagemToast("")}
            />
        )}

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
                    onClick={repetirTreino}
                    className="btn-final"
                >
                    🔄 Repetir treino
                </button>

                <button
                    onClick={() => navigate(`/verbos/${id}`)}
                    className="btn-final"
                >
                    📖 Voltar ao verbo
                </button>

            </div>

        </div>
    </>
);

}

return (
    <>
        {mensagemToast && (
            <Toast
                mensagem={mensagemToast}
                tipo={tipoToast}
                 onClose={() => setMensagemToast("")}
            />
        )}
    <div
        className="treino-verbo-container"
    >

         <button
        onClick={voltar}
       className="btn-voltar-verbo" 
    >
         ←
    </button>

       <h1 className="titulo-treino-verbo">
     Treino Individual
</h1>

       

    <div className="verbo-individual">

    <h1 className="verbo-principal-individual">
        {exibicao.linha1}
    </h1>

    <p className="verbo-secundario-individual">
        {exibicao.linha2}
    </p>

</div>

<div className="significado-individual">

    

    <strong>
        {verbo.significados.join(", ")}
    </strong>

</div> 
<hr /> 
       <p className="contador-pergunta">
    Pergunta {indicePergunta + 1} de {perguntas.length}
</p> 
   <div className="area-resposta-individual">

    {!corrigida ? (
        <>
            <h2 className="pergunta-treino">
                Qual é a forma {perguntas[indicePergunta].nome}?
            </h2>

            <input
                ref={inputRef}
                type="text"
                value={resposta}
                onChange={(e) => setResposta(e.target.value)}
                placeholder="Digite a resposta"
                className="input-resposta-verbo"
                onKeyDown={(e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            verificarResposta();
        }
    }}
            />

           <button
    onClick={verificarResposta}
    className="btn-responder-verbo"
>
                Responder
            </button>
        </>
    ) : (
        <>
    <div className={`resultado-container-individual ${
    resultado.acertou
        ? "resultado-correto-individual"
        : "resultado-incorreto-individual"
}`}>

    <div className="resultado-item-individual">
        <strong>
            {resultado.acertou
                ? "✅ Correto!"
                : "❌ Incorreto!"}
        </strong>
    </div>

   <div className="resultado-item-individual">
    <strong>Sua resposta:</strong>
        <span>{resultado.respostaUsuario}</span>
    </div>

    <div className="resultado-item-individual">
    <strong>Correta:</strong>

        {configuracoes.tipoResposta === "flexivel" ? (

            <div className="resposta-formas-individual">

    <span>
        {verbo.conjugacoes[
            perguntas[indicePergunta].campo
        ].escritaPrincipal}
    </span>

    <span>
        {verbo.conjugacoes[
            perguntas[indicePergunta].campo
        ].hiragana}
    </span>

    <span>
        {verbo.conjugacoes[
            perguntas[indicePergunta].campo
        ].romaji}
    </span>

</div>

        ) : (

            <span>
                {resultado.respostaCorreta}
            </span>

        )}
    </div>

  <div className="resultado-item-individual">
    <strong>Significado:</strong>

       <div className="resultado-significado-individual">
    {verbo.conjugacoes[
        perguntas[indicePergunta].campo
    ].significado
        .split("/")
        .map((significado, index) => (
            <div key={index}>
                {significado.trim()}
            </div>
        ))}
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
    className="btn-proximo-individual"
>
    {indicePergunta === perguntas.length - 1
        ? "🏁 Finalizar treino"
        : "Próximo →"}
</button>

</div> 
        </>
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
    

   


    