import React, { useState } from "react";
import MessageList from "../MessageList/MessageList";

const TopDiv = ({ onClick }: { onClick: () => void | undefined }) => {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div onClick={onClick} className="topDiv">
      <div>
         <MessageList messages={messages} />
      </div>
    </div>
  );
};

export default TopDiv;
