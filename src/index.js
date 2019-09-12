import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Footer from "./components/Footer/Footer"
import FooterTest from "./components/Footer/FooterTest"
import Landing from "./components/LandingPage/Landing"
import NavBar from "./components/NavBar/NavBar"
import PreTest from "./components/PreTest/PreTest"
import Test from "./components/TestComponent/Test"

import Login from "./components/Register-Login/Login-Register"

import './index.css';

class App extends React.Component{

  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/entrar" component={Login} />
        <Route path="/personaliza-test" component={PreTest} />
        <Route path="/crear-test" component={Test} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
