import React,{Component} from 'react';
import classes from './Home.module.css';
import {Route,Link} from 'react-router-dom';
// import {Container,Row,Col} from 'react-bootstrap';
import Landing from './Landing';
import Dashboard from './Dashboard';
import About from '../Components/Aboutus';
import logo from "../Resources/Images/logo.svg";
class Home extends Component{
render(){
return(
<div className={classes.Container}>
    <div fluid className={classes.navbarcontainer}>
        <div  className={classes.logocol} ><Link to=""><img src={logo} alt="companay-logo" width="30" height="30" /> <span>tradinghigh.local</span></Link></div>
        <div  className={classes.navlist}>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
    <div className={classes.contentcontainer}>
    <Route path='/' exact render={() => <Landing/>} />
    <Route path='/dashboard' exact render={() => <Dashboard/>} />
    <Route path='/about' exact render={() => <About/>} />
    </div>
{/* <Route path='/dash' exact render={() => <Dashboard/>} /> */}
</div>
);
}
}

export default Home;