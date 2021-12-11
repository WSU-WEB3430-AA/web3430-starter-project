// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)
require.context('../', true, /\.(json|txt|dat)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import React from 'react'
import ReactDOM from 'react-dom'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'

// Example class component
export class PoweredBy extends React.Component {
  render(){
    return (
      <h2 className="text-muted my-3"> Powered by {this.props.framework}</h2>
    )
  }
}

// Example function component
export function Welcome(props) {
  return (
    <div className="container my-5 py-5 text-center">
      <FaReact size="8%" color="#ddd" className="m-3" />
      <FaNodeJs size="5%" color="#ddd" className="m-3"/>
      <FaDatabase size="5%" color="#ddd" className="m-3"/>
      <h1 className="mt-3">Welcome to {props.to}!</h1>
      <PoweredBy framework={`React from ${props.using}`}/>
    </div>
  )
}

ReactDOM.render(<Welcome to="WEB 3430" using="the MERN stack"/>, document.getElementById('main'))