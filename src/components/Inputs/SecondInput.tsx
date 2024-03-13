import React, { useState } from 'react';
import logo from '../../images/send.svg';

const SecondInput: React.FC<{ secNewMessage: (message: string) => void }> = ({ secNewMessage }) => {
  const [value, setValue] = useState<string>('');

  const handleClick = () => {
    if (value.trim() !== '') {
      secNewMessage(value);
      setValue('');
    }
  };

  return (
    <div className="inputOne">
      <h1 style={{ marginTop: 15 }}>User 1</h1>
      <div style={{ display: 'flex', position: 'relative' }}>
        <input
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClick();
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
          style={{ cursor: 'pointer' }}
          className="send"
          src={logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default SecondInput;
