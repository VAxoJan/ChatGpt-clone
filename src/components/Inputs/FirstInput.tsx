import logo from "../../images/send.svg";
const FirstInput = () => {
  return (
    <div className="inputOne">
      <h1>User 1</h1>
      <div style={{display:"flex",position:"relative"}}>
        <input type="text" />
        <img style={{cursor:"pointer"}} className="send" src={logo} alt="" />
      </div>
    </div>
  );
};

export default FirstInput;
