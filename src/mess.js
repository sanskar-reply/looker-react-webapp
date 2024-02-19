import { useEffect } from 'react';

const DialogFlowMessenger = () => {
  useEffect(() => {
    // Create link element for the stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
    document.head.appendChild(link);

    // Create script element for the df-messenger.js
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    document.body.appendChild(script);

    // Create df-messenger element
    const dfMessenger = document.createElement('df-messenger');
    dfMessenger.setAttribute('location', 'us-central1');
    dfMessenger.setAttribute('project-id', 'gen-ai-sandbox');
    dfMessenger.setAttribute('agent-id', 'c83a6bf5-c228-4229-a0e8-ba8e18e42074');
    dfMessenger.setAttribute('language-code', 'en');
    dfMessenger.setAttribute('max-query-length', '-1');

    // Create df-messenger-chat element
    const dfMessengerChat = document.createElement('df-messenger-chat');
    dfMessengerChat.setAttribute('chat-title', 'mclaren-v1');

    // Append df-messenger-chat to df-messenger
    dfMessenger.appendChild(dfMessengerChat);

    // Add styles for df-messenger
    const style = document.createElement('style');
    style.textContent = `
      df-messenger {
        z-index: 999;
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        width: 450px;
      }
    `;
    document.head.appendChild(style);

    // Append df-messenger to the document body
    document.body.appendChild(dfMessenger);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      document.body.removeChild(dfMessenger);
      document.head.removeChild(style);
    };
  }, []);

  return null; // DialogFlowMessenger component doesn't render anything directly
};

export default DialogFlowMessenger;
