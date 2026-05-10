const API_URL = "http://localhost:3000";

async function checkAnswerAPI(verb, answer) {
  const response = await fetch(`${API_URL}/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ verb, answer })
  });

  return await response.json();
}