import React, { Component } from 'react';

class Button extends React.Component{
	constructor(props){
		super(props)
		console.log(this.props)
	}
   render() {
      return (<div>
                      <button>{this.props.value}</button>
              </div>
                   )
      }
}
export default Button