import { createChatBotMessage } from 'react-chatbot-kit';
import CustomHeader from './CustomHeader';
import ServiceOptions from './ServiceOptions';
import BotAvatar from './BotAvatar';

const chatbotConfig = {
  botName: "SortitudeBot",
  initialMessages: [
    createChatBotMessage("Hello, I am Sortitude! What is your good name?"),
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#376B7E" },
    chatButton: { backgroundColor: "#5ccc9d" },
  },
  customComponents: {
    header: () => <CustomHeader />,
    botAvatar: () => <BotAvatar />,  // Use the custom bot avatar here
  },
  widgets: [
    {
      widgetName: "serviceOptions",
      widgetFunc: (props) => <ServiceOptions {...props} />,
      mapStateToProps: ["messages"],
    },
  ],
};

export default chatbotConfig;
