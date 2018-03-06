import React, { Component } from 'react';
import './App.css';
import Lines from './Lines'


class App extends Component {
  height=400;
  width=400;
  
    styleTable = {position:'absolute' , width:this.width , height :this.height};
    styleCanvas = {position:'absolute' };
  
  render() {
    return (
      <div className="App">
       <div>
         <table style={this.styleTable}>
            <tbody>
              <tr>
                <td>Jill</td>
                <td>Smith</td> 
                <td>50</td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td> 
                <td>94</td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td> 
                <td>94</td>
              </tr>
            </tbody>
    </table>
          <canvas style={this.styleCanvas} width={this.width} height={this.height} ref={(canvasDom) => {
               const ctx = canvasDom.getContext("2d")
               ctx.strokeStyle = 'red';
               ctx.lineWidth = 4;
               const lines = new Lines();
               lines.DrawLine(ctx,this.width,this.height,lines.LineTypeRow3);
          }} />
       </div>
      </div>
    );
  }
}




export default App;
