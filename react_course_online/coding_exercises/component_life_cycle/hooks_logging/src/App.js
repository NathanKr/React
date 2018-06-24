import React, { Component } from 'react';
import Parent from './Parent';

class App extends Component {
    state = {ignoreConsoleLessCommon : false};

    render() {
        return (
        <div>
            <div style={{margin : '10px'}}>
             <label>ignoreConsoleLessCommon</label>
             <input onChange = {() => {
                this.setState({ignoreConsoleLessCommon : !this.state.ignoreConsoleLessCommon})
                }} defaultChecked = {this.state.ignoreConsoleLessCommon} type='checkbox'/>
            </div>        
            <Parent ignoreConsoleLessCommon={this.state.ignoreConsoleLessCommon}/>
        </div>
        );
    }
}

export default App;