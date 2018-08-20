import React, { Component } from 'react';

class UserInput extends Component {
    initialValue = "change this input text";
    state = {inputValue : this.initialValue};

    render(){
        return (
            <div>
                <h2>Input Component</h2>
                <input  type='text' defaultValue={this.initialValue} 
                        onChange={(evt) => {
                            this.props.changeHandler(evt.target.value);
                            this.setState({inputValue : evt.target.value});
                            } }/>
            </div>
    );
    }
}

export default UserInput;