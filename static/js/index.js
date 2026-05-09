// chatbot
const toggleBtn = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatContainer");
const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("userInput");
const messages = document.getElementById("messages");

toggleBtn.onclick = () => {
  chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
};

sendBtn.onclick = sendMessage;
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
  let text = input.value.trim();
  if (!text) return;

  messages.innerHTML += `<div class="user">You: ${text}</div>`;
  input.value = "";

  // Call backend
  try {
    let res = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Server error: ${res.status} ${errorText}`);
    }

    let data = await res.json();
    messages.innerHTML += `<div class="bot">Bot: ${data.reply}</div>`;
    messages.scrollTop = messages.scrollHeight;

  } catch (err) {
    messages.innerHTML += `<div class="bot">Error: ${err.message}. Make sure the Flask server is running at http://127.0.0.1:5000 and OPENAI_API_KEY is set.</div>`;
  }
}