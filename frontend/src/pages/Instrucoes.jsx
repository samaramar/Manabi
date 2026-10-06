import { useState } from 'react';

export default function Instrucoes() {

  const [secoesAbertas, setSecoesAbertas] = useState({
  introducao: false,
  grupos: false,
  masu: false,
  te: false,
  nai: false,
  ta: false,
  mashou: false
   });
 const alternarSecao = (secao) => {
  setSecoesAbertas((anterior) => ({
    ...anterior,
    [secao]: !anterior[secao]
  }));
};
  const secaoEstilo = {
  marginBottom: '22px',
  background: '#e3efe7',
  padding: '20px',
  borderRadius: '16px',
  border: '1px solid #b9d3c0',
  boxShadow: '0 5px 12px rgba(0, 0, 0, 0.12)'
};

  const tabelaEstilo = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
    fontSize: '14px'
  };

  const celdaEstilo = {
   border: '1px solid #e8cfd6',
  padding: '10px',
  textAlign: 'left',
  color: '#3d4f42'
  };
  const tituloSecaoEstilo = {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '40px 1fr 40px',
  alignItems: 'center',
  background: 'none',
  border: 'none',
  padding: '0',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#244536',
  textAlign: 'center'
};
const florEstilo = {
  fontSize: '20px',
  opacity: 0,
  transition: 'opacity 0.2s ease'
};


  return (
   <>
   <style>{`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
  }

  .instrucao-secao:hover .flor-hover {
    opacity: 1;
  }

  .flor-hover {
    opacity: 0;
    transition: opacity 0.2s ease;
    font-size: 19px;
  }
`}</style>


     <div
    style={{
      minHeight: "100vh",
      background: "#173d2b",
      padding: "20px"
    }}
  >
   <button
    onClick={() => window.history.back()}
    className="btn-voltar"
>
    ←
</button>
     
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: "1.6",
        color: "#3d4f42"
      }}
    >

      {/* CABEÇALHO */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "35px",
          padding: "20px 0",
          borderBottom: "2px solid #e9a8b8"
        }}
      >
        
          
        <div
          style={{
            fontSize: "42px",
            marginBottom: "8px"
          }}
        >
          📖
        </div>

        <h2
          style={{
            margin: "0",
            fontSize: "22px",
            color: "#ffffff"
          }}
        >
          Instruções
        </h2>

      </div>

{/* INTRODUÇÃO */}
<section
  className="instrucao-secao"
  style={secaoEstilo}
>
   <button
    onClick={() => alternarSecao("introducao")}
    style={tituloSecaoEstilo}
  >
   <span className="flor-hover">🌸</span>
  <span> Conjugação dos Verbos Japoneses</span>
   <span>
      {secoesAbertas.introducao ? "▲" : "▼"}
    </span>
  </button>
   {secoesAbertas.introducao && (
    <div style={{ marginTop: "15px" }}>
  <p>
    Os verbos japoneses podem mudar de forma de acordo com a
    conjugação utilizada. Essas mudanças permitem expressar
    diferentes ideias e usos dentro de uma frase.
  </p>

  <p>
    Para aprender a conjugar corretamente, é importante primeiro
    entender a qual grupo o verbo pertence. Neste guia, você verá
    como os verbos dos grupos <strong>Godan</strong>,
    <strong> Ichidan</strong> e <strong>Irregulares</strong> são
    conjugados nas diferentes formas disponíveis no Manabi.
  </p>
   <div
  style={{
    marginTop: "20px",
    padding: "15px 18px",
    background: "#F3E6C8",
    borderRadius: "12px",
    border: "1px solid #C9A65B",
    color: "#705728"
  }}
>
  <p
    style={{
      margin: 0,
      fontSize: "14px",
      lineHeight: "1.6"
    }}
  >
    ⚠️ <strong>Atenção:</strong> Os significados e usos das
    conjugações podem variar de acordo com o contexto da frase.
    Aqui serão apresentados exemplos e usos gerais para ajudar você
    a compreender como cada forma funciona.
  </p>
</div>
  
  </div>
   )}
</section>

{/* TIPOS DE VERBOS JAPONESES */}
<section
  className="instrucao-secao"
   style={secaoEstilo}
>
    <button
    onClick={() => alternarSecao("grupos")}
    style={tituloSecaoEstilo}
  >
   <span className="flor-hover">🌸</span>
  <span>Tipos de Verbos Japoneses</span>

    <span>
      {secoesAbertas.grupos ? "▲" : "▼"}
    </span>
    </button>
    {secoesAbertas.grupos && (
      <div style={{ marginTop: "15px" }}>
  <p>
    Antes de aprender as conjugações, é importante entender que os verbos
    japoneses são divididos em diferentes grupos.
  </p>

  <p>
    O grupo ao qual um verbo pertence influencia a forma como ele será
    conjugado. No japonês, os verbos são divididos em três grupos principais:
    <strong> Godan</strong>, <strong>Ichidan</strong> e
    <strong> Irregulares</strong>.
  </p>

  <div
    style={{
      marginTop: '20px',
      padding: '18px',
      background: '#eef6ef',
      border: '1px solid #B9D3C0'
      
    }}
  >
    <h4 style={{ color: '#244536', marginTop: 0 }}>
  🌿 Grupo 1 — Godan（五段動詞）
</h4>

    <p>
      Os verbos Godan são frequentemente chamados de <strong>verbos do Grupo 1</strong>.
      Eles podem terminar em diferentes sons da linha <strong>U</strong> do hiragana.
    </p>

    <p>
      Dependendo da conjugação, a última sílaba do verbo pode mudar para
      diferentes linhas do hiragana.
    </p>

    <table style={tabelaEstilo}>
      <thead>
        <tr style={{ background: '#dcebdd' }}>
          <th style={celdaEstilo}>Forma principal</th>
          <th style={celdaEstilo}>Pronúncia</th>
          <th style={celdaEstilo}>Significado</th>
        </tr>
      </thead>

      <tbody>
       <tr>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>書く</strong></td>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>かく</strong> kaku</td>
  <td style={celdaEstilo}>escrever</td>
</tr>

<tr>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>飲む</strong></td>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>のむ</strong> nomu</td>
  <td style={celdaEstilo}>beber</td>
</tr>

<tr>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>話す</strong></td>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>はなす</strong> hanasu</td>
  <td style={celdaEstilo}>falar</td>
</tr>

<tr>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>帰る</strong></td>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>かえる</strong> kaeru</td>
  <td style={celdaEstilo}>voltar</td>
</tr>
      </tbody>
    </table>

    <p
      style={{
        marginTop: '15px',
        marginBottom: 0,
        fontSize: '14px',
        color: '#555'
      }}
    >
      📌 <strong>Importante:</strong> nem todo verbo terminado em
      <strong> る (ru)</strong> pertence ao Grupo 2. Alguns verbos terminados
      em る também pertencem ao Grupo 1, como <strong>帰る (kaeru — voltar)</strong>.
    </p>
  </div>

  {/* ICHIDAN */}
  <div
    style={{
      marginTop: '20px',
      padding: '18px',
      background: '#fdf2f4',
      border: '1px solid #E9A5AF'
    
    }}
  >
    <h4 style={{ color: '#7A3F4A', marginTop: 0 }}>
  🌸 Grupo 2 — Ichidan（一段動詞）
</h4>

    <p>
      Os verbos Ichidan são conhecidos como <strong>verbos do Grupo 2</strong>.
      Em geral, terminam em <strong>る (ru)</strong> e costumam ser mais simples
      de conjugar.
    </p>

    <p>
      Em muitas conjugações, basta remover o <strong>る (ru)</strong> final
      e adicionar a nova terminação.
    </p>

    <table style={tabelaEstilo}>
      <thead>
        <tr style={{ background: '#f9e1e8' }}>
          <th style={celdaEstilo}>Forma principal</th>
          <th style={celdaEstilo}>Pronúncia</th>
          <th style={celdaEstilo}>Significado</th>  
        </tr>
      </thead>

      <tbody>
        <tr>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>食べる</strong></td>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>たべる</strong> taberu</td>
  <td style={celdaEstilo}>comer</td>
</tr>

<tr>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>見る</strong></td>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>みる </strong>miru</td>
  <td style={celdaEstilo}>ver</td>
</tr>

<tr>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>起きる</strong></td>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>おきる</strong> okiru</td>
  <td style={celdaEstilo}>acordar</td>
</tr>

<tr>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>寝る</strong></td>
  <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>ねる</strong> neru</td>
  <td style={celdaEstilo}>dormir</td>
</tr>
      </tbody>
    </table>

    <p
      style={{
        marginTop: '15px',
        marginBottom: 0,
        fontSize: '14px',
        color: '#555'
      }}
    >
      💡 <strong>Dica:</strong> muitos verbos Ichidan terminam em
      <strong> いる (iru)</strong> ou <strong>える (eru)</strong>, mas existem
      algumas exceções. Por isso, nem todo verbo com essas terminações
      pertence automaticamente ao Grupo 2.
    </p>
  </div>

  {/* IRREGULARES */}
  <div
    style={{
      marginTop: '20px',
      padding: '18px',
      background: '#f6f2e8',
      border: '1px solid #C9A65B'
      
    }}
  >
    <h4 style={{ color: '#705728', marginTop: 0 }}>
  🟡 Grupo 3 — Verbos Irregulares
</h4>

    <p>
      Os verbos irregulares não seguem completamente as mesmas regras dos
      grupos Godan e Ichidan. Os dois principais verbos irregulares são:
    </p>

    <table style={tabelaEstilo}>
      <thead>
         <tr style={{ background: '#F3E6C8' }}>
         <th style={celdaEstilo}>Forma principal</th>
         <th style={celdaEstilo}>Pronúncia</th>
         <th style={celdaEstilo}>Significado</th>
  </tr>
      </thead>

<tbody>
  <tr>
    <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>する</strong></td>
    <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>する</strong> suru</td>
    <td style={celdaEstilo}>fazer</td>
  </tr>

  <tr>
    <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>来る</strong></td>
    <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>くる</strong> kuru</td>
    <td style={celdaEstilo}>vir</td>
  </tr>
</tbody>
    </table>

    <p
      style={{
        marginTop: '15px',
        marginBottom: 0,
        fontSize: '14px',
        color: '#555'
      }}
    >
     🔎<strong>Observação:</strong> Esses verbos possuem conjugações próprias, que veremos nas próximas
      seções.
    </p>
  </div>

  <div
  style={{
    marginTop: '25px',
    padding: '18px',
    background: '#f9fcfa',
    border: '1px solid #B9D3C0',
    borderRadius: '10px'
  }}
>
  <p
    style={{
      margin: 0,
      lineHeight: '1.6',
      color: '#244536'
    }}
  >
    📝 <strong>Resumo:</strong> antes de conjugar um verbo, primeiro
    precisamos identificar a qual grupo ele pertence. Depois, aplicamos
    as regras específicas daquela conjugação.
  </p>
</div>
  </div>
    )}
</section>


{/* FORMA MASU */}
<section
  className="instrucao-secao"
  style={secaoEstilo}
>
  <button
    onClick={() => alternarSecao("masu")}
    style={tituloSecaoEstilo}
  >
  <span className="flor-hover">🌸</span>
  <span> Forma MASU  — ます </span>
  <span>
      {secoesAbertas.masu ? "▲" : "▼"}
    </span>
  </button>
{secoesAbertas.masu && (
  <div style={{ marginTop: "15px" }}>

  <p>
    A forma <strong>MASU（ます）</strong> é uma forma polida dos verbos
    japoneses. Ela é muito utilizada em situações formais ou educadas.
  </p>

  <p>
    Além disso, a forma MASU pode ser usada para falar sobre ações no
    presente ou no futuro, dependendo do contexto da frase.
  </p>

  {/* GODAN */}
  <div
    style={{
      marginTop: '20px',
      padding: '18px',
      background: '#eef6ef',
      border: '1px solid #B9D3C0',
    }}
  >
    <h4 style={{ color: '#244536', marginTop: 0 }}>
  🌿 Grupo 1 — Godan
    </h4>

    <p>
      Para conjugar verbos Godan na forma MASU, mudamos a última sílaba
      do verbo da linha <strong>U</strong> para a linha
      <strong> I</strong> e adicionamos <strong>ます (masu)</strong>.
    </p>

    <p>
      Veja algumas mudanças comuns:
    </p>

    <table style={tabelaEstilo}>
     <thead>
        <tr style={{ background: '#dcebdd' }}>
          <th style={celdaEstilo}>Forma U</th>
          <th style={celdaEstilo}>Forma I</th>
          <th style={celdaEstilo}>Pronúncia</th>
        </tr>
      </thead>

      <tbody>
  <tr>
  <td style={celdaEstilo}><strong style={{ fontSize: '18px' }}>う</strong>
  </td>
  <td style={celdaEstilo}><strong style={{ fontSize: '18px' }}>い</strong>
  </td>
  <td style={celdaEstilo}>u → i
  </td>
  </tr>

<tr>
  <td style={celdaEstilo}>
    <strong style={{ fontSize: '18px' }}>く</strong>
  </td>
  <td style={celdaEstilo}>
    <strong style={{ fontSize: '18px' }}>き</strong>
  </td>
  <td style={celdaEstilo}>
    ku → ki    
  </td>
</tr>

        <tr>
          <td style={celdaEstilo}><strong style={{ fontSize: '18px'}}>ぐ</strong></td>
          <td style={celdaEstilo}><strong style={{ fontSize: '18px'}}>ぎ</strong></td>
          <td style={celdaEstilo}> gu → gi</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>す</strong></td>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>し</strong></td>
          <td style={celdaEstilo}>su → shi</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>つ</strong></td>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>ち</strong></td>
          <td style={celdaEstilo}>tsu → chi</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>ぬ</strong></td>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>に</strong></td>
          <td style={celdaEstilo}>nu → ni</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>ぶ</strong></td>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>び</strong></td>
          <td style={celdaEstilo}>bu → bi</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>む</strong></td>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>み</strong></td>
          <td style={celdaEstilo}>mu → mi</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>る</strong></td>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>り</strong></td>
          <td style={celdaEstilo}>ru → ri</td>
        </tr>
      </tbody>
    </table>

    <h4
      style={{
        marginTop: '25px',
        color: '#5f8067'
      }}
    >
      Exemplos
    </h4>

    <table style={tabelaEstilo}>
      <thead>
        <tr style={{ background: '#dcebdd' }}>
          <th style={celdaEstilo}>Forma de dicionário</th>
          <th style={celdaEstilo}>Mudança</th>
          <th style={celdaEstilo}>Forma MASU</th>
        </tr>
      </thead>

      <tbody>
        <tr>
         <td style={celdaEstilo}>
           <strong style={{ fontSize: '18px' }}>
             書く
           </strong>
           <br />
           kaku — escrever
          </td>

          <td style={celdaEstilo}>
          <strong>く → き</strong>
          <br />
        ku → ki
          </td>

          <td style={celdaEstilo}>
           <strong style={{ fontSize: '18px' }}>
             書きます
          </strong>
          <br />
          kakimasu
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
             <strong style={{ fontSize: '18px' }}>
            飲む</strong>
            <br />
            nomu — beber
          </td>

          <td style={celdaEstilo}>
            <strong>む → み</strong><br />
            mu → mi
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>
            飲みます</strong><br />
            nomimasu
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
             <strong style={{ fontSize: '18px' }}>
            話す</strong><br/>
            hanasu — falar
          </td>

          <td style={celdaEstilo}>
            <strong>す → し</strong><br />
            su → shi
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>
            話します</strong><br/>
            hanashimasu
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
             <strong style={{ fontSize: '18px' }}>
            帰る</strong><br />
            kaeru — voltar
          </td>

          <td style={celdaEstilo}>
            <strong>る → り</strong><br />
          ru → ri
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>
            帰ります</strong><br />
            kaerimasu
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* ICHIDAN */}
  <div
    style={{
      marginTop: '20px',
      padding: '18px',
      background: '#fdf2f4',
      border: '1px solid #E9A5AF',
    
     
    }}
  >
    <h4 style={{ color: '#7A3F4A', marginTop: 0 }}>
  🌸 Grupo 2 — Ichidan
</h4>

    <p>
      Nos verbos Ichidan, a conjugação é mais simples.
      Removemos o <strong>る (ru)</strong> final e adicionamos
      <strong> ます (masu)</strong>.
    </p>

    <table style={tabelaEstilo}>
      <thead>
        <tr style={{ background: '#f9e1e8' }}>
          <th style={celdaEstilo}>Forma de dicionário</th>
          <th style={celdaEstilo}>Mudança</th>
          <th style={celdaEstilo}>Forma MASU</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={celdaEstilo}>
           <strong style={{ fontSize: '18px' }}>
            食べる</strong><br />
            taberu — comer
          </td>

          <td style={celdaEstilo}>
            <strong>る → removido</strong><br />
            ru 
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>
            食べます</strong><br/>
            tabemasu
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
  <strong style={{ fontSize: '18px' }}>
    見る
  </strong>
  <br />
  miru — ver
</td>

<td style={celdaEstilo}>
  <strong>る → removido </strong>
  <br />
  ru 
</td>

<td style={celdaEstilo}>
  <strong style={{ fontSize: '18px' }}>
    見ます
  </strong>
  <br />
 mimasu
</td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
  <strong style={{ fontSize: '18px' }}>
    起きる
  </strong>
  <br />
  okiru — acordar
</td>

<td style={celdaEstilo}>
  <strong>る → removido</strong>
  <br />
  ru
</td>

<td style={celdaEstilo}>
  <strong style={{ fontSize: '18px' }}>
    起きます
  </strong>
  <br />
  okimasu
</td>             
        </tr>
        <tr>
  <td style={celdaEstilo}>
    <strong style={{ fontSize: '18px' }}>
      寝る
    </strong>
    <br />
    neru — dormir
  </td>

  <td style={celdaEstilo}>
    <strong>る → removido</strong>
    <br />
    ru 
  </td>

  <td style={celdaEstilo}>
    <strong style={{ fontSize: '18px' }}>
      寝ます
    </strong>
    <br />
    nemasu
  </td>
</tr>
      </tbody>
    </table>
  </div>

  {/* IRREGULARES */}
  <div
    style={{
      marginTop: '20px',
      padding: '18px',
      background: '#f6f2e8',
      border: '1px solid #C9A65B',

    }}
  >
    <h4 style={{ color: '#705728', marginTop: 0 }}>
  🟡 Grupo 3 — Irregulares
    </h4>

    <p>
      Os verbos irregulares possuem suas próprias formas de conjugação.
      Na forma MASU:
    </p>

    <table style={tabelaEstilo}>
      <thead>
        <tr style={{ background: '#F3E6C8' }}>
          <th style={celdaEstilo}>Forma de dicionário</th>
          <th style={celdaEstilo}>Mudança</th>
          <th style={celdaEstilo}>Forma MASU</th>
        </tr>
      </thead>

    <tbody>
  <tr>
    <td style={celdaEstilo}>
      <strong style={{ fontSize: '18px' }}>
        する
      </strong>
      <br />
      suru — fazer
    </td>

    <td style={celdaEstilo}>
      <strong>する → し</strong>
      <br />
      suru → shi
    </td>

    <td style={celdaEstilo}>
      <strong style={{ fontSize: '18px' }}>
        します
      </strong>
      <br />
    shimasu
    </td>
  </tr>

  <tr>
    <td style={celdaEstilo}>
      <strong style={{ fontSize: '18px' }}>
        来る
      </strong>
      <br />
      kuru — vir
    </td>

    <td style={celdaEstilo}>
      <strong>来る → 来</strong>
      <br />
      kuru → ki
    </td>

    <td style={celdaEstilo}>
      <strong style={{ fontSize: '18px' }}>
        来ます
      </strong>
      <br />
    kimasu
    </td>
  </tr>
</tbody>
    </table>
  </div>

  {/* FRASES DE EXEMPLO */}
  <div
  style={{
    marginTop: '20px',
    padding: '18px',
    background: '#EEF6FB',
    border: '1px solid #B8D9E8',
    borderRadius: '10px'
  }}
>
  <h4 style={{ color: '#356A7D', marginTop: 0 }}>
  💬 Exemplos de frases
</h4>

    <div style={{ marginBottom: '15px' }}>
      <strong  style={{ fontSize: "18px" }}>私は毎日日本語を勉強します。</strong>
      <br />
      <span style={{ color: '#666' }}>
        Watashi wa mainichi nihongo o benkyō shimasu.
      </span>
      <br />
      <span style={{  color: ' #666' }}>
         Eu estudo japonês todos os dias.
      </span>
    </div>

    <div style={{ marginBottom: '15px' }}>
      <strong  style={{ fontSize: "18px" }}>毎朝コーヒーを飲みます。</strong>
       <br />
      <span style={{ color:'#666' }}>
        Maiasa kōhī o nomimasu.
      </span>
       <br />
      <span style={{ color:'#666'
      }}>
       Eu bebo café todas as manhãs.
      </span>
    </div>

    <div>
      <strong  style={{ fontSize: "18px" }} >明日、学校へ行きます。</strong>
      <br />
      <span style={{ color:'#666' }}>
        Ashita, gakkō e ikimasu.
      </span>
       <br />
      <span style={{ color:'#666' }}>
       Amanhã, vou para a escola.
      </span>
    </div>
  </div>

  {/* RESUMO */}
<div
  style={{
    marginTop: '25px',
    padding: '18px',
    background: '#f9fcfa',
    border: '1px solid #B9D3C0',
    borderRadius: '10px'
  }}
>
  <p
    style={{
      margin: 0,
      lineHeight: '1.6',
      color: '#244536'
    }}
  >
    📝 <strong>Resumo da Forma MASU:</strong>
  </p>

  <p
    style={{
      marginBottom: 0,
      lineHeight: '1.6',
      color: '#244536'
    }}
  >
    🌿 <strong>Godan:</strong> muda a última sílaba da linha U
    para a linha I + ます.<br />

    🌸 <strong>Ichidan:</strong> remove o る + ます.<br />

    🟡 <strong>Irregulares:</strong> possuem formas próprias,
    como する → します e 来る → 来ます.
  </p>
</div>
  
  </div>
)}
</section>

{/* FORMA NAI */}

<section
  className="instrucao-secao"
  style={secaoEstilo}
>
 <button
    onClick={() => alternarSecao("nai")}
    style={tituloSecaoEstilo}
  >
  <span className="flor-hover">🌸</span>
  <span
    >Forma NAI — ない
  </span>
   <span>
      {secoesAbertas.nai ? "▲" : "▼"}
    </span>
  </button>
   {secoesAbertas.nai && (

    <div style={{ marginTop: "15px" }}>

  <p>
    A forma <strong>NAI (ない)</strong> é uma forma negativa informal.
    Ela é usada para dizer que uma ação <strong>não acontece </strong>
    ou <strong>não será realizada</strong>.
  </p>

  <div
    style={{
      padding: "12px",
     
      marginBottom: "20px"
    }}
  >
    <strong>Exemplo:</strong>

    <p style={{ margin: "8px 0 0" }}>
      食べる → 食べない
      <br />
      <span style={{ color: "#666" }}>
        taberu → tabenai
      </span>
      <br />
      <span style={{ color: "#666" }}>
        comer → não comer
      </span>
    </p>
  </div>

  {/* GODAN */}

<div
  style={{
    marginBottom: "25px",
    padding: "18px",
    background: "#eef6ef",
    border: "1px solid #B9D3C0",
    
  }}
>
  <h4 style={{ color: "#244536", marginTop: 0 }}>
    🌿 Grupo 1 — Godan
  </h4>

    <p>
      Nos verbos Godan, a última sílaba da forma de dicionário muda
      da linha <strong>U (う)</strong> para a linha
      <strong> A (あ)</strong> e depois adicionamos
      <strong> ない</strong>.
    </p>

    <table style={tabelaEstilo}>
      <thead>
        <tr style={{ background: "#dcebdd" }}>
          <th style={celdaEstilo}>Forma U</th>
          <th style={celdaEstilo}>Forma A</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>く</strong><br /> ku</td>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>か</strong><br />ka</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>ぐ</strong> <br /> gu</td>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>が</strong><br /> ga</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize: '18px'}}>す</strong> <br /> su</td>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>さ</strong><br /> sa</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>つ</strong><br /> tsu</td>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>た</strong><br /> ta</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>ぬ</strong><br /> nu</td>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>な</strong><br /> na</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>む</strong><br /> mu</td>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>ま</strong> <br /> ma</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>ぶ</strong><br />bu</td>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>ば</strong><br /> ba</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>る</strong><br /> ru</td>
          <td style={celdaEstilo}><strong style={{fontSize:'18px'}}>ら</strong><br /> ra</td>
        </tr>
      </tbody>
    </table>

    <p style={{ marginTop: "15px" }}>
      <strong>Exemplos:</strong>
    </p>

    <ul>
  <li style={{ marginBottom: "15px" }}>
    書く → 書かない
    <br />
    <span style={{ color: "#666" }}>
      kaku → kakanai
    </span>
    <br />
    escrever → não escrever
  </li>

  <li style={{ marginBottom: "15px" }}>
    飲む → 飲まない
    <br />
    <span style={{ color: "#666" }}>
      nomu → nomanai
    </span>
    <br />
    beber → não beber
  </li>

  <li>
    話す → 話さない
    <br />
    <span style={{ color: "#666" }}>
      hanasu → hanasanai
    </span>
    <br />
    falar → não falar
  </li>
</ul>

    <div
      style={{
       marginTop: "20px",
    padding: "15px 18px",
    background: "#F3E6C8",
    border: "1px solid #C9A65B",
    color: "#705728",
    borderRadius: "12px"
      }}
    >
      <h4 style={{color:"#705728", marginTop: 0}}>⚠️ Atenção:</h4>
      <p style={{ marginBottom: 0 }}>
        Quando o verbo termina em <strong>う (u)</strong>,
        normalmente usamos <strong>わ (wa)</strong> antes de ない.
      </p>

      <p style={{ marginBottom: 0 }}>
        会う → 会わない
        <br />
        <span style={{ color: "#666" }}>
          au → awanai
        </span>
      </p>
    </div>
  </div>

  {/* ICHIDAN */}

<div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#fdf2f4",
    border: "1px solid #E9A5AF",
    
  }}
>
  <h4 style={{ color: "#7A3F4A", marginTop: 0 }}>
    🌸 Grupo 2 — Ichidan
  </h4>

  <p>
    Nos verbos Ichidan, removemos o
    <strong> る (ru)</strong> final e adicionamos
    <strong> ない</strong>.
  </p>

  <div
    
    
  >
    <p>
      食べる → 食べない
      <br />
      <span style={{ color: "#666" }}>
        taberu → tabenai
      </span>
      <br />
      comer → não comer
    </p>

    <p style={{ marginBottom: 0 }}>
      見る → 見ない
      <br />
      <span style={{ color: "#666" }}>
        miru → minai
      </span>
      <br />
      ver → não ver
    </p>
  </div>
</div>

{/* IRREGULARES */}

<div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#f6f2e8",
    border: "1px solid #C9A65B",
  }}
>
  <h4 style={{ color: "#705728", marginTop: 0 }}>
    🟡 Grupo 3 — Irregulares
  </h4>

  <p>
    Os verbos irregulares possuem formas próprias:
  </p>

  <div
   
  >
    <p>
      する → しない
      <br />
      <span style={{ color: "#666" }}>
        suru → shinai
      </span>
      <br />
      fazer → não fazer
    </p>

    <p style={{ marginBottom: 0 }}>
      来る → 来ない
      <br />
      <span style={{ color: "#666" }}>
        kuru → konai
      </span>
      <br />
      vir → não vir
    </p>
  </div>
</div>

  {/* FRASES */}

<div
  style={{
    marginTop: "20px",
    padding: "18px",
    background: "#EEF6FB",
    border: "1px solid #B8D9E8",
    borderRadius: "10px"
  }}
>
  <h4 style={{ color: "#356A7D", marginTop: 0 }}>
    💬 Exemplos em frases
  </h4>

  <div style={{ marginBottom: "15px" }}>
    <strong  style={{ fontSize: "18px" }}>今日は学校へ行かない。</strong>
     <br />
    <span style={{ color:'#666'}}>
      Kyō wa gakkō e ikanai.
    </span>
   <br />
    <span style={{ color:'#666'}}>
      Hoje não vou para a escola.
    </span>
  </div>

  <div  style={{ marginBottom: "15px" }}>
    <strong  style={{ fontSize: "18px" }}>私は肉を食べない。</strong>
  <br />
    <span style={{ color:'#666'}}>
      Watashi wa niku o tabenai.
    </span>

    <span style={{ color:'#666' }}>
      Eu não como carne.
    </span>
  </div>
</div>
   
{/* RESUMO */}

<div
  style={{
    marginTop: "25px",
    padding: "18px",
    background: "#f9fcfa",
    border: "1px solid #B9D3C0",
    borderRadius: "10px"
  }}
>
  <p
    style={{
      margin: 0,
      lineHeight: "1.6",
      color: "#244536"
    }}
  >
    📝 <strong>Resumo da Forma NAI:</strong>
  </p>

  <p
    style={{
      marginBottom: 0,
      lineHeight: "1.6",
      color: "#244536"
    }}
  >
    🌿 <strong>Godan:</strong> muda a última sílaba da linha U
    para a linha A + ない.<br />

    🌸 <strong>Ichidan:</strong> remove o る + ない.<br />

    🟡 <strong>Irregulares:</strong> possuem formas próprias,
    como する → しない e 来る → 来ない.
  </p>
</div>
   
    </div>

  )}

</section>



{/* FORMA TE */}

<section
   className="instrucao-secao"
   style={secaoEstilo}
>
  <button
    onClick={() => alternarSecao("te")}
     style={tituloSecaoEstilo}
  >
  <span className="flor-hover">🌸</span>
  <span>Forma TE — て</span>

  <span>
      {secoesAbertas.te ? "▲" : "▼"}
    </span>
  </button>

  {secoesAbertas.te && (

    <div style={{ marginTop: "15px" }}>

  <p>
    A forma <strong>TE (て)</strong> é uma das formas mais importantes
    da língua japonesa. Ela pode ser usada de diferentes maneiras,
    dependendo do contexto, como para conectar ações, fazer pedidos,
    dar instruções ou formar outras estruturas gramaticais.
  </p>

  <div
   
  >
    <strong>Exemplo:</strong>

    <p style={{ margin: "8px 0 0" }}>
      食べる → 食べて
      <br />
      <span style={{ color: "#666" }}>
        taberu → tabete
      </span>
      <br />
      <span style={{ color: "#666" }}>
        comer → coma / comendo
      </span>
    </p>
  </div>

 {/* GODAN */}

<div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#eef6ef",
    border: "1px solid #B9D3C0",
   
  }}
>

  <h4 style={{ color: "#244536", marginTop: 0 }}>

    🌿 Grupo 1 — Godan
  </h4>

<p style={{ lineHeight: "1.6" }}>
  Nos verbos <strong>Godan</strong>, a forma TE é formada de acordo com
  a última sílaba do verbo. Cada final segue uma transformação específica,
  como mostrado na tabela abaixo.
</p>
    <table style={tabelaEstilo}>
      <thead>
        <tr style={{ background: "#dcebdd" }}>
          <th style={celdaEstilo}>Final</th>
          <th style={celdaEstilo}>Forma TE</th>
          <th style={celdaEstilo}>Exemplo</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={celdaEstilo}>
            <strong style={{fontSize: '18px'}}>う</strong> u
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>って</strong> tte
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>買う → 買って</strong>
            <br />
            kau → katte
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>つ</strong> tsu
          </td>

          <td style={celdaEstilo}>
            <strong  style={{fontSize:'18px'}}>って</strong> tte
          </td>

          <td style={celdaEstilo}>
            <strong  style={{fontSize:'18px'}}>待つ → 待って</strong>
            <br />
            matsu → matte
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong  style={{fontSize:'18px'}}>る</strong> ru
          </td>

          <td style={celdaEstilo}>
            <strong  style={{fontSize:'18px'}}>って</strong>  tte
          </td>

          <td style={celdaEstilo}>
            <strong  style={{fontSize:'18px'}}>帰る → 帰って</strong>
            <br />
            kaeru → kaette
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>く</strong> ku
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>いて</strong> ite
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>書く → 書いて</strong>
            <br />
            kaku → kaite
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>ぐ</strong> gu
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>いで</strong> ide
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>泳ぐ → 泳いで</strong>
            <br />
            oyogu → oyoide
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>す</strong> su
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>して</strong> shite
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>話す → 話して</strong>
            <br />
            hanasu → hanashite
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>む</strong> mu
          </td>

           <td style={celdaEstilo}>
        <strong style={{ fontSize: "18px" }}>んで</strong> nde
  </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>読む → 読んで</strong>
            <br />
            yomu → yonde
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>ぶ</strong> bu
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>んで</strong> nde
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>遊ぶ → 遊んで</strong>
            <br />
            asobu → asonde
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>ぬ</strong> nu
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>んで</strong> nde
          </td>

          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>死ぬ → 死んで</strong>
            <br />
            shinu → shinde
          </td>
        </tr>
      </tbody>
    </table>

    <div
  style={{
    marginTop: "20px",
    padding: "15px 18px",
    background: "#F3E6C8",
    borderRadius: "12px",
    border: "1px solid #C9A65B",
    color: "#705728"
  }}
>
  <h4 style={{ color: "#705728", marginTop: 0 }}>
    ⚠️ Atenção:
  </h4>

  <p>
    O verbo <strong>行く (iku — ir)</strong> termina em
    <strong> く (ku)</strong>, mas não segue o padrão normal.
  </p>

  <p style={{ marginBottom: 0 }}>
    行く → 行って
    <br />
    <span style={{ color: "#666" }}>
      iku → itte
    </span>
  </p>
</div>
  </div>

  {/* ICHIDAN */}

<div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#fdf2f4",
    border: "1px solid #E9A5AF",
   
  }}
>
  <h4 style={{ color: "#7A3F4A", marginTop: 0 }}>
    🌸 Grupo 2 — Ichidan
  </h4>

    <p>
      Nos verbos Ichidan, removemos o
      <strong> る (ru)</strong> final e adicionamos
      <strong> て (te)</strong>.
    </p>

    <div
     
    >
      <p>
        食べる → 食べて
        <br />
        <span style={{ color: "#666" }}>
          taberu → tabete
        </span>
        <br />
        comer → coma / comendo
      </p>

      <p style={{ marginBottom: 0 }}>
        見る → 見て
        <br />
        <span style={{ color: "#666" }}>
          miru → mite
        </span>
        <br />
        ver → veja / vendo
      </p>
    </div>
  </div>

  {/* IRREGULARES */}

<div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#f6f2e8",
    border: "1px solid #C9A65B",
 
  }}
>
  <h4 style={{ color: "#705728", marginTop: 0 }}>
    🟡 Grupo 3 — Irregulares
  </h4>

  

    <p>
      Os verbos irregulares possuem formas próprias:
    </p>

    <div
     
    >
      <p>
        する → して
        <br />
        <span style={{ color: "#666" }}>
          suru → shite
        </span>
        <br />
        fazer → faça / fazendo
      </p>

      <p style={{ marginBottom: 0 }}>
        来る → 来て
        <br />
        <span style={{ color: "#666" }}>
          kuru → kite
        </span>
        <br />
        vir → venha / vindo
      </p>
    </div>
  </div>
  {/* FRASES */}

<div
  style={{
    marginTop: "20px",
    padding: "18px",
    background: "#EEF6FB",
    border: "1px solid #B8D9E8",
    borderRadius: "10px"
  }}
>
  <h4 style={{ color: "#356A7D", marginTop: 0 }}>
    💬 Exemplos em frases
  </h4>

  <div style={{ marginBottom: "15px" }}>
    <strong style={{ fontSize: "18px" }}>
      本を読んで、寝ます。
    </strong>
    <br />
    <span style={{ color: "#666" }}>
      Hon o yonde, nemasu.
    </span>
    <br />
    <span style={{ color: "#666" }}>
      Leio um livro e depois durmo.
    </span>
  </div>

  <div style={{ marginBottom: "15px" }}>
    <strong style={{ fontSize: "18px" }}>
      ここに座ってください。
    </strong>
    <br />
    <span style={{ color: "#666" }}>
      Koko ni suwatte kudasai.
    </span>
    <br />
    <span style={{ color: "#666" }}>
      Por favor, sente-se aqui.
    </span>
  </div>

  <div>
    <strong style={{ fontSize: "18px" }}>
      日本語を勉強している。
    </strong>
    <br />
    <span style={{ color: "#666" }}>
      Nihongo o benkyō shite iru.
    </span>
    <br />
    <span style={{ color: "#666" }}>
      Estou estudando japonês.
    </span>
  </div>
</div>
  
  <div
  style={{
    marginTop: "25px",
    padding: "18px",
    background: "#f9fcfa",
    border: "1px solid #B9D3C0",
    borderRadius: "10px"
  }}
>
  <p style={{ margin: 0, lineHeight: "1.6", color: "#244536" }}>
    📝 <strong>Resumo da Forma TE:</strong>
  </p>

  <p style={{ marginBottom: 0, lineHeight: "1.6", color: "#244536" }}>
    🌿 <strong>Godan:</strong> a transformação depende da última sílaba
    do verbo e segue as regras apresentadas na tabela.<br />
    🌸 <strong>Ichidan:</strong> remove o る e adiciona て.<br />
    🟡 <strong>Irregulares:</strong> possuem formas próprias,
    como する → して e 来る → 来て.
  </p>
</div>
  
  </div>

  )}

</section>

{/* FORMA TA */}

<section
  className="instrucao-secao"
  style={secaoEstilo}
>
  <button
    onClick={() => alternarSecao("ta")}
     style={tituloSecaoEstilo}
   >
  <span className="flor-hover">🌸</span>

  <span>Forma TA — た</span>
  <span>
      {secoesAbertas.ta ? "▲" : "▼"}
    </span>
  </button>

   {secoesAbertas.ta && (

    <div style={{ marginTop: "15px" }}>

  <p>
    A forma <strong>TA (た)</strong> é uma forma informal usada,
    principalmente, para falar sobre ações que aconteceram no passado.
  </p>

 <div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "15px 18px",
   
  }}
>
  <strong style={{ color: "#244536" }}>Exemplo:</strong>

  <p style={{ margin: "8px 0 0" }}>
    
      食べる → 食べた
    
    <br />
    <span style={{ color: "#666" }}>
      taberu → tabeta
    </span>
    <br />
    <span style={{ color: "#666" }}>
      comer → comeu / comi
    </span>
  </p>
</div>

  {/* GODAN */}

<div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#eef6ef",
    border: "1px solid #B9D3C0",
   
  }}
>
  <h4 style={{ color: "#244536", marginTop: 0 }}>
    🌿 Grupo 1 — Godan
  </h4>

    <p>
      Nos verbos Godan, a forma TA muda de acordo com a última
      sílaba do verbo. As mudanças seguem um padrão semelhante
      à forma TE.
    </p>

    <table style={tabelaEstilo}>
      <thead>
        <tr style={{ background: "#dcebdd" }}>
          <th style={celdaEstilo}>Final</th>
          <th style={celdaEstilo}>Forma TA</th>
          <th style={celdaEstilo}>Exemplo</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={celdaEstilo}>
            <strong style={{fontSize:'18px'}}>う</strong> u
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>った</strong> tta
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>買う → 買った</strong>
            <br />
            kau → katta
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>つ</strong> tsu
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>った</strong> tta
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>待つ → 待った</strong>
            <br />
            matsu → matta
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>る</strong> ru
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>った</strong> tta
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>帰る → 帰った</strong>
            <br />
            kaeru → kaetta
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>く</strong> ku
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>いた</strong> ita
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>書く → 書いた</strong>
            <br />
            kaku → kaita
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>ぐ</strong> gu
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>いだ</strong> ida
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>泳ぐ → 泳いだ</strong>
            <br />
            oyogu → oyoida
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>す</strong> su
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>した</strong> shita
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>話す → 話した</strong>
            <br />
            hanasu → hanashita
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>む</strong> mu
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>んだ</strong> nda
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>読む → 読んだ</strong>
            <br />
            yomu → yonda
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>ぶ</strong> bu
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>んだ</strong> nda
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>遊ぶ → 遊んだ</strong>
            <br />
            asobu → asonda
          </td>
        </tr>

        <tr>
          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>ぬ</strong> nu
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>んだ</strong> nda
          </td>

          <td style={celdaEstilo}>
            <strong style={{ fontSize: '18px' }}>死ぬ → 死んだ</strong>
            <br />
            shinu → shinda
          </td>
        </tr>
      </tbody>
    </table>
    
    <div
  style={{
    marginTop: "20px",
    padding: "15px 18px",
    background: "#F3E6C8",
    borderRadius: "12px",
    border: "1px solid #C9A65B",
    color: "#705728"
  }}
>
  <h4 style={{ color: "#705728", marginTop: 0 }}>
    ⚠️ Atenção:
  </h4>

  <p>
    O verbo <strong>行く (iku — ir)</strong> termina em
    <strong> く (ku)</strong>, mas não segue o padrão normal.
  </p>

  <p style={{ marginBottom: 0 }}>
    <strong style={{ fontSize: "18px" }}>
      行く → 行った
    </strong>
    <br />
    <span style={{ color: "#666" }}>
      iku → itta
    </span>
    <br />
    <span style={{ color: "#666" }}>
      ir → foi / fui
    </span>
  </p>
</div>
    
  </div>

  {/* ICHIDAN */}

<div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#fdf2f4",
    border: "1px solid #E9A5AF",
  }}
>
  <h4 style={{ color: "#7A3F4A", marginTop: 0 }}>
    🌸 Grupo 2 — Ichidan
  </h4>

    <p>
      Nos verbos Ichidan, removemos o
      <strong> る (ru)</strong> final e adicionamos
      <strong> た (ta)</strong>.
    </p>

    <div
     
    >
      <p>
        食べる → 食べた
        <br />
        <span style={{ color: "#666" }}>
          taberu → tabeta
        </span>
        <br />
        comer → comeu / comi
      </p>

      <p style={{ marginBottom: 0 }}>
        見る → 見た
        <br />
        <span style={{ color: "#666" }}>
          miru → mita
        </span>
        <br />
        ver → viu / vi
      </p>
    </div>
  </div>
 {/* IRREGULARES */}
<div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#f6f2e8",
    border: "1px solid #C9A65B",
   
  }}
>
  <h4 style={{ color: "#705728", marginTop: 0 }}>
    🟡 Grupo 3 — Irregulares
  </h4>
    <p>
      Os verbos irregulares possuem formas próprias:
    </p>

    <div
      
    >
      <p>
        する → した
        <br />
        <span style={{ color: "#666" }}>
          suru → shita
        </span>
        <br />
        fazer → fiz / fez
      </p>

      <p style={{ marginBottom: 0 }}>
        来る → 来た
        <br />
        <span style={{ color: "#666" }}>
          kuru → kita
        </span>
        <br />
        vir → vim / veio
      </p>
    </div>
  </div>
   
  {/* FRASES */}

<div
  style={{
    marginTop: "20px",
    padding: "18px",
    background: "#EEF6FB",
    border: "1px solid #B8D9E8",
    borderRadius: "10px"
  }}
>
  <h4 style={{ color: "#356A7D", marginTop: 0 }}>
    💬 Exemplos em frases
  </h4>

  <div style={{ marginBottom: "15px" }}>
    <strong style={{ fontSize: "18px" }}>
      昨日、映画を見た。
    </strong>
    <br />
    <span style={{ color: "#666" }}>
      Kinō, eiga o mita.
    </span>
    <br />
    <span style={{ color: "#666" }}>
      Ontem, assisti a um filme.
    </span>
  </div>

  <div style={{ marginBottom: "15px" }}>
    <strong style={{ fontSize: "18px" }}>
      朝ご飯を食べた。
    </strong>
    <br />
    <span style={{ color: "#666" }}>
      Asa gohan o tabeta.
    </span>
    <br />
    <span style={{ color: "#666" }}>
      Comi o café da manhã.
    </span>
  </div>

  <div>
    <strong style={{ fontSize: "18px" }}>
      日本へ行った。
    </strong>
    <br />
    <span style={{ color: "#666" }}>
      Nihon e itta.
    </span>
    <br />
    <span style={{ color: "#666" }}>
      Fui para o Japão.
    </span>
  </div>
</div>

<div
  style={{
    marginTop: "25px",
    padding: "18px",
    background: "#f9fcfa",
    border: "1px solid #B9D3C0",
    borderRadius: "10px"
  }}
>
  <p style={{ margin: 0, lineHeight: "1.6", color: "#244536" }}>
    📝 <strong>Resumo da Forma TA:</strong>
  </p>

  <p style={{ marginBottom: 0, lineHeight: "1.6", color: "#244536" }}>
    🌿 <strong>Godan:</strong> a transformação depende da última sílaba
    do verbo e segue as regras apresentadas na tabela.<br />
    🌸 <strong>Ichidan:</strong> remove o る e adiciona た.<br />
    🟡 <strong>Irregulares:</strong> possuem formas próprias,
    como する → した e 来る → 来た.
  </p>
</div>
  
   </div>

  )}

</section>

{/* FORMA MASHOU */}

<section
   className="instrucao-secao"
   style={secaoEstilo}
>
   <button
    onClick={() => alternarSecao("mashou")}
    style={tituloSecaoEstilo}
  >
   <span className="flor-hover">🌸</span>
  <span> Forma MASHOU — ましょう </span>

  <span>
      {secoesAbertas.mashou ? "▲" : "▼"}
    </span>
  </button>

   {secoesAbertas.mashou && (

    <div style={{ marginTop: "15px" }}>

  <p>
    A forma <strong>MASHOU (ましょう)</strong> é usada para fazer
    convites ou sugestões, geralmente com o sentido de
    <strong> "vamos fazer algo"</strong>.
  </p>
   <div
  
>
  <strong style={{ color: "#244536" }}>
    Exemplo:
  </strong>

  <p >
      食べる → 食べましょう
    
    <br />
    <span style={{ color: "#666" }}>
      taberu → tabemashou
    </span>
    <br />
    <span style={{ color: "#666" }}>
      comer → vamos comer
    </span>
  </p>
</div>

  {/* GODAN */}

  <div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#eef6ef",
    border: "1px solid #B9D3C0",
   
  }}
>
  <h4 style={{ color: "#244536", marginTop: 0 }}>
    🌿 Grupo 1 — Godan
  </h4>

    <p>
      Nos verbos Godan, mudamos a última sílaba da linha
      <strong> U (う)</strong> para a linha
      <strong> I (い)</strong> e adicionamos
      <strong> ましょう</strong>.
    </p>

    <table style={tabelaEstilo}>
      <thead>
        <tr style={{ background: "#dcebdd" }}>
          <th style={celdaEstilo}>Forma U</th>
          <th style={celdaEstilo}>Forma I</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>う</strong> u</td>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>い</strong> i</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>く</strong> ku</td>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>き</strong> ki</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>ぐ</strong> gu</td>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>ぎ</strong> gi</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>す</strong> u</td>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>し</strong> shi</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>つ</strong> tsu</td>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>ち</strong> chi</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>ぬ</strong> nu</td>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>に</strong> ni</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>む</strong> mu</td>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>み</strong> mi</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>ぶ</strong> bu</td>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>び</strong> bi</td>
        </tr>

        <tr>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>る</strong> ru</td>
          <td style={celdaEstilo}><strong style={{ fontSize: "18px" }}>り</strong> ri</td>
        </tr>
      </tbody>
    </table>

    <p style={{ marginTop: "15px" }}>
      <strong>Exemplos:</strong>
    </p>

    <ul>
      <li>
        書く → 書きましょう
        <br />
        <span style={{ color: "#666" }}>
          kaku → kakimashou
        </span>
        <br />
        vamos escrever
      </li>
      <br />
      <li>
        飲む → 飲みましょう
        <br />
        <span style={{ color: "#666" }}>
          nomu → nomimashou
        </span>
        <br />
        vamos beber
      </li>
      <br />
      <li>
        話す → 話しましょう
        <br />
        <span style={{ color: "#666" }}>
          hanasu → hanashimashou
        </span>
        <br />
        vamos conversar
      </li>
    </ul>
  </div>

 {/* ICHIDAN */}

<div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#fdf2f4",
    border: "1px solid #E9A5AF",
  }}
>
  <h4 style={{ color: "#7A3F4A", marginTop: 0 }}>
    🌸 Grupo 2 — Ichidan
  </h4>

    <p>
      Nos verbos Ichidan, removemos o
      <strong> る (ru)</strong> final e adicionamos
      <strong> ましょう</strong>.
    </p>

    <div>
      <p>
        食べる → 食べましょう
        <br />
        <span style={{ color: "#666" }}>
          taberu → tabemashou
        </span>
        <br />
        vamos comer
      </p>

      <p style={{ marginBottom: 0 }}>
        見る → 見ましょう
        <br />
        <span style={{ color: "#666" }}>
          miru → mimashou
        </span>
        <br />
        vamos ver
      </p>
    </div>
  </div>

 {/* IRREGULARES */}

<div
  style={{
    marginTop: "20px",
    marginBottom: "25px",
    padding: "18px",
    background: "#f6f2e8",
    border: "1px solid #C9A65B",
  }}
>
  <h4 style={{ color: "#705728", marginTop: 0 }}>
    🟡 Grupo 3 — Irregulares
  </h4>
    <p>
      Os verbos irregulares possuem formas próprias:
    </p>

    <div>
      <p>
        する → しましょう
        <br />
        <span style={{ color: "#666" }}>
          suru → shimashou
        </span>
        <br />
        fazer → vamos fazer
      </p>

      <p style={{ marginBottom: 0 }}>
        来る → 来ましょう
        <br />
        <span style={{ color: "#666" }}>
          kuru → kimashou
        </span>
        <br />
        vir → vamos vir
      </p>
    </div>
  </div>
   {/* FRASES */}

<div
  style={{
    marginTop: "20px",
    padding: "18px",
    background: "#EEF6FB",
    border: "1px solid #B8D9E8",
    borderRadius: "10px"
  }}
>
  <h4 style={{ color: "#356A7D", marginTop: 0 }}>
    💬 Exemplos em frases
  </h4>

  <div style={{ marginBottom: "15px" }}>
    <strong style={{ fontSize: "18px" }}>
      一緒に昼ご飯を食べましょう。
    </strong>
    <br />
    <span style={{ color: "#666" }}>
      Issho ni hiru gohan o tabemashou.
    </span>
    <br />
    <span style={{ color: "#666" }}>
      Vamos almoçar juntos.
    </span>
  </div>

  <div style={{ marginBottom: "15px" }}>
    <strong style={{ fontSize: "18px" }}>
      一緒に日本語を勉強しましょう。
    </strong>
    <br />
    <span style={{ color: "#666" }}>
      Issho ni nihongo o benkyō shimashou.
    </span>
    <br />
    <span style={{ color: "#666" }}>
      Vamos estudar japonês juntos.
    </span>
  </div>

  <div>
    <strong style={{ fontSize: "18px" }}>
      週末に映画を見ましょう。
    </strong>
    <br />
    <span style={{ color: "#666" }}>
      Shūmatsu ni eiga o mimashou.
    </span>
    <br />
    <span style={{ color: "#666" }}>
      Vamos assistir a um filme no fim de semana.
    </span>
  </div>
</div>
<div
  style={{
    marginTop: "25px",
    padding: "18px",
    background: "#f9fcfa",
    border: "1px solid #B9D3C0",
    borderRadius: "10px"
  }}
>
  <p style={{ margin: 0, lineHeight: "1.6", color: "#244536" }}>
    📝 <strong>Resumo da Forma MASHOU:</strong>
  </p>

  <p style={{ marginBottom: 0, lineHeight: "1.6", color: "#244536" }}>
    🌿 <strong>Godan:</strong> muda a última sílaba da linha U
    para a linha I + ましょう.<br />
    🌸 <strong>Ichidan:</strong> remove o る + ましょう.<br />
    🟡 <strong>Irregulares:</strong> possuem formas próprias,
    como する → しましょう e 来る → 来ましょう.
  </p>
</div>
</div>
   )}
</section>
     </div>
    </div>
  </>
  );  
}