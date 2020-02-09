import React,{Component} from 'react';
// import {Container,Row,Col} from 'react-bootstrap';
import stockillustration from '../Resources/Images/stockillustration.svg';
import Emailsubmit from '../Components/UI/Emailsubmit/Emailsubmit';
import classes from './Landing.module.css';

class Landing extends Component{

render(){
return(
<div className={classes.contentwrapper}>
  <div className={classes.firstcol}>
    <div>
      <h1 className={classes.heading}>Learn to trade stocks and cryptocurrency</h1> 
     </div>
            
    <div>
      <p className={classes.para}>all while playing a game.</p>        
    </div>

    <div className={classes.emailbox}>
      <Emailsubmit/>
    </div>
             
    <div className={classes.paralogin}>
      <p>Or <a href="#">Signin</a> / <a href="#">Signup</a> Using partner sites</p>
    </div>        
  </div>

  <div className={classes.secondcol}>
    <img className={classes.stock_illustration} src={stockillustration} alt="trading illustration"></img>
  </div>
</div>

);
}
}
export default Landing;