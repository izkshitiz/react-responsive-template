import React,{Component} from 'react';
import {Container,Row,Col,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import stockillustration from '../Resources/Images/stockillustration.svg'
import logo from "../Resources/Images/logo.svg";
import Emailsubmit from '../Components/UI/Emailsubmit/Emailsubmit';
import classes from './Landing.module.css';

let landingnavColor="tranparent";

class Landing extends Component{

render(){
return(
<Container className={classes.contentcontainer}>

        <Row  className={classes.mainrow}>
          <Col className={classes.firstcol} md={6}>
            <Row>
            <Col>
            <h1 className={classes.heading}>Learn to trade stocks and cryptocurrency</h1>
            </Col>
            </Row>
            
            <Row>
            <Col>
            <p className={classes.para}>all while playing a game.</p>
            </Col>
            </Row>

            <Row>
            <Col>
            <Emailsubmit/>
            </Col>
            </Row>
             
            <Row className={classes.paralogin}>
            <Col>
            <p>Or <a href="#">Signin</a> / <a href="#">Signup</a> Using partner sites</p>
            </Col>
            </Row>
            
        </Col>

            <Col md={6}>
           <img className={classes.stock_illustration} src={stockillustration} alt="trading illustration"></img>
                </Col>
        </Row>
      </Container>

);
}
}
export default Landing;