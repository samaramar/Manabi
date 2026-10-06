import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./css/progresso.css";

export default function Progresso() {
  // 1. Estados agora vazios, pois serão preenchidos pela API
  const [progresso, setProgresso] = useState({
  totalAcertos: 0,
  totalErros: 0,
  aproveitamentoGeral: 0,
  verbosTreinados: 0,
  sequenciaDias: 0,
  grupos: {}
});
  const [carregando, setCarregando] = useState(true);

  // 2. useEffect para buscar dados reais do Back-end
  useEffect(() => {
    const carregarProgresso = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/progresso');
        setProgresso(res.data);
      } catch (e) {
        console.error("Erro ao carregar progresso:", e);
      } finally {
        setCarregando(false);
      }
    };
    
    carregarProgresso();
  }, []);

 
  const nomesDosGrupos = {
  godan: "Godan",
  ichidan: "Ichidan",
  irregular: "Irregulares"
};
 

  // Estado de carregamento
  if (carregando) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Carregando dados... ⏳</div>;
  }

  const resetarProgresso = async () => {

  const confirmar = window.confirm(
    "Tem certeza que deseja resetar o progresso? Seus acertos, erros e estatísticas dos verbos serão apagados."
  );

  if (!confirmar) {
    return;
  }

  try {

    await axios.post(
      "http://localhost:5000/api/progresso/resetar"
    );

    alert("Progresso resetado com sucesso!");

    const res = await axios.get(
      "http://localhost:5000/api/progresso"
    );

    setProgresso(res.data);

  } catch (error) {

    console.error(
      "Erro ao resetar progresso:",
      error
    );

    alert("Não foi possível resetar o progresso.");

  }

};

  return (
    <div className="progresso-container">
      <button
    type="button"
    onClick={() => window.history.back()}
    className="btn-voltar-progresso"
>
    ←
</button>
     <h2 className="titulo-progresso">
     Meu Progresso
</h2>


      {/* SEÇÃO 1: RESUMO GERAL */}
<h3 className="titulo-secao-progresso">
     Resumo Geral
</h3>

<div
    className={`sequencia-progresso ${
        progresso.sequenciaDias === 0
            ? "sequencia-perdida"
            : ""
    }`}
>
  <p >
    🔥 Sequência
  </p>

  <strong
    style={{
      fontSize: "28px"
    }}
  >
    {progresso.sequenciaDias}{" "}
    {progresso.sequenciaDias === 1 ? "dia" : "dias"}
  </strong>
</div>

 <div className="estatisticas-progresso">
  <div className="card-estatistica">
    <p>✅ Acertos</p>

    <strong
      
    >
      {progresso.totalAcertos}
    </strong>
  </div>

 <div className="card-estatistica">
    <p>❌ Erros</p>

    <strong
      
    >
      {progresso.totalErros}
    </strong>
  </div>

  <div className="card-estatistica">
    <p>🎯 Aproveitamento</p>

    <strong
     
    >
      {progresso.aproveitamentoGeral}%
    </strong>
  </div>

  <div className="card-estatistica">
    <p>📚 Verbos treinados</p>

    <strong
     
    >
      {progresso.verbosTreinados}
    </strong>
  </div>
</div>




{/* SEÇÃO 2: DESEMPENHO POR GRUPO */}

<h3 className="titulo-secao-progresso">
     Desempenho por Grupo
</h3>

<div className="lista-grupos-progresso">
  {Object.entries(progresso.grupos).map(
    ([chave, grupo]) => (

      <div
    key={chave}
    className="card-grupo-progresso"
>
        <div className="cabecalho-grupo-progresso">
         <span className="nome-grupo-progresso">
    {nomesDosGrupos[chave]}
</span>

          <span className="porcentagem-grupo-progresso">
    {grupo.aproveitamento}%
</span>
        </div>

        {/* Barra de aproveitamento */}

        <div className="barra-progresso">
         <div
    className="barra-progresso-preenchida"
    style={{
        width: `${grupo.aproveitamento}%`
    }}
/>
        </div>

        <div className="detalhes-grupo-progresso">
          <span>
            ✅ {grupo.acertos} acertos
          </span>

          <span>
            ❌ {grupo.erros} erros
          </span>

          <span>
            📖 {grupo.verbosTreinados} verbos
          </span>
        </div>

      </div>

    )
  )}
</div>

<div className="resetar-progresso">
 <button
    onClick={resetarProgresso}
    className="btn-resetar-progresso"
>
    🗑️ Resetar progresso
  </button>

  <p
  className="aviso-resetar-progresso">
    A sequência de dias não será apagada.
  </p>
</div>

      </div>


     );
    }
     
