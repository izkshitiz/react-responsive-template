import React from 'react';
import classes from './Emailsubmit.module.css';
const emailsubmit = (props) => {
return (
<div className={classes.email_submit_container}>
            <span className={['far', 'fa-envelope', 'fa-lg', classes.iconwa].join(' ')}></span>
            <input className={classes.emailpick} type="email" placeholder="Email"  />
            <button className={['lnr', 'lnr-arrow-right', classes.white, classes.email_submit_button].join(' ')}></button>
            </div>
);
}
export default emailsubmit;