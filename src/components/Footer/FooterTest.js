import React from "react";
import { TextInput, Button, Icon } from "evergreen-ui";
import "./Footer.css"

class FooterTest extends React.Component {
  render() {
    return (
      <div>
        <div className="border-green">
          <div className="start-game-containers">
            <React.Fragment>
              
          
            <Button appearance="minimal" height={60} intent="warning" marginLeft={16} marginRight={20} intent="warning" onClick={() => this.props.handleStateUp(false)}  ><Icon icon="compass" color="warning" marginRight={16} /></Button>
         
             
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
