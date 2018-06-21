import React, { Component } from 'react';

class UserInput extends Component {
    state = {inputValue : "change this input text"};

    render(){
        return (
            <div>
                <h2>Input Component</h2>
                <input  type='text' defaultValue={this.state.inputValue} 
                        onChange={(evt) => {
                            this.props.changeHandler(evt.target.value);
                            this.setState({inputValue : evt.target.value});
                            } }/>
            </div>
    );
    }
}

export default UserInput;