import React from "react";
import { RadioGroup, FilePicker, Label, Pane,Textarea } from "evergreen-ui";
import "./Test.css";
import FooterTest from "../Footer/FooterTest";
import NavBar from "../NavBar/NavBar";
import NavBarTrainer from "../NavBar/NavBarTrainer";

import mapa from "../../assets/map-test.jpg"

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { label: "Hacia la derecha", value: "read-only" },
        { label: "Hacia la izquierda", value: "read-only" },
        {
          label: "Hacia abajo si en el siguiente punto se encuentra",
          value: "write"
        },
        { label: "Nunca de las respuestas es correcta", value: "restricted" }
      ],
      value: "restricted"
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <main>
          <div class="viewport-main">
            <div class="main-containerTest">
              <div class="title-create">
                <RadioGroup
                  marginTop={40}
                  size={16}
                  label="¿Hacia que lugar debemos avanzar para continuar?"
                  value={this.state.value}
                  options={this.state.options}
                  onChange={value => this.setState({ value })}
                />
              </div>
              <div class="title-create">
                <Pane>
                  <img width={"30%"} alt="" src={mapa}></img>
                </Pane>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}


class TestEntrenador extends React.Component{
  render(){
    return (
      <div>
      <NavBarTrainer/>
      <main>
          <div class="viewport-main">
            <div class="main-containerTest">
            <div class="title-create">
                    <div class="half">
                                <Pane>
                                <Label
                                    htmlFor="textarea-2"
                                    marginBottom={2}
                                    display="block"
                                >
                                    Pregunta 1
                                </Label>
                                <Textarea width={400}
                                    id="textarea-2"
                                    placeholder="Textarea placeholder..."
                                />
                    </Pane>
                    <Pane>
                                <Label
                                    htmlFor="textarea-2"
                                    marginBottom={2}
                                    display="block"
                                >
                                    Pregunta 2
                                </Label>
                                <Textarea width={400}
                                    id="textarea-2"
                                    placeholder="Textarea placeholder..."
                                />
                    </Pane>
                    </div>
                    <div class="half">
                    <Pane>
                                <Label 
                                    htmlFor="textarea-2"
                                    marginBottom={2}
                                    display="block"
                                >
                                    Pregunta 3
                                </Label>
                                <Textarea width={400}
                                    id="textarea-2"
                                    placeholder="Textarea placeholder..."
                                />
                    </Pane>
                    <Pane>
                                <Label
                                    htmlFor="textarea-2"
                                    marginBottom={2}
                                    display="block"
                                >
                                    Pregunta 4
                                </Label>
                                <Textarea width={400}
                                    id="textarea-2"
                                    placeholder="Textarea placeholder..."
                                />
                    </Pane>
                    </div>
                </div>
              <div class="title-create">
                <h4>
                  Inserta una Imagen para describir de forma más precisa tu
                  pregunta
                </h4>
                <FilePicker marginleft={40} width={"50%"} />
              </div>
            </div>
          </div>
        </main>
        </div>
    )
  }
}

export default class definitiveTest extends React.Component{

    state = { TestIsOn: true, vista: "entrenador" }
  
  handleStateUp = (testInOn) => {
    this.setState({ TestIsOn: testInOn })
}
  render(){
  return (
    <React.Fragment>
      { this.state.TestIsOn ? <TestEntrenador / > : <Test/> }
      <FooterTest handleStateUp={this.handleStateUp} />
    </React.Fragment>
  )
}
}