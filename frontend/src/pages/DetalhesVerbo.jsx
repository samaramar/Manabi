import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/detalhesVerbo.css";
const API_URL = "http://localhost:5000/api";

export default function DetalhesVerbo() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [verbo, setVerbo] = useState(null);

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

    return <p style={{ padding: "20px" }}>Carregando...</p>;

}

return (

    <div className="detalhes-verbo-container">

        <button onClick={() => navigate("/lista")} className="btn-voltar">
   ←
        </button>

        <div className="cabecalho-verbo">

    <h1 className="verbo-kanji">
        {verbo.escritaPrincipal}
    </h1>

    <p className="verbo-hiragana">
        {verbo.hiragana}
    </p>

    <p className="verbo-katakana">
        {verbo.katakana}
    </p>

    <p className="verbo-romaji">
        {verbo.romaji}
    </p>

</div>

   <div className="card-detalhes">

    <h2>📖 Significados</h2>

    <ul className="lista-significados">
        {verbo.significados.map((s, index) => (
            <li key={index}>{s}</li>
        ))}
    </ul>

</div>    

   <div className="card-detalhes card-informacoes">

    <h2>📚 Informações</h2>

    <div className="informacoes-grid">

        <div className="informacao-item">
            <span>Grupo</span>
            <strong>
                {verbo.grupo === "godan" ? "Godan" : "Ichidan"}
            </strong>
        </div>

        <div className="informacao-item">
            <span>JLPT</span>
            <strong>{verbo.jlpt}</strong>
        </div>

    </div>

</div>   

<div className="card-detalhes card-conjugacoes">

    <h2>🔄 Conjugações</h2>

    <div className="tabela-container">

        <table className="tabela-conjugacoes">

            <thead>
                <tr>
                    <th>Forma</th>
                    <th>Conjugação</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td>ます</td>
                    <td>{verbo.conjugacoes.masu.escritaPrincipal}</td>
                </tr>

                <tr>
                    <td>て</td>
                    <td>{verbo.conjugacoes.te.escritaPrincipal}</td>
                </tr>

                <tr>
                    <td>た</td>
                    <td>{verbo.conjugacoes.ta.escritaPrincipal}</td>
                </tr>

                <tr>
                    <td>ない</td>
                    <td>{verbo.conjugacoes.nai.escritaPrincipal}</td>
                </tr>

                <tr>
                    <td>ましょう</td>
                    <td>{verbo.conjugacoes.mashou.escritaPrincipal}</td>
                </tr>

            </tbody>

        </table>

    </div>

</div>

<div className="card-detalhes card-exemplos">

    <h2>💬 Exemplos</h2>

    <div className="lista-exemplos">

        {verbo.exemplos.map((exemplo, index) => (

            <div
                key={index}
                className="exemplo-item"
            >

                <p className="exemplo-japones">
                    {exemplo.jp}
                </p>

                <p className="exemplo-hiragana">
                    {exemplo.hiragana}
                </p>

                <p className="exemplo-portugues">
                    {exemplo.pt}
                </p>

            </div>

        ))}

    </div>

</div>

<div className="card-detalhes card-estatisticas">

    <h2>📊 Estatísticas</h2>

    <div className="estatisticas-grid">

        <div className="estatistica-item">
            <span>Treinado</span>
            <strong>{verbo.estatisticas.treinado}</strong>
        </div>

        <div className="estatistica-item">
            <span>Acertos</span>
            <strong>{verbo.estatisticas.acertos}</strong>
        </div>

        <div className="estatistica-item">
            <span>Erros</span>
            <strong>{verbo.estatisticas.erros}</strong>
        </div>

    </div>

    <div className="ultimo-treino">
        <span>Último treino</span>

        <strong>
            {verbo.estatisticas.ultimaData
                ? new Date(verbo.estatisticas.ultimaData).toLocaleString("pt-BR")
                : "Nunca"}
        </strong>
    </div>

</div>

<div className="area-treinar">

    <button
        onClick={() => navigate(`/treino/verbo/${verbo.id}`)}
        className="btn-treinar"
    >
         Treinar este verbo
    </button>

</div>
</div>

   
);

}