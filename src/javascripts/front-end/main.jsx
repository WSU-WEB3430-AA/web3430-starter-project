//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import React from "react"
import ReactDOM from "react-dom/client"
import { FaReact, FaNode, FaDatabase, FaShippingFast } from "react-icons/fa"

// Example class component
export class PoweredBy extends React.Component {
  render() {
    return <h2 className="lead text-muted my-3">Powered by {this.props.framework}</h2>
  }
}

// Example function components
export function MERNDisplay(props) {
  return (
    <div className="course-icons">
      <FaNode size="30%" color="#43853d" className="mt-5" />
      <br />
      <FaReact size="20%" color="skyblue" className="m-3" />
      <FaShippingFast size="20%" color="#259dff" className="m-3" />
      <FaDatabase size="20%" color="#00ED64" className="m-3" />
    </div>
  )
}

export function Welcome(props) {
  return (
    <div className="container my-5 py-5 text-center">
      <MERNDisplay />
      <h1 className="mt-3 display-5">Welcome to the front-end of {props.to}</h1>
      <PoweredBy framework={`React from ${props.using}`} />
      <a href="/hello">Click here to visit a back-end (server-side) page</a>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("main")).render(<Welcome to="WEB 3430" using="the MERN stack" />)
