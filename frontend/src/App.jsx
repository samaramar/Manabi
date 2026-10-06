import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Treino from './pages/Treino';
import Configuracoes from './pages/Configuracoes';
import ListaVerbos from "./pages/ListaVerbos";
import Instrucao from './pages/Instrucoes';
import Progresso from './pages/Progresso';
import DetalhesVerbo from "./pages/DetalhesVerbo";
import TreinoVerbo from "./pages/TreinoVerbo";
import { ConfiguracoesProvider } from "./context/ConfiguracoesContext";

function App() {
  return (
 
    <ConfiguracoesProvider>
      <BrowserRouter>
        <Routes>
          {/* Quando a URL for '/', mostra a Home */}
          <Route path="/" element={<Home />} />
      
          {/* Quando a URL for '/treino', mostra o Treino */}
          <Route path="/treino" element={<Treino />} />
      
          {/* Quando a URL for '/configuracoes', mostra as Configurações */}
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/lista" element={<ListaVerbos/>} />
          <Route path="/verbos/:id" element={<DetalhesVerbo />} />
          <Route path="/instrucao" element={<Instrucao/>} />
          <Route path="/progresso" element={<Progresso/>} />
          <Route path="/treino/verbo/:id" element={<TreinoVerbo />} />
        </Routes>
      </BrowserRouter>
    </ConfiguracoesProvider>
  );
}

export default App;
