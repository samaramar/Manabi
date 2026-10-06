const fs = require("fs");
const path = require("path");

const verbsFilePath = path.join(
    __dirname,
    "../data/verbs.json"
);

function calcularPrioridade(verbo) {

    const estatisticas = verbo.estatisticas || {};

    const treinado = estatisticas.treinado || 0;
    const acertos = estatisticas.acertos || 0;
    const erros = estatisticas.erros || 0;
    const ultimaData = estatisticas.ultimaData;

    // Nunca treinado
    if (treinado === 0 || !ultimaData) {
        return 1000;
    }

    // Quanto maior a proporção de erros,
    // maior a prioridade
    const totalRespostas = acertos + erros;

    const taxaErro =
        totalRespostas > 0
            ? erros / totalRespostas
            : 0;

    let prioridade = taxaErro * 500;

    // Tempo desde o último treino
    const agora = new Date();
    const ultima = new Date(ultimaData);

    const diferencaMs = agora - ultima;

    const diasSemTreinar =
        diferencaMs / (1000 * 60 * 60 * 24);

    prioridade += Math.min(
        diasSemTreinar * 10,
        300
    );

    return prioridade;
}


class VerbRepository {

    constructor() {

        this.verbs = [];

        this.init();

    }


    init() {

        try {

            if (!fs.existsSync(verbsFilePath)) {

                fs.writeFileSync(
                    verbsFilePath,
                    "[]",
                    "utf8"
                );

            }

            const fileContent =
                fs.readFileSync(
                    verbsFilePath,
                    "utf8"
                );

            const verbsData =
                JSON.parse(fileContent || "[]");

            this.verbs = verbsData;

            console.log(
                `[Banco de Dados] ${this.verbs.length} verbos carregados com sucesso.`
            );

        } catch (error) {

            console.error(
                "Erro ao inicializar o repositório:",
                error.message
            );

            this.verbs = [];

        }

    }


    getAll() {

        return [...this.verbs];

    }


    getByGroup(grupos) {

        return this.verbs
            .filter(v => grupos.includes(v.grupo))
            .map(v => ({ ...v }));

    }


    getTreino(grupos, quantidade) {

        const verbos = this.verbs
            .filter(v => grupos.includes(v.grupo))
            .map(v => ({
                ...v,
                prioridade: calcularPrioridade(v)
            }));


        // Se não houver verbos suficientes
        if (verbos.length <= quantidade) {

            return verbos.map(
                ({ prioridade, ...verbo }) => verbo
            );

        }


        // Ordena pela prioridade
        verbos.sort((a, b) => {

            if (b.prioridade !== a.prioridade) {

                return b.prioridade - a.prioridade;

            }

            return Math.random() - 0.5;

        });


        /*
         * Seleção equilibrada:
         *
         * Parte dos verbos vem das maiores prioridades,
         * enquanto outra parte vem dos demais candidatos.
         *
         * Isso evita que os mesmos verbos dominem
         * todos os treinos.
         */

        const quantidadePrioridade =
            Math.ceil(quantidade * 0.6);

        const quantidadeVariedade =
            quantidade - quantidadePrioridade;


        // Primeiros candidatos por prioridade
        const principais =
            verbos.slice(
                0,
                quantidadePrioridade
            );


        // Restante dos candidatos
        const restantes =
            verbos.slice(
                quantidadePrioridade
            );


        /*
         * Embaralha os restantes para que
         * diferentes verbos tenham oportunidade
         * de aparecer nos próximos treinos.
         */
        restantes.sort(
            () => Math.random() - 0.5
        );


        const selecionados = [
            ...principais,
            ...restantes.slice(
                0,
                quantidadeVariedade
            )
        ];


        /*
         * Embaralha a ordem final para que
         * o treino não comece sempre pelo verbo
         * de maior prioridade.
         */
        selecionados.sort(
            () => Math.random() - 0.5
        );


        // Remove a propriedade auxiliar
        return selecionados.map(
            ({ prioridade, ...verbo }) => verbo
        );

    }


    getCountByGroup() {

        return {

            godan:
                this.verbs.filter(
                    v => v.grupo === "godan"
                ).length,

            ichidan:
                this.verbs.filter(
                    v => v.grupo === "ichidan"
                ).length,

            irregular:
                this.verbs.filter(
                    v => v.grupo === "irregular"
                ).length

        };

    }


    findById(id) {

        return this.verbs.find(
            verbo => verbo.id === Number(id)
        ) ?? null;

    }


    findByEscritaPrincipal(escritaPrincipal) {

        return this.verbs.find(
            verbo =>
                verbo.escritaPrincipal ===
                escritaPrincipal
        ) ?? null;

    }


    findByHiragana(hiragana) {

        return this.verbs.find(
            verbo =>
                verbo.hiragana ===
                hiragana
        ) ?? null;

    }


    findByRomaji(romaji) {

        return this.verbs.find(
            verbo =>
                verbo.romaji ===
                romaji
        ) ?? null;

    }


    save() {

        fs.writeFileSync(
            verbsFilePath,
            JSON.stringify(
                this.verbs,
                null,
                2
            ),
            "utf8"
        );

    }


    updateStatistics(id, acertos, erros) {

        const verbo = this.findById(id);

        if (!verbo) {

            return null;

        }

        verbo.estatisticas.treinado += 1;

        verbo.estatisticas.acertos += acertos;

        verbo.estatisticas.erros += erros;

        verbo.estatisticas.ultimaData =
            new Date().toISOString();

        this.save();

        return verbo;

    }


    resetStatistics() {

        this.verbs.forEach((verbo) => {

            verbo.estatisticas = {

                treinado: 0,

                acertos: 0,

                erros: 0,

                ultimaData: null

            };

        });

        this.save();

    }

}


module.exports = new VerbRepository();