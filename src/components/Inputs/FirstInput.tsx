import React, { useState } from "react";
import logo from "../../images/send.svg";

const FirstInput: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleClick = () => {
    if (value.trim() !== "") {
      setMessages([...messages, value]);
      setValue(""); // Clear input after sending
    }
  };

  return (
    <div className="inputOne">
      <h1>User 1</h1>
      <div style={{ display: "flex", position: "relative" }}>
        <input
        onKeyDown={(e) => {
          if(e.key === "Enter") {
            handleClick()
          }
        }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
        />
        <img
          onClick={handleClick}
          style={{ cursor: "pointer" }}
          className="send"
          src={logo}
          alt=""
        />
      </div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default FirstInput;
