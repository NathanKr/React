import React, { Component } from 'react';

class UserInput extends Component {
    state = {inputValue : "change this input text"};
    myStyle = {width : '300px' , border : '2px solid black' , margin : '20px', boxShadow: '4px 4px #888888'};


    render(){
        return (
            <div style={this.myStyle}>
                <h2>Input Component</h2>
                <input  type='text' defaultValue={this.state.inputValue} 
                        onChange={(evt) => {
                            this.props.changeHandler(evt.target.value);
                            this.setState({inputValue : evt.target.value});
                            } }/>
                <p>{this.state.inputValue}</p>
            </div>
    );
    }
}

export default UserInput;