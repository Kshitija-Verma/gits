import React from 'react';
import Layout from './containers/Layout/Layout';
import classes from  './App.module.css';
import {Route,Switch, Redirect} from 'react-router-dom';
import Login from './containers/Auth/LogIn/Login';

function App() {
  let routes=(<Switch>
        
        <Route path="/login" component={Login}/>
        <Route path="/" component={Layout}/>
        
        </Switch>);
  return (
    <div className={classes.App}>
     <Layout>
       {routes}
</Layout>
    </div>
  );
}

export default App;
