import React from "react";
import NavBarMain from "../NavBar/NavBarMain";
import FooterIndex from "../Footer/FooterIndex";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import { Button, Pane, Dialog, FormField, TextInput, TextInputField } from "evergreen-ui";
import mapaLanding from "../../assets/mapa-test-edited.jpg";
import "./Landing.css";

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state = {isShown: false, isLoading: false}
  }
  componentDidUpdate(state, setState){
    if (this.state.isLoading === true){
      window.setTimeout(() => {
        this.setState({
          isShown: false
        })
      }, 2000)
    }
  }
  render() {
    return (
      <div>
        <NavBarMain />
        <main>
          <section className="presentation">
            <div className="introduction">
              <div className="intro-text">
                <h1>Un Entrenamiento a la Altura de La Competición</h1>
                <h3>
                  Mejora tus habilidades en el deporte de Orientación gracias a
                  tests ideados específicamente para corredores. <br />
                  Juega a pruebas de memoria y mucho más.
                </h3>
              </div>
              <div className="cta">
               
                  <Button onClick={() => this.setState({ isShown: true })}
                    className="btn-create"
                    appearance="primary"
                    marginRight={12}
                    height={40}
                  >
                    CREAR CUENTA
                  </Button>
                
                <Link to="/personaliza-test">
                  <Button className="btn-do" marginRight={12} height={40}>
                    HAZ UN TEST
                  </Button>
                </Link>
              </div>
            </div>
            {/** MODAL DE LOGIN: */}
            <Pane>
              <Dialog
                isShown={this.state.isShown}
                title="Crea una cuenta en segundos "
                onCloseComplete={() => this.setState({ isShown: false, isLoading: false })}
                isConfirmLoading={this.state.isLoading}
                onConfirm={() => this.setState({ isLoading: true })}
                confirmLabel={this.state.isLoading ? 'Cargando...' : 'Registrarse'}
                hasFooter = {false}
               hasHeader = {false}
              >
              <Pane display="flex" alignItems="center" flexDirection="column">
                
                    <TextInputField height={40} width={"60%"} marginBottom={20}
                    label = "Elige un usuario para tu cuenta"
                      name="text-input-name"
                      placeholder="Nombre de usuario..."
                    />
                    <TextInputField height={40 } width={"60%"} marginBottom={20}
                    label = "Escribe tu correo electrónico"
                      name="text-input-name"
                      placeholder="tu email..."
                    />

                  <input type="password"></input>
                
                <Button onClick={() => this.setState({ isShown: true })} appearance="success" width={"20%"}>Registrarse</Button>
                </Pane>
              </Dialog>

             
              </Pane>
            {/** MODAL DE LOGIN -FIN: */}
            <div className="cover">   
            <Fade top duration={2500}><img src={mapaLanding} alt="matebook" /></Fade> 
            </div>
          </section>
        </main>
        <FooterIndex />
      </div>
    );
  }
}

export default Landing;
