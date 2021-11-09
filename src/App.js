import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import React  from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import Register from './components/Login/register'
import Login from './components/Login/login'
import NavBar from './components/common/navBar'
import Example from "./components/common/example";
import Notfound from "./components/common/notfond"

// import Main from './main'

function App() {
  return <>
  
    <React.Fragment>
    <NavBar />
    <Switch>  

    <Route path="/register" component={Register} />  
    <Route path="/login" component={Login} />   
    <Route path="/bb" component={Login} />  
    <Route path="/example" component={Example} />
    <Redirect from="/" exact to="/login"/>
   </Switch>  

    </React.Fragment>
  {/* <Register/> */}
  
  </>;
}

export default App;
