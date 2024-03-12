import React from "react";
import MessageList from "../MessageList/MessageList";


interface TopDivProps {
  onClick: () => void | undefined;
  messages: string[];
}

const TopDiv: React.FC<TopDivProps> = ({ onClick, messages }) => {
  return (
    <div onClick={onClick} className="topDiv">
      <MessageList messages={messages} />
    </div>
  );
};

export default TopDiv;