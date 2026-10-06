const express = require("express");
const router = express.Router();
const verbRepository = require("../infra/verbRepository");
const progressService = require(
    "../services/progressService"
);
const progressoRepository = require(
    "../infra/progressoRepository"
);


router.get("/verbs", (req, res) => {

    try {

        return res.json(
            verbRepository.getAll()
        );

    } catch (err) {

        return res.status(500).json({
            erro: err.message
        });

    }

});

router.get("/verbs/count", (req, res) => {

    const totais = verbRepository.getCountByGroup();

    res.json(totais);

});

router.get("/verbs/:id", (req, res) => {

    try {

        const verbo = verbRepository.findById(req.params.id);

        if (!verbo) {

            return res.status(404).json({
                erro: "Verbo não encontrado."
            });

        }

        return res.json(verbo);

    } catch (err) {

        return res.status(500).json({
            erro: err.message
        });

    }
  
});



router.patch("/verbs/:id/estatisticas", (req, res) => {

    try {

        const { acertos, erros } = req.body;

        const verbo = verbRepository.updateStatistics(
            req.params.id,
            acertos,
            erros
        );

        if (!verbo) {

            return res.status(404).json({
                erro: "Verbo não encontrado."
            });

        }
        progressoRepository.registrarDiaEstudo();

        return res.json({
            mensagem: "Estatísticas atualizadas com sucesso.",
            verbo
        });

    } catch (err) {

        return res.status(500).json({
            erro: err.message
        });

    }

});

router.post("/progresso/resetar", (req, res) => {

    try {

        verbRepository.resetStatistics();

        res.json({
            mensagem: "Progresso resetado com sucesso."
        });

    } catch (error) {

        console.error(
            "Erro ao resetar progresso:",
            error.message
        );

        res.status(500).json({
            erro: "Não foi possível resetar o progresso."
        });

    }

});



router.get("/treino", (req, res) => {

    try {

        const grupos = req.query.grupos
            ? req.query.grupos.split(",")
            : ["godan", "ichidan", "irregular"];

        const quantidade = Number(req.query.quantidade) || 5;

        const verbos = verbRepository.getTreino(
            grupos,
            quantidade
        );

        return res.json(verbos);

    } catch (err) {

        return res.status(500).json({
            erro: err.message
        });

    }

});

router.get("/progresso", (req, res) => {

    try {

        const progresso =
            progressService.calcularProgresso();

        return res.json(progresso);

    } catch (err) {

        return res.status(500).json({
            erro: err.message
        });

    }

});

module.exports = router;