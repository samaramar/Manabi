const verbRepository = require(
    "../infra/verbRepository"
);
const progressoRepository = require(
    "../infra/progressoRepository"
);

function calcularProgresso() {

    const verbos = verbRepository.getAll();

    let totalAcertos = 0;
    let totalErros = 0;
    let verbosTreinados = 0;

    const grupos = {
        godan: {
            acertos: 0,
            erros: 0,
            verbosTreinados: 0
        },

        ichidan: {
            acertos: 0,
            erros: 0,
            verbosTreinados: 0
        },

        irregular: {
            acertos: 0,
            erros: 0,
            verbosTreinados: 0
        }
    };

    verbos.forEach((verbo) => {

        const estatisticas =
            verbo.estatisticas || {};

        const acertos =
            estatisticas.acertos || 0;

        const erros =
            estatisticas.erros || 0;

        const treinado =
            estatisticas.treinado || 0;

        // Totais gerais
        totalAcertos += acertos;
        totalErros += erros;

        if (treinado > 0) {
            verbosTreinados++;
        }

        // Totais por grupo
        const grupo = verbo.grupo;

        if (grupos[grupo]) {

            grupos[grupo].acertos += acertos;
            grupos[grupo].erros += erros;

            if (treinado > 0) {
                grupos[grupo].verbosTreinados++;
            }
        }

    });

    const totalRespostas =
        totalAcertos + totalErros;

    const aproveitamentoGeral =
        totalRespostas > 0
            ? Math.round(
                (totalAcertos / totalRespostas) * 100
            )
            : 0;

    // Calcula o aproveitamento de cada grupo
    Object.values(grupos).forEach((grupo) => {

        const total =
            grupo.acertos + grupo.erros;

        grupo.aproveitamento =
            total > 0
                ? Math.round(
                    (grupo.acertos / total) * 100
                )
                : 0;

    });
const sequenciaDias = progressoRepository.calcularSequenciaDias();


    return {
    totalAcertos,
    totalErros,
    aproveitamentoGeral,
    verbosTreinados,
    sequenciaDias,
    grupos
    };

}

module.exports = {
    calcularProgresso
};