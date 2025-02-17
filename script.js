document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        document.getElementById('userInput').placeholder = file.name; // Display file name in input
    }
});

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    let userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    let chatBox = document.getElementById("chatBox");

    // Append user message
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);

    // Clear input field
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").placeholder = "Ask something...";

    // Auto-scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate bot response (replace with actual AI integration)
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerText = "Processing your request...";
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
