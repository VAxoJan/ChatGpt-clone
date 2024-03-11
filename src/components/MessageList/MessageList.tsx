import React from "react";

interface MessageListProps {
  messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className="message-item">
          <h1>{message}</h1>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
