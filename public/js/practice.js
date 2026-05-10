let currentVerb = null;

async function loadVerb() {
  const response = await fetch("http://localhost:3000/verb");
  const data = await response.json();

  if (data.finished) {
  document.getElementById("verb").innerText = "🎉 Treino finalizado!";

  // 🔥 reinicia automaticamente
  await fetch("http://localhost:3000/reset", {
    method: "POST"
  });

  return;
}

  currentVerb = data;

  document.getElementById("verb").innerText =
    `Verbo: ${currentVerb.verb}`;

  document.getElementById("meaning").innerText =
  `Significado: ${currentVerb.meaning}`;

  document.getElementById("answer").focus(); 


}
async function checkAnswer() {
  const input = document.getElementById("answer").value;

  const response = await fetch("http://localhost:3000/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      verb: currentVerb.verb,
      answer: input
    })
  });

  const result = await response.json();

  const resultEl = document.getElementById("result");

  if (result.correct) {
    resultEl.innerText = "✅ Correto!";
    resultEl.style.color = "green";
  } else {
    resultEl.innerText = "❌ Errado!";
    resultEl.style.color = "red";
  }

  setTimeout(() => {
    resultEl.innerText = ""; 
    document.getElementById("answer").value = ""; 

    loadVerb(); 
  }, 1200);
};

document.getElementById("answer").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});
window.onload = function () {
  loadVerb();
};