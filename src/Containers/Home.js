import React,{Component} from 'react';
import classes from './Home.module.css';
import {Route} from 'react-router-dom';
import {Container,Row,Col,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Landing from './Landing';
// import Dashboard from './Dashboard';
import logo from "../Resources/Images/logo.svg";


class Home extends Component{
render(){
return(
<div className={classes.Homemaindiv}>
<Container fluid className={classes.navbarcontainer}>
    <Row className={classes.navrow}>
    <Col xs={{span:8, offset:3}} sm={{span:8, offset:3}} md={{span:6, offset:1}} className={classes.logocol} ><img src={logo} alt="companay-logo" width="30" height="30" /> <span>tradinghigh.local</span></Col>
    <Col /*md={{span:0, offset:4}}*/ className={classes.login}><a href="#">About</a></Col>
    <Col /*md={{span:0, offset:1}}*/ ><a href="#">Contact</a></Col>
    </Row>
</Container>
<Route path='/' exact render={() => <Landing/>} />

{/* <Route path='/dash' exact render={() => <Dashboard/>} /> */}

</div>
);
}
}
export default Home;