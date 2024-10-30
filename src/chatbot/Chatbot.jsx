import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import chatbotConfig from './chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent = () => {
  return (
    <div style={{ width: 200 }}>
      <Chatbot
        config={chatbotConfig}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotComponent;
