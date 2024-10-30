// src/chatbot/actionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setState) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setState;
      this.userName = "";  // Store the user's name
    }
  
    greetUserWithOptions(name) {
      const message = this.createChatBotMessage(
        `Hey, ${name}! Which service would you like to use?`,
        {
          widget: "serviceOptions",
        }
      );
      this.updateChatbotState(message);
    }
  
    setUserAndAskService(name) {
      this.userName = name;  // Store the user's name
      this.greetUserWithOptions(name);
    }
  
    handleServiceSelection(service) {
      let responseMessage;
  
      if (service === "Summarization") {
        responseMessage = "You selected Summarization! This service helps in condensing information.";
      } else if (service === "Categorization") {
        responseMessage = "You selected Categorization! This service helps in organizing data into categories.";
      }
  
      const message = this.createChatBotMessage(responseMessage);
      this.updateChatbotState(message);
    }
  
    updateChatbotState(message) {
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  