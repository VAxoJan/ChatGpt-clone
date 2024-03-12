const TopDiv: React.FC<{ messages: string[] }> = ({ messages }) => {
  return (
    <div className="topDiv">
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p> 
        ))}
      </div>
    </div>
  );
};
export default TopDiv;