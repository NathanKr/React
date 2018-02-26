import React , {Component} from 'react';

class Child extends Component{
    constructor(props){
        super(props);    
        console.log('Child.js constructor');
      }
    
      componentWillMount(){
        console.log('Child.js componentWillMount');
      }
    render()
    {
        console.log('Child.js render');
        return <h2>text from father component : {this.props.text}</h2>
    }

    componentDidMount(){
        console.log('Child.js componentDidMount');
      }
}

export default Child;
