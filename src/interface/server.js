const express = require('express');
const cors = require('cors');

const app = express();

// 
app.use(cors());


app.use(express.json());


//  Lista de verbos 
const verbs = [ 
  { verb: "kaku", answer: "kaite", meaning: "escrever" },
  { verb: "nomu", answer: "nonde", meaning: "beber" },
  { verb: "taberu", answer: "tabete", meaning: "comer" },
  { verb: "iku", answer: "itte", meaning: "ir" },
  { verb: "hanasu", answer: "hanashite", meaning: "falar" },
  { verb: "yomu", answer: "yonde", meaning: "ler" },
  { verb: "kau", answer: "katte", meaning: "comprar" },
  { verb: "matsu", answer: "matte", meaning: "esperar" },
  { verb: "asobu", answer: "asonde", meaning: "brincar" },
  { verb: "shinu", answer: "shinde", meaning: "morrer" }
];



app.get('/', (req, res) => {
  res.send('API rodando 🚀');
});

let remainingVerbs = [...verbs]; 
let currentVerb = null;

app.get('/verb', (req, res) => {
  if (remainingVerbs.length === 0) {
    return res.json({ finished: true });
  }

  const randomIndex = Math.floor(Math.random() * remainingVerbs.length);
  currentVerb = remainingVerbs[randomIndex];

  console.log("🎲 Enviando verbo:", currentVerb);
   console.log("📊 Restantes:", remainingVerbs.length);

  res.json(currentVerb);
});



app.post('/check', (req, res) => {
  const { verb, answer } = req.body;

  console.log("📩 Recebi:");
  console.log("Verbo:", verb);
  console.log("Resposta:", answer);

  const found = verbs.find(v => v.verb === verb);

  if (found &&
  found.answer === answer.trim().toLowerCase()) {
    console.log("✅ Correto!");

    
    remainingVerbs = remainingVerbs.filter(v => v.verb !== verb);

    return res.json({ correct: true });
  }

  console.log("❌ Errado!");


  res.json({ correct: false });
});

app.post('/reset', (req, res) => {
  remainingVerbs = [...verbs];
  console.log("🔄 Treino reiniciado");
  res.json({ reset: true });
});



app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});