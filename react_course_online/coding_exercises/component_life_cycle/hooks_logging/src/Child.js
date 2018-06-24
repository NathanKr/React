import React , {Component} from  'react';
import Logic from './Logic';

class Child extends Component{
    state = {};
    static write(funcName,ignore,msg){
        Logic.write("Child",funcName,ignore,msg);
    }
    constructor(props){
        super(props);
        Child.write("constructor",false);
    }

    render(){
        Child.write("render",false);
        return <h3 style={{margin : '10px' , border:'1px solid aqua'}}>Child component -> props got from parent : {this.props.children}</h3>;
    }

    shouldComponentUpdate(nextProps, nextState){
        const shouldComponentUpdate = true;
        Child.write(   "shouldComponentUpdate" , 
                        this.props.ignoreConsoleLessCommon,
                        "return : "+ shouldComponentUpdate);
        return shouldComponentUpdate;
    }

    /*
        return value : updated state or null if nothing to update
    */
    static getDerivedStateFromProps(nextProps, prevState){
        const updatedState = null; 
        Child.write("getDerivedStateFromProps",
        // used like this because i do not have this in static function
        nextProps.ignoreConsoleLessCommon,
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
        Child.write("getSnapshotBeforeUpdate",
                    this.props.ignoreConsoleLessCommon,
                    args);
        return args.snapshot;//configureable this
    }

    componentDidMount(){
        Child.write("componentDidMount",false);
    }

    // --- snapshot is return from getSnapshotBeforeUpdate
    componentDidUpdate(prevProps, prevState, snapshot){
        const args = {
            prevProps : prevProps,
            prevState : prevState,
            snapshot : snapshot};
        Child.write("componentDidUpdate" ,false, args);
    }

    componentWillUnmount(){
        Child.write("componentWillUnmount",false);
    }
}

export default Child;