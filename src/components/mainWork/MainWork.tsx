import FirstInput from '../Inputs/FirstInput';
import SecondInput from '../Inputs/SecondInput';
import LeftSideDiv from '../LeftSide/LeftSideDiv'

const MainWork = () => {
  return (
    <div className="mainDiv">
      <LeftSideDiv/>
      <div className="right-side">
        <div className="insideDiv">
          <div className="topDiv"></div>
          <div className="bottomDiv">
            <FirstInput/>
            <SecondInput/>
          </div>
        </div>
      </div>
    </div>  )
}

export default MainWork;