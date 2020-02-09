import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
// import firebase from 'firebase';
import classes from './Dashboard.module.css';

class Dashboard extends Component{
    state = {
        text:''
    };

 
render(){
return(

<Container className={classes.contentcontainer}>
    <Row  className={classes.mainrow}>
        <Col className={classes.firstcol} md={6}>
            <Row>
                <div>
                  <p>Important stuff here !</p>
            </div>
            </Row>
        </Col>    
        <Col md={6}>
           {/* <img className={classes.stock_illustration} src={stockillustration} alt="trading illustration"></img> */}     
        </Col>
    </Row>       
</Container>

);
}
}
export default Dashboard;