import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConfiguracoes } from "../context/ConfiguracoesContext";
import "./css/configuracao.css";

export default function Configuracoes() {
  const navigate = useNavigate();
  const {
    configuracoes,

    alterarForma,
    alterarGrupo,
    alterarResposta,
    alterarExibicao,
    alterarQuantidade,
} = useConfiguracoes();
  const forma = configuracoes.forma;
  const grupos = configuracoes.grupos;
  const tipoResposta = configuracoes.tipoResposta;
  const exibicao = configuracoes.exibicao;
  const quantidade = configuracoes.quantidade;
  
  // Estado do total vindo do Backend (ex: { godan: 10, ichidan: 5, irregular: 5 })
  const [totais, setTotais] = useState({ godan: 0, ichidan: 0, irregular: 0 });
  const [limiteMax, setLimiteMax] = useState(0);

  // 1. Busca contagem do backend ao montar a tela
  useEffect(() => {
    fetch('http://localhost:5000/api/verbs/count')
      .then(res => res.json())
      .then(data => {

    console.log(data);

    setTotais(data);

})
      .catch(err => console.error("Erro ao buscar contagens:", err));
  }, []);

  // 2. Calcula o limite máximo sempre que os grupos mudam
  useEffect(() => {
    const totalCalculado = 
      (grupos.godan ? totais.godan : 0) + 
      (grupos.ichidan ? totais.ichidan : 0) + 
      (grupos.irregular ? totais.irregular : 0);
    
    setLimiteMax(totalCalculado);
    
    // Ajusta a quantidade atual se ultrapassar o novo máximo permitido
    if (quantidade > totalCalculado && totalCalculado > 0) {
      alterarQuantidade(totalCalculado);
    }
  }, [grupos, totais, quantidade]);

  const handleSalvar = (e) => {
    e.preventDefault();
 
    //  Feedback visual (opcional, mas ajuda a saber que funcionou)
    alert("Configurações salvas com sucesso!");
    
    // Navegar
    navigate('/');
  };

  function alterarGrupoSeguro(grupo) {

    const gruposAtivos = Object.values(grupos)

        .filter(Boolean)

        .length;

    if (

        gruposAtivos === 1 &&

        grupos[grupo]

    ) {

        return;

    }

    alterarGrupo(grupo);

}

  return (
    <div className="configuracao-container">
      <button
    type="button"
    onClick={() => navigate("/")}
    className="btn-voltar-configuracao"
>
    ←
</button>
      <h2 className="titulo-configuracao">
     Configurações
</h2>
      
      <form onSubmit={handleSalvar}>
       
          
          {/* 1. Forma Gramatical */}
          <div className="config-secao">
    <h4 className="config-titulo-secao">
         Forma Gramatical
    </h4>

    <div className="opcoes-forma">
        {['masu', 'te', 'nai', 'ta', 'mashou'].map(f => (
            <label
                key={f}
                className={`opcao-forma ${
                    forma === f ? "opcao-forma-ativa" : ""
                }`}
            >
                <input
                    type="radio"
                    checked={forma === f}
                    onChange={() => alterarForma(f)}
                />

                <span>{f.toUpperCase()}</span>
            </label>
        ))}
    </div>
</div>

          {/* 2. Grupos de Verbos */}
          <div className="config-secao">
    <h4 className="config-titulo-secao">
        Grupos de Verbos
    </h4>

    <div className="opcoes-grupo">
        {Object.keys(grupos).map(g => (
            <label
                key={g}
                className={`opcao-grupo ${
                    grupos[g] ? "opcao-grupo-ativa" : ""
                }`}
            >
                <input
                    type="checkbox"
                    checked={grupos[g]}
                    onChange={() => alterarGrupoSeguro(g)}
                />

                <span>
                    {g.toUpperCase()}
                </span>

                <small>
                    {totais[g]} disponíveis
                </small>
            </label>
        ))}
    </div>
</div>

          {/* 3. Tipo de Resposta */}
          <div className="config-secao">
    <h4 className="config-titulo-secao">
        Tipo de Resposta
    </h4>

    <div className="opcoes-resposta">
        {[
            { valor: "flexivel", texto: "Flexível" },
            { valor: "principal", texto: "Escrita principal" },
            { valor: "hiragana", texto: "Apenas hiragana" },
            { valor: "romaji", texto: "Apenas romaji" },
        ].map(({ valor, texto }) => (
            <label
                key={valor}
                className={`opcao-resposta ${
                    tipoResposta === valor
                        ? "opcao-resposta-ativa"
                        : ""
                }`}
            >
                <input
                    type="radio"
                    checked={tipoResposta === valor}
                    onChange={() => alterarResposta(valor)}
                />

                <span>{texto}</span>
            </label>
        ))}
    </div>
</div>

          {/* 4. Modo de Exibição */}
          <div className="config-secao">
    <h4 className="config-titulo-secao">
        Como mostrar os verbos
    </h4>

       <div className="select-exibicao-container">
    <select
        className="select-exibicao"
        value={exibicao}
        onChange={(e) => alterarExibicao(e.target.value)}
    >
        <option value="principal-hiragana">
            Forma principal + Hiragana
        </option>

        <option value="hiragana-romaji">
            Hiragana + Romaji
        </option>

        <option value="principal-romaji">
            Forma principal + Romaji
        </option>
    </select>

    <span className="seta-exibicao"></span>
</div>
</div>
   <div className="config-secao">

    <h4 className="config-titulo-secao">
        Quantidade de verbos por treino
    </h4>

    <div className="opcoes-quantidade">

        {[5, 10, 15, 20, 25, 30].map((valor) => (

            <label
                key={valor}
                className={`opcao-quantidade ${
                    quantidade === valor
                        ? "opcao-quantidade-ativa"
                        : ""
                } ${
                    valor > limiteMax
                        ? "opcao-quantidade-desativada"
                        : ""
                }`}
            >

                <input
                    type="radio"
                    checked={quantidade === valor}
                    disabled={valor > limiteMax}
                    onChange={() => alterarQuantidade(valor)}
                />

                <span>{valor}</span>

                <small>verbos</small>

            </label>

        ))}

    </div>

    <p className="quantidade-disponivel">
        Disponíveis atualmente: {limiteMax} verbos
    </p>

</div> 
     

        

        
      </form>
    </div>
  );
}