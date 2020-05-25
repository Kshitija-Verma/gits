import React from 'react';
import classes from './NavigationItem.module.css';
const navigationItem=(props)=>(
    <li className={classes.NavigationItem}>
        <nav> <a href={props.link} activeClassName={classes.active} >{props.children}</a></nav>
    </li>
);
export default navigationItem;