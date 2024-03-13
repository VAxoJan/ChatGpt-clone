import React, { useState } from 'react';
import FirstInput from '../Inputs/FirstInput';
import SecondInput from '../Inputs/SecondInput';
import LeftSideDiv from '../LeftSide/LeftSideDiv';
import TopDiv from '../TopDiv/TopDiv';
import '../Responsive/Responsive.css';

const MainWork: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleNewMessage = (newMessage: string) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="mainDiv">
      <LeftSideDiv />
      <div className="right-side">
        <div className="insideDiv">
          <TopDiv messages={messages} />
          <div className="bottomDiv">
            <FirstInput onNewMessage={handleNewMessage} />
            <SecondInput secNewMessage={handleNewMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWork;
