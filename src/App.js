import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./button"

class App extends Component {
  render() {
    var table_style = {'position': 'absolute',
                        'left': '50%',
                        'transform': 'translateX(-50%)'
                      };
    return (
      <div className="App">
        <br/>
        <input type="text" style={{"width" : "11%"}}/>
        <table style={table_style}>
          <tbody>
            <tr>
              <td><Button value={1}></Button></td>
              <td><Button value={2}></Button></td>
              <td><Button value={3}></Button></td>
              <td><Button value={"/"}></Button></td>
            </tr>
            <tr>
              <td><Button value={4}></Button></td>
              <td><Button value={5}></Button></td>
              <td><Button value={6}></Button></td>
              <td><Button value={"*"}></Button></td>
            </tr>
            <tr>
              <td><Button value={7}></Button></td>
              <td><Button value={8}></Button></td>
              <td><Button value={9}></Button></td>
              <td><Button value={"-"}></Button></td>
            </tr>
            <tr>
              <td><Button value={0}></Button></td>
              <td><Button value={"="}></Button></td>
              <td><Button value={"C"}></Button></td>
              <td><Button value={"+"}></Button></td>
            </tr>          
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
