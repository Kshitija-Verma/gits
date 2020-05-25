import React, { Component } from 'react';
import classes from './Layout.module.css';

import Toolbar from '../../components/Toolbar/Toolbar';
import Auth from '../Auth/Auth';
import Product from '../../components/Products/ViewProducts/ViewProducts';



class Layout extends Component{


    render(){
        
        return(
            <div className={classes.Content}>
                <Toolbar/>
               <Product/>
                <Auth/>
                 </div>
        );
    }

}



export default  Layout;