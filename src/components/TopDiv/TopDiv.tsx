import React from 'react';
import avatar from '../../images/Avatar User.svg';

const TopDiv: React.FC<{ messages: string[] }> = ({ messages }) => {
  return (
    <div className="topDiv">
      <div>
        {messages.map((message, index) => (
          <div className={index === 0 ? "topDivFirstValue" : index % 2 === 0 ? "evenMessage" : "oddMessage"} key={index}>
            <img
              style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              src={avatar}
              alt=""
            />
            <h1 className='message'>{message}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDiv;
