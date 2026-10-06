import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/listaVerbos.css";



const API_URL = "http://localhost:5000/api";

export default function ListaVerbos() 

{
      const navigate = useNavigate();

    const [verbos, setVerbos] = useState([]);
    const [pesquisa, setPesquisa] = useState("");

    const [grupo1Aberto, setGrupo1Aberto] = useState(false);
    const [grupo2Aberto, setGrupo2Aberto] = useState(false);
    const [grupo3Aberto, setGrupo3Aberto] = useState(false);

   

    useEffect(() => {

        carregarVerbos();

    }, []);
    useEffect(() => {

    if (!pesquisa.trim()) {
         setGrupo1Aberto(false);
        setGrupo2Aberto(false);
        setGrupo3Aberto(false);
        return;
    }

    const resultados = encontrarVerbos();

    setGrupo1Aberto(
        resultados.some(v => v.grupo === "godan")
    );

    setGrupo2Aberto(
        resultados.some(v => v.grupo === "ichidan")
    );

    setGrupo3Aberto(
        resultados.some(v => v.grupo === "irregular")
    );

}, [pesquisa, verbos]);

    async function carregarVerbos() {

        try {

            const res = await axios.get(`${API_URL}/verbs`);

            setVerbos(res.data);

        } catch (e) {

            console.error("Erro ao carregar verbos:", e);

        }

    }
    function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}
function calcularSimilaridade(a, b) {

    const textoA = normalizarTexto(a);
    const textoB = normalizarTexto(b);

    if (!textoA || !textoB) {
        return 0;
    }

    if (textoA === textoB) {
        return 1;
    }

    // Calcula a distância entre as duas palavras
    const matriz = Array.from(
        { length: textoA.length + 1 },
        () => Array(textoB.length + 1).fill(0)
    );

    for (let i = 0; i <= textoA.length; i++) {
        matriz[i][0] = i;
    }

    for (let j = 0; j <= textoB.length; j++) {
        matriz[0][j] = j;
    }

    for (let i = 1; i <= textoA.length; i++) {

        for (let j = 1; j <= textoB.length; j++) {

            const custo =
                textoA[i - 1] === textoB[j - 1]
                    ? 0
                    : 1;

            matriz[i][j] = Math.min(
                matriz[i - 1][j] + 1,
                matriz[i][j - 1] + 1,
                matriz[i - 1][j - 1] + custo
            );
        }
    }

    const distancia = matriz[textoA.length][textoB.length];

    const similaridadeTexto =
        1 - (
            distancia /
            Math.max(textoA.length, textoB.length)
        );


    // Verifica quantas letras iguais existem
    // no começo das duas palavras
    let inicioIgual = 0;

    const menorTamanho = Math.min(
        textoA.length,
        textoB.length
    );

    while (
        inicioIgual < menorTamanho &&
        textoA[inicioIgual] === textoB[inicioIgual]
    ) {
        inicioIgual++;
    }

    const similaridadeInicio =
        inicioIgual / menorTamanho;


    // Combina as duas análises
let bonusSequencia = 0;

if (inicioIgual >= 3) {
    bonusSequencia = 0.15;
}
return Math.min(
    1,
    similaridadeTexto * 0.55 +
    similaridadeInicio * 0.45 +
    bonusSequencia
);
}
function encontrarVerbos() {

    const termo = normalizarTexto(pesquisa.trim());

    if (!termo) {
        return verbos;
    }

    // 1. BUSCA EXATA

    const resultadosExatos = verbos.filter((v) => {

        const campos = [
            v.escritaPrincipal,
            v.kanji,
            v.hiragana,
            v.katakana,
            v.romaji,
            v.significado,
            ...(v.significados || [])
        ];

        return campos.some((campo) =>
            campo &&
            normalizarTexto(campo) === termo
        );

    });

    if (resultadosExatos.length > 0) {
        return resultadosExatos;
    }


    // 2. BUSCA PARCIAL

    const resultadosParciais = verbos.filter((v) => {

        const campos = [
            v.escritaPrincipal,
            v.kanji,
            v.hiragana,
            v.katakana,
            v.romaji,
            v.significado,
            ...(v.significados || [])
        ];

        return campos.some((campo) =>
            campo &&
            normalizarTexto(campo).includes(termo)
        );

    });

    if (resultadosParciais.length > 0) {
        return resultadosParciais;
    }


    // 3. BUSCA APROXIMADA

    let melhorResultado = null;
    let melhorSimilaridade = 0;

    verbos.forEach((v) => {

        const campos = [
            v.escritaPrincipal,
            v.kanji,
            v.hiragana,
            v.katakana,
            v.romaji,
            v.significado,
            ...(v.significados || [])
        ];

        campos.forEach((campo) => {

            if (!campo) {
                return;
            }

            const similaridade = calcularSimilaridade(
                termo,
                campo
            );
           

            if (similaridade > melhorSimilaridade) {
                melhorSimilaridade = similaridade;
                melhorResultado = v;
            }

        });

    });

    if (melhorResultado && melhorSimilaridade >= 0.65) {
        return [melhorResultado];
    }

    return [];
}

   function renderizarListaVerbos(grupoFiltro, classeGrupo) {

     return encontrarVerbos()

        .filter(v => v.grupo === grupoFiltro)

        .map((v) => (

            <div
                key={v.id}
                onClick={() => navigate(`/verbos/${v.id}`)}
                className={`verbo-item ${classeGrupo}`}
            >

                <span className="verbo-japones">
                    {v.escritaPrincipal || v.kanji || v.hiragana}
                </span>

                <span className="verbo-significado">
                    {v.significados?.join(", ")}
                </span>

            </div>

        ));

} 


    return (

       <div className="lista-verbos-container">
            <button
    onClick={() => navigate("/")}
    className="btn-voltar"
>
    ←
</button>

            <h2 className="titulo-lista"> Lista de Verbos</h2>
            <div className="pesquisa-container">
    <input
        value={pesquisa}
onChange={(e) => setPesquisa(e.target.value)}
        type="text"
        placeholder="🔎 Pesquisar verbo..."
        className="campo-pesquisa"
    />
</div>

            <div className="grupos-container">

                <div className="grupo-container">

                  <h4
    onClick={() =>
        setGrupo1Aberto(!grupo1Aberto)
    }
    className="grupo-titulo grupo-godan"
>
    <span>🌿 Grupo 1 — Godan</span>
    <span>{grupo1Aberto ? "▲" : "▼"}</span>
</h4>

                    {grupo1Aberto &&
                        renderizarListaVerbos("godan", "lista-godan")}

                </div>

                <div className="grupo-container">

                   <h4
    onClick={() =>
        setGrupo2Aberto(!grupo2Aberto)
    }
    className="grupo-titulo grupo-ichidan"
>
    <span>🌸 Grupo 2 — Ichidan</span>
    <span>{grupo2Aberto ? "▲" : "▼"}</span>
</h4>

                    {grupo2Aberto &&
                        renderizarListaVerbos("ichidan", "lista-ichidan")}

                </div>

                <div className="grupo-container">

                    <h4
    onClick={() =>
        setGrupo3Aberto(!grupo3Aberto)
    }
    className="grupo-titulo grupo-irregular"
>
    <span>🟡 Grupo 3 — Irregulares</span>
    <span>{grupo3Aberto ? "▲" : "▼"}</span>
</h4>

                    {grupo3Aberto &&
                        renderizarListaVerbos("irregular", "lista-irregular")}

                </div>

            </div>

        </div>

    );

}