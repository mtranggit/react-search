import React from 'react'
import ReactDOM from 'react-dom'

import './styles.scss'
import codeURL from './code.png'

const CodeImage = () => (
  <img src={codeURL} style={ {background: "#2B3A42", padding: 20, width: 32}} />
)
const Index = () => {
  return (
    <React.Fragment>
    <div>Hello React with Webpack 4!</div>
    <div>
      <pre>
        const string = "Hello world"
      </pre>
      <CodeImage />
    </div>
    </React.Fragment>
  )
}

ReactDOM.render(<Index />, document.getElementById("index"));