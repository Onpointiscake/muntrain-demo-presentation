import React from "react"
import { RadioGroup, FilePicker } from 'evergreen-ui'
import "./Test.css"
import FooterTest from "../Footer/FooterTest"
import NavBar from "../NavBar/NavBar"

class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            options: [
                { label: 'Hacia la derecha', value: 'read-only' },
                { label: 'Hacia la izquierda', value: 'read-only' },
                { label: 'Hacia abajo si en el siguiente punto se encuentra', value: 'write' },
                { label: 'Nunca de las respuestas es correcta', value: 'restricted' }
            ],
            value: "restricted"
        }

    }
    render(){
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
                        label="Escribe las 4 posibles respuestas que darás al usuario para seleccionar:"
                        value={this.state.value}
                        options={this.state.options}
                        onChange={value => this.setState({ value })}
                        />
                </div>
                <div class="title-create">
                <h4>Inserta una Imagen para describir de forma más precisa tu pregunta</h4>
                <FilePicker width={"50%"}/>
                </div>
            </div>
        </div>
      </main>
      <FooterTest />
        </div>
    )
}
}

export default Test