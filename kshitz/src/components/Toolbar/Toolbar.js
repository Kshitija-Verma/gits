import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';


const toolbar=(props)=>(
<header className={classes.Toolbar}>
    <div></div>
    <div></div>
    <div></div>
    <Logo/>
    <input style={{padding:'5px', width:'60%', marginLeft:'10px'}} type='text' placeholder='search here for any product'/>
    <NavigationItems/>
</header>
);
export default toolbar;