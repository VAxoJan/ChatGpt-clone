import FirstInput from '../Inputs/FirstInput';
import SecondInput from '../Inputs/SecondInput';
import LeftSideDiv from '../LeftSide/LeftSideDiv'
import { test } from '../Test/Test';
import TopDiv from '../TopDiv/TopDiv';
import '../Responsive/Responsive.css';

const MainWork = () => {
  return (
    <div className="mainDiv">
      <LeftSideDiv/>
      <div className="right-side">
        <div className="insideDiv">
        <TopDiv onClick={test} messages={[]}/>
          <div className="bottomDiv">
            <FirstInput/>
            <SecondInput/>
          </div>
        </div>
      </div>
    </div> 
)
}

export default MainWork;