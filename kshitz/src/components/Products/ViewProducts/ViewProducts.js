import React from 'react';
import {connect } from 'react-redux';
import * as actions from '../../../reduxStore/actions/index';

const viewProducts=(props)=>{

    const submitHandler=()=>{
        console.log('inside submit handler');
        props.onViewProducts();
    }


    return(
        <button onClick ={submitHandler}>product details</button>
    );



};

const mapDispatchToProps=dispatch=>{
    return{
onViewProducts: ()=>dispatch(actions.viewProducts())
};
    
};

export default connect(null,mapDispatchToProps)(viewProducts);