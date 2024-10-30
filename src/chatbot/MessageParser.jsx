// src/chatbot/messageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
      this.userNameCaptured = false;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      // If we haven't captured the user's name yet, assume this is their name
      if (!this.userNameCaptured) {
        this.actionProvider.setUserAndAskService(message);
        this.userNameCaptured = true;
      } else if (lowerCaseMessage.includes("summarization")) {
        this.actionProvider.handleServiceSelection("Summarization");
      } else if (lowerCaseMessage.includes("categorization")) {
        this.actionProvider.handleServiceSelection("Categorization");
      } else {
        this.actionProvider.handleUnknownInput(message);
      }
    }
  }
  
  export default MessageParser;
  