import React from "react";
import logoMuntrain from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { Button, Avatar } from "evergreen-ui";

function NavBar() {
  return (
    <div>
      <nav>
        <div class="nav-container">
          <div class="logo-container">
            <img width="48px" height="48px" src={logoMuntrain} alt="logo" />
            <Link to="/">
              <h1 class="logo">Muntrain.com</h1>
            </Link>
          </div>
          <div class="tiempo-container">
          <Avatar
          cursor="pointer"
           marginRight={12}
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
            size={40}
            />
            <Button>SALIR</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
