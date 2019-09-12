import React from "react";

import NavBarMain from "../NavBar/NavBarMain";
import { Button } from "evergreen-ui";


class Login extends React.Component {
 
  render() {

    return (
      <React.Fragment>
        <NavBarMain />
        <Button>Login</Button>
      </React.Fragment>
    );
  }
}

export default Login;
