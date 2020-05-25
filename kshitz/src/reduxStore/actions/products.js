import * as actionTypes from './actionTypes';
import axios from 'axios';

export const viewProducts=()=>{
    return dispatch=>{
        axios.get('http://localhost:8080/view-all-products').then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error.response);
        })
    }
}