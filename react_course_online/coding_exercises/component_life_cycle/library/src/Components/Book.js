import React, { Component } from 'react';
import OperationType from '../Logic/OperationType';

class Book extends Component {
    
    write = (msg) => {
        console.log(msg);
    }

    componentDidMount(){
        this.write("book created");
        this.handleOperationTypeChange(OperationType.create());
    }

    componentWillUnmount(){
        this.write("book deleted");
        this.handleOperationTypeChange(OperationType.delete());
    }

    handleOperationTypeChange(operationType){
        this.props.handleOperationTypeChange(
            this.props.id , 
            (new Date()).toLocaleString() ,
            operationType,
            this.props.name,
            this.props.numPages,
            this.props.isNew)
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.isNew !== this.props.isNew){
            this.write(["book edited : " , this.props]);
            this.handleOperationTypeChange(OperationType.edit());
        }
    }

    render() {
        return <div>
            <p>{this.props.name}</p>
            <p>{this.props.numPages}</p>
            <p>{this.props.isNew ? 'New' : 'Used'}</p>
            </div>;
    }
}

export default Book;

