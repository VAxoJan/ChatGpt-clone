import logo from "../../images/send.svg";

const SecondInput = () => {
  return (
    <div className="inputOne">
      <h1 style={{marginTop:15}}>User 1</h1>
      <div style={{display:"flex",position:"relative"}}>
        <input type="text" />
        <img style={{cursor:"pointer"}} className="send" src={logo} alt="" />
      </div>
    </div>
  )
}

export default SecondInput;