const fs = require("fs");
const path = require("path");

const progressoFilePath = path.join(
    __dirname,
    "../data/progresso.json"
);

class ProgressoRepository {

    constructor() {
        this.progresso = {
            diasEstudo: []
        };

        this.init();
    }

    init() {

        try {

            if (!fs.existsSync(progressoFilePath)) {

                fs.writeFileSync(
                    progressoFilePath,
                    JSON.stringify(
                        {
                            diasEstudo: []
                        },
                        null,
                        2
                    ),
                    "utf8"
                );

            }

            const fileContent = fs.readFileSync(
                progressoFilePath,
                "utf8"
            );

            this.progresso = JSON.parse(
                fileContent || '{"diasEstudo":[]}'
            );

        } catch (error) {

            console.error(
                "Erro ao inicializar progresso:",
                error.message
            );

            this.progresso = {
                diasEstudo: []
            };

        }

    }

    get() {
        return {
            ...this.progresso,
            diasEstudo: [
                ...this.progresso.diasEstudo
            ]
        };
    }

    save() {

        fs.writeFileSync(
            progressoFilePath,
            JSON.stringify(
                this.progresso,
                null,
                2
            ),
            "utf8"
        );

    }

    registrarDiaEstudo() {

    const agora = new Date();

const hoje =
    `${agora.getFullYear()}-${String(agora.getMonth() + 1).padStart(2, "0")}-${String(agora.getDate()).padStart(2, "0")}`;
    const jaEstudouHoje =
        this.progresso.diasEstudo.includes(hoje);

    if (!jaEstudouHoje) {

        this.progresso.diasEstudo.push(hoje);

        this.save();

    } 

}

    calcularSequenciaDias() {

    const diasEstudo =
        [...this.progresso.diasEstudo];

    if (diasEstudo.length === 0) {
        return 0;
    }

    // Organiza as datas da mais recente para a mais antiga
    diasEstudo.sort((a, b) =>
        new Date(b) - new Date(a)
    );

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const ontem = new Date(hoje);
    ontem.setDate(hoje.getDate() - 1);

    const dataMaisRecente =
        new Date(diasEstudo[0] + "T00:00:00");

    dataMaisRecente.setHours(0, 0, 0, 0);

    // Se não estudou hoje nem ontem,
    // não possui sequência atual
    if (
        dataMaisRecente.getTime() !== hoje.getTime() &&
        dataMaisRecente.getTime() !== ontem.getTime()
    ) {
        return 0;
    }

    let sequencia = 1;

    let dataAnterior =
        dataMaisRecente;

    for (let i = 1; i < diasEstudo.length; i++) {

        const dataAtual =
            new Date(diasEstudo[i] + "T00:00:00");

        const diferencaDias =
            Math.round(
                (
                    dataAnterior - dataAtual
                ) /
                (1000 * 60 * 60 * 24)
            );

        if (diferencaDias === 1) {

            sequencia++;

            dataAnterior =
                dataAtual;

        } else {

            break;

        }

    }

    return sequencia;

}

    }



module.exports = new ProgressoRepository();