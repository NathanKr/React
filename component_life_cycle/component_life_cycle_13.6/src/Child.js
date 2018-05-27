import React , {Component} from  'react';
import Logic from './Logic';

class Child extends Component{
    state = {};
    static write(funcName,msg){
        Logic.write("Child",funcName,msg);
    }
    constructor(props){
        super(props);
        Child.write("constructor");
    }

    render(){
        Child.write("render");
        return <h3 style={{margin : '10px' , border:'1px solid aqua'}}>Child component -> props got from parent : {this.props.children}</h3>;
    }

    shouldComponentUpdate(){
        const shouldComponentUpdate = true;
        Child.write(   "shouldComponentUpdate" , 
                        "return : "+ shouldComponentUpdate);
        return shouldComponentUpdate;
    }

    /*
        return value : updated state or null if nothing to update
    */
    static getDerivedStateFromProps(nextProps, prevState){
        const updatedState = null; //configureable this
        Child.write("getDerivedStateFromProps",
        {
            nextProps : nextProps, 
            prevState : prevState , 
            updatedState : updatedState
        });
        return updatedState;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const args = {
            prevProps : prevProps,
            prevState : prevState,
            snapshot : null};
        Child.write("getSnapshotBeforeUpdate",args);
        return args.snapshot;//configureable this
    }

    componentDidMount(){
        Child.write("componentDidMount");
    }

    // --- snapshot is return from getSnapshotBeforeUpdate
    componentDidUpdate(prevProps, prevState, snapshot){
        const args = {
            prevProps : prevProps,
            prevState : prevState,
            snapshot : snapshot};
        Child.write("componentDidUpdate" , args);
    }

    componentWillUnmount(){
        Child.write("componentWillUnmount");
    }
}

export default Child;