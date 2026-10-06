export function obterRespostasAceitas(
    verbo,
    forma,
    tipoResposta
) {
    const conjugacao = verbo.conjugacoes[forma];

    switch (tipoResposta) {

        case "principal":
            return [
                conjugacao.escritaPrincipal
            ];

        case "hiragana":
            return [
                conjugacao.hiragana
            ];

        case "romaji":
            return [
                conjugacao.romaji
            ];

        case "flexivel":
        default:
            return [
                conjugacao.escritaPrincipal,
                conjugacao.hiragana,
                conjugacao.romaji
            ];
    }
}
export function obterRespostaExibicao(
    verbo,
    forma,
    tipoResposta
) {
    const conjugacao = verbo.conjugacoes[forma];

    switch (tipoResposta) {

        case "hiragana":
            return conjugacao.hiragana;

        case "romaji":
            return conjugacao.romaji;

        case "principal":
        case "flexivel":
        default:
            return conjugacao.escritaPrincipal;
    }
}

export function respostasIguais(respostaUsuario, respostaCorreta) {

    return respostaUsuario
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "") ===
        respostaCorreta
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "");
}