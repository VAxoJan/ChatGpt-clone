import FirstInput from '../Inputs/FirstInput';
import SecondInput from '../Inputs/SecondInput';
import LeftSideDiv from '../LeftSide/LeftSideDiv'
import TopDiv from '../TopDiv/TopDiv';

const test = () => {
  return console.log(123);
  
}

const MainWork = () => {
  return (
    <div className="mainDiv">
      <LeftSideDiv/>
      <div className="right-side">
        <div className="insideDiv">
        <TopDiv onClick={test}/>
          <div className="bottomDiv">
            <FirstInput/>
            <SecondInput/>
          </div>
        </div>
      </div>
    </div>  )
}

export default MainWork;