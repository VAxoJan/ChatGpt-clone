import LeftSideDiv from "./components/LeftSide/LeftSideDiv";

const App = () => {
  return (
    <div className="mainDiv">
      <LeftSideDiv/>
      <div className="right-side">
        <div className="insideDiv">
          <div className="topDiv"></div>
          <div className="bottomDiv"></div>
        </div>
      </div>
    </div>
  )
}

export default App;