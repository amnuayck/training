import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import React  from "react";
import { Route, Switch } from "react-router-dom";
import Register from './components/Login/register'
import Login from './components/Login/login'

// import Main from './main'

function App() {
  return <>
    <React.Fragment>
    <Switch>                
    <Route path="/register" component={Register} />  
    <Route path="/login" component={Login} />  
   </Switch>   
    </React.Fragment>
  <Register/>
  
  </>;
}

export default App;
