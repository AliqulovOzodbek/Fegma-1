function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatLog = document.getElementById('chat-log');
    
    // Simulate sending a message to the bot and receiving a response
    var userMessage = document.createElement('div');
    userMessage.innerText = "You: " + userInput;
    chatLog.appendChild(userMessage);
  
    var botResponse = document.createElement('div');
    botResponse.innerText = "6505832273:AAH2jJ1gvhlZOhchMG2oSqUu15qc_24VOug";
    chatLog.appendChild(botResponse);
  }
  