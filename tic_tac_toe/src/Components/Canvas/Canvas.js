import React, { Component } from 'react';
import Lines from '../Lines'

/*
    i am using here class NOT because i have state field
    i use it because i need its life cycle hooks
*/
class Canvas extends Component {
  canvasDom = null;
  styleCanvas = {display:'block' , zIndex: 2 , pointerEvents: 'none' ,
                 backgroundColor:'transparent' , position:'absolute' };

    componentDidMount() {
      console.log('componentDidMount canvas');
    }

    /*shouldComponentUpdate(nextProps,nextState)
    {
      let shouldUpdate;
      console.log('Canvas shouldComponentUpdate->nextProps : '+nextProps);
      
      try 
      {
        shouldUpdate = (this.props.winLineType !== nextProps.props.winLineType);
      }
      catch(err) 
      {
        shouldUpdate = false;
      }
      console.log('Canvas shouldComponentUpdate : '+shouldUpdate);

      return shouldUpdate;
    }*/
      

    componentDidUpdate() {
      console.log('componentDidUpdate canvas -> winLineType : ' +this.props.winLineType);
      if(this.canvasDom) // because some times it is null
      {
          const ctx = this.canvasDom.getContext("2d");
          if(this.props.winLineType != null)
          {
              ctx.strokeStyle = 'red';
              ctx.lineWidth = 4;
              const lines = new Lines();
              { /* get lines.LineTypeRow3 dynamically */}
              lines.DrawLine(ctx,400,400,this.props.winLineType);
          }
          else{
              ctx.clearRect(0, 0, 400, 400);
          }
      }
    }

    render() {
      return (
        <canvas style={this.styleCanvas} width={400} height={400} ref={(canvasDom) => {
         this.canvasDom = canvasDom;
      }} />
      );
    }
  }
  
  export default Canvas;
  


  