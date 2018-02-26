import React , {Component} from 'react';

class Child extends Component{
   constructor(props){
        super(props); 
          console.log('Child.js constructor');
        }
  
     componentWillMount(){ 
         console.log('Child.js componentWillMount');
        }

   render(){
       console.log('Child.js render');
       return <h2 className='Child'>this is child component : {this.props.text}</h2>
   }

   componentDidMount(){ 
       console.log('Child.js componentDidMount');
    }

    componentWillReceiveProps(nextProps)
    {
        console.log('UPDATE Child.js componentWillReciveProps . nextProps : ');
        console.log(nextProps);
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('UPDATE Child.js shouldComponentUpdate return true' +
                    '\nnextProps : ' + JSON.stringify(nextProps) + 
                    '\nnext state : ' + JSON.stringify(nextState) );
        return true;
    }

    componentWillUpdate(nextProps,nextState)
    {
        console.log('UPDATE Child.js componentWillUpdate' +
        '\nnextProps : ' + JSON.stringify(nextProps) + 
        '\nnext state : ' + JSON.stringify(nextState) );
    }

    componentDidUpdate()
    {
        console.log('UPDATE Child.js componentDidUpdate');
    }

}
export default Child;



