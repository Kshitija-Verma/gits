import React, { Component} from 'react';
import CustomerSignup from './SignUp/CustomerSignUp/CustomerSignUp';
import SellerSignup from './SignUp/SellerSignup/SellerSignUp';
import Login from './LogIn/Login';
import Button from '../../components/UI/Form/Button/Button';
import classes from './Auth.module.css';
import Modal from '../../components/UI/Modal/Modal';


class Auth extends Component{

    state={
        isSignUp:false,
      showModal:true,
      isCustomer:true
  }

switchSignHandler=()=>{

  this.setState(prevstate=>{

      return{
          isSignUp:!prevstate.isSignUp
      };
  })

  console.log(this.state.isSignUp);

}
switchSignUpFormHandler=()=>{

    this.setState(prevstate=>{

        return{
            isCustomer:!prevstate.isCustomer
        };
    })

}
modalHandler=()=>{
  this.setState({showModal:false});
  
}


    render(){

        let displayForm = null;
        if(this.state.isSignUp && this.state.showModal&&this.state.isCustomer)
        {
            displayForm=(<div className={classes.Box}>
            <CustomerSignup/>
            <Button
             clicked={this.switchSignUpFormHandler}
            btnType="Danger">Signup as {this.state.isCustomer?' Seller?':'Customer?'}</Button>
            <Button
             clicked={this.switchSignHandler}
            btnType="Danger">Switch to {this.state.isSignUp?'LOGIN !':'SIGNUP !'}</Button>

        </div>);
        }

        else if(this.state.isSignUp && this.state.showModal&& !this.state.isCustomer)
        {
            displayForm=(<div className={classes.Box}>
                <SellerSignup/>
                <Button
             clicked={this.switchSignUpFormHandler}
            btnType="Danger">Signup as {this.state.isCustomer?'Seller? !':'Customer?'}</Button>
                <Button
                 clicked={this.switchSignHandler}
                btnType="Danger">Switch to {this.state.isSignUp?'LOGIN !':'SIGNUP !'}</Button>
                </div>);

            } 
        



         else if(!this.state.isSignUp && this.state.showModal)
         {
             displayForm =  <Modal modalclosed={this.modalHandler}>
                               <Login/>
                         <Button
                        clicked={this.switchSignHandler}
                        btnType="Danger">Switch to {this.state.isSignUp?'LOGIN !':'SIGNUP !'}</Button>
            
                        </Modal>
            
            }



        return(<React.Fragment>
            {displayForm}
            </React.Fragment>);
    
}
}

export default Auth;
