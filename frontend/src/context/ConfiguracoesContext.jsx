import { createContext, useContext, useEffect, useState } from "react";

const ConfiguracoesContext = createContext();

const CONFIG_PADRAO = {
  forma: "masu",

  grupos: {
    godan: true,
    ichidan: true,
    irregular: true,
  },

  tipoResposta: "flexivel",

  exibicao: "principal-hiragana",

  quantidade: 10,
};

export function ConfiguracoesProvider({ children }) {
  const [configuracoes, setConfiguracoes] = useState(() => {
    const salvo = localStorage.getItem("nihonVerb_config");

    return salvo ? JSON.parse(salvo) : CONFIG_PADRAO;
  });

  useEffect(() => {
    localStorage.setItem(
      "nihonVerb_config",
      JSON.stringify(configuracoes)
    );
  }, [configuracoes]);

  function atualizarConfiguracoes(novasConfiguracoes) {
    setConfiguracoes((anterior) => ({
      ...anterior,
      ...novasConfiguracoes,
    }));
  }

  function alterarForma(forma) {
  atualizarConfiguracoes({ forma });
}

function alterarResposta(tipoResposta) {
  atualizarConfiguracoes({ tipoResposta });
}

function alterarExibicao(exibicao) {
  atualizarConfiguracoes({ exibicao });
}

function alterarQuantidade(quantidade) {
  atualizarConfiguracoes({ quantidade });
}

function alterarGrupo(grupo) {
  setConfiguracoes((anterior) => ({
    ...anterior,
    grupos: {
      ...anterior.grupos,
      [grupo]: !anterior.grupos[grupo],
    },
  }));
}

  return (
    <ConfiguracoesContext.Provider
     value={{
  configuracoes,

  atualizarConfiguracoes,

  alterarForma,
  alterarGrupo,
  alterarResposta,
  alterarExibicao,
  alterarQuantidade,
}}
    >
      {children}
    </ConfiguracoesContext.Provider>
  );
}

export function useConfiguracoes() {
  return useContext(ConfiguracoesContext);
}