import React from 'react';
import classes from "./NavigationItems.module.css";
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems=(props)=>{

    const elementConfig = {
        type:'text',
        placeholder:'Search here'
    };

    return(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/login">Login</NavigationItem>
        <NavigationItem link="/orders" >Home</NavigationItem> 
        <NavigationItem link="/logout">More</NavigationItem>
        <NavigationItem link="/auth" >Cart</NavigationItem>
        

    </ul>
)};
export default navigationItems;