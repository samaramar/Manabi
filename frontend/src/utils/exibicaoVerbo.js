export function obterExibicao(verbo, modo) {
    if (!verbo) {
        return {
            linha1: "",
            linha2: ""
        };
    }

    switch (modo) {

        case "principal-romaji":
            return {
                linha1: verbo.escritaPrincipal,
                linha2: verbo.romaji
            };

        case "hiragana-romaji":
            return {
                linha1: verbo.hiragana,
                linha2: verbo.romaji
            };

        case "principal-hiragana":
        default:
            return {
                linha1: verbo.escritaPrincipal,
                linha2: verbo.hiragana
            };
    }
}