import React from "react";
import logoMuntrain from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

import { Button, Avatar } from "evergreen-ui";

function NavBarTrainer() {
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
          <h4>Perfil Entrenador</h4>
          <Avatar marginLeft={12}
          cursor="pointer"
           marginRight={12}
            src="https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg"
            name="Alan Turing"
            size={40}
            />
            <Link to="/"><Button>SALIR</Button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarTrainer;
