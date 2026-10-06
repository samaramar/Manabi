import { Link } from 'react-router-dom';

export default function MenuInicial() {
  // Frases motivacionais
  const frases = [
    
    'Um passo de cada vez. Continue aprendendo.',
    'Pequenos estudos de hoje constroem grandes conhecimentos amanhã.',
    'Aprender um pouco todos os dias também é avançar.',
    '今日も一歩ずつ。 Hoje, um passo de cada vez.',
    'A prática de hoje é o conhecimento de amanhã.',
    'Não tenha pressa. Continue avançando.',
    'Cada verbo aprendido é mais um passo na sua jornada.',
    'Grandes conquistas começam com pequenos passos.',
  'Nunca deixe seus sonhos para depois.',
  'Acredite no caminho que você está construindo.',
  'Você é capaz de chegar mais longe do que imagina.',
  'Sonhe grande, comece pequeno e continue caminhando.',
  'Não desista só porque o caminho parece longo.',
  'Cada dia é uma nova oportunidade para recomeçar.',
  'A persistência transforma pequenos passos em grandes conquistas.',
  'O seu futuro é construído pelas escolhas que você faz hoje.',
  'Não compare sua jornada com a de ninguém. Continue no seu ritmo.',
  'Até os passos mais lentos levam você para frente.',
  'O impossível pode parecer distante até você começar.',
  'Seus sonhos merecem a sua persistência.',
  'Acredite em você, mesmo nos dias mais difíceis.',
  'Não precisa ser perfeito. Você só precisa continuar.',
  'Todo conhecimento começa com a decisão de aprender.',
  'Hoje pode ser o dia em que você dá mais um passo.',
  'A jornada pode ser longa, mas cada passo importa.',
  'O esforço que ninguém vê pode criar conquistas que todos verão.',
  'Continue. Você ainda não sabe o quanto é capaz.',
  'Seja paciente com o processo e orgulhoso do seu progresso.',
  'Um dia você vai olhar para trás e perceber o quanto avançou.',
  'Transforme seus sonhos em metas e suas metas em passos.',
  'Você não está parado. Você está construindo seu caminho.',
  'Grandes resultados nascem da constância.',
  'A melhor hora para continuar é agora.',
  'Cada tentativa ensina algo que aproxima você da conquista.',
  'Seu sonho começa a se tornar realidade quando você não desiste.'
  ];

  // Escolhe uma frase de acordo com o dia
  const hoje = new Date();
  const inicioDoAno = new Date(hoje.getFullYear(), 0, 0);
  const diferenca = hoje - inicioDoAno;
  const numeroDoDia = Math.floor(diferenca / 86400000);

  const fraseDoDia = frases[numeroDoDia % frases.length];

  // Links do menu
  const menu = [
    {
      texto: 'Treinar',
      rota: '/treino'
    },
    {
      texto: 'Lista de Verbos',
      rota: '/lista'
    },
    {
      texto: 'Configurações',
      rota: '/configuracoes'
    },
    {
      texto: 'Progresso',
      rota: '/progresso'
    },
    {
      texto: 'Instruções',
      rota: '/instrucao'
    }
  ];

  return (
    <>
      {/* Estilos da própria página */}
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100%;
        }

        body {
          background: #173D2B;
        }

        .home-manabi {
          min-height: 100vh;
          width: 100%;
          box-sizing: border-box;
          background: #173D2B;
          padding: 50px 20px 35px;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
        }

        .home-conteudo {
          width: 100%;
          max-width: 575px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .home-cabecalho {
          text-align: center;
          margin-bottom: 46px;
        }

        .home-titulo {
          margin: 0;
          color: #FFF8EE;
          font-size: 45px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .home-flor {
          color: #F29AA8;
          margin-left: 8px;
        }

        .home-frase {
          margin: 18px auto 0;
          max-width: 380px;
          color: #F2DDE0;
          font-size: 16px;
          line-height: 1.7;
          font-style: italic;
        }

        .home-menu {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .home-botao {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 68px;
          padding: 18px 28px;
          box-sizing: border-box;

          background: #F4D9DC;
          color: #173D2B;

          text-decoration: none;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.5px;

          border: 1px solid #E9A5AF;
          border-radius: 18px;

          overflow: hidden;
          cursor: pointer;

          box-shadow:
            0 6px 16px rgba(0, 0, 0, 0.16);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        
        

        /* Flor escondida inicialmente */
        .home-botao::after {
          content: "🌸";
          position: absolute;
          left: 32px;

          font-size: 21px;
          opacity: 0;

          transform: translateX(-12px) scale(0.7);

          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        /* Ao passar o mouse */
        .home-botao:hover {
          transform: translateY(-4px);
          background: #F7E3E5;

          box-shadow:
            0 0 14px rgba(242, 154, 168, 0.45),
            0 12px 25px rgba(0, 0, 0, 0.18);
        }


        .home-botao:hover::after {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        /* Efeito de clique */
        .home-botao:active {
          transform: translateY(1px) scale(0.98);
          background: #EBAEB7;

          box-shadow:
            0 0 24px rgba(242, 115, 140, 0.65),
            0 4px 10px rgba(0, 0, 0, 0.16);
        }

        .home-rodape {
          text-align: center;
          margin-top: 25px;
          font-size: 13px;
          color: #D8E4DC;
        }
          .subtitulo{
          color: #FFF8EE;
          font-size:25px}
          .linha-manabi {
    border: none;
    height: 1px;
    background: #e9b7c5;
    width: 70%;
    margin: 20px auto;
}

        @media (max-width: 500px) {
          .home-manabi {
            padding: 35px 18px 28px;
          }

          .home-titulo {
            font-size: 36px;
          }

          .home-frase {
            font-size: 15px;
          }

          .home-botao {
            min-height: 72px;
            font-size: 16px;
          }
          

          .home-menu {
            gap: 18px;
          }

          .home-botao::after {
            left: 22px;
          }
        }
      `}</style>

      <div className="home-manabi">
        <div className="home-conteudo">

          {/* CABEÇALHO */}
          <header className="home-cabecalho">
            <h1 className="home-titulo">
              学び<span className="home-flor">🌸</span>
              </h1>
              <h2 className="subtitulo"> Manabi</h2>

              <hr className="linha-manabi"/>

            <p className="home-frase">
              “{fraseDoDia}”
            </p>
          </header>

          {/* MENU */}
          <nav className="home-menu">
            {menu.map((item) => (
              <Link
                key={item.rota}
                to={item.rota}
                className="home-botao"
              >
                {item.texto}
              </Link>
            ))}
          </nav>

          {/* RODAPÉ */}
          <footer className="home-rodape">
            Manabi v1.0.0 • Bons estudos! 🌸
          </footer>

        </div>
      </div>
    </>
  );
}