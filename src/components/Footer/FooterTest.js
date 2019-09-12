import React from "react";
import { TextInput, Button, toaster } from "evergreen-ui";
import "./Footer.css"

class FooterTest extends React.Component {
  render() {
    return (
      <div>
        <div className="border-green">
          <div className="start-game-containers">
            <React.Fragment>
              {" "}
              <Button marginRight={12} iconBefore="arrow-left">
                Atrás
              </Button>
              <TextInput
                width={380}
                height={60}
                name="text-input-name"
                placeholder="Escribe tu pregunta"
              />
              <Button marginLeft={12} iconBefore="arrow-right">
                Siguiente
              </Button>
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterTest;
