import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom"

import Landing from "./components/LandingPage/Landing"
import PreTest from "./components/PreTest/PreTest"
import definitiveTest from "./components/TestComponent/Test"

import './index.css';

class App extends React.Component{

  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/personaliza-test" component={PreTest} />
        <Route path="/crear-test" component={definitiveTest} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
