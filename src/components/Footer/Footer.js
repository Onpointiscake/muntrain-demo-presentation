import React from "react";
import { Link } from "react-router-dom";
import { TextInput } from "evergreen-ui";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="no-border-green">
          <div class="start-game-container">
            <TextInput
              width={380}
              height={60}
              name="text-input-name"
              placeholder="Escribe un título para este test"
            />
            <Link to="/crear-test">
              <button>Crear TEST</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
