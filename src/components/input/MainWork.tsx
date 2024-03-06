import LeftSideDiv from '../LeftSide/LeftSideDiv'

const MainWork = () => {
  return (
    <div className="mainDiv">
      <LeftSideDiv/>
      <div className="right-side">
        <div className="insideDiv">
          <div className="topDiv"></div>
          <div className="bottomDiv">
            <div className="inputOne">
              <h1>User 1</h1>
              <input type="text"/>
            </div>
            <div className="inputTwo">
              <h1>User 2</h1>
              <input type="text"/>
            </div>
          </div>
        </div>
      </div>
    </div>  )
}

export default MainWork;