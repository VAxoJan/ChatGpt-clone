import React from "react";

interface MessageListProps {
  newMessages: string[];
}

const secondMessageList: React.FC<MessageListProps> = ({ newMessages }) => {
  return (
    <div className="message-list">
      {newMessages.map((newMessages, index) => (
        <div key={index} className="message-item">
          <h1>{newMessages}</h1>
        </div>
      ))}
    </div>
  );
};

export default secondMessageList;
