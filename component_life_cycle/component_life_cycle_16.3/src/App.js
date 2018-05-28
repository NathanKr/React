import React, { Component } from 'react';
import Parent from './Parent';

class App extends Component {
    state = {ignoreConsoleLessCommon : false};

    render() {
        return (
        <React.Fragment>
            <div style={{margin : '10px'}}>
             <label>ignoreConsoleLessCommon</label>
             <input onChange = {() => {
                this.setState({ignoreConsoleLessCommon : !this.state.ignoreConsoleLessCommon})
                }} defaultChecked = {this.state.ignoreConsoleLessCommon} type='checkbox'/>
            </div>        
            <Parent ignoreConsoleLessCommon={this.state.ignoreConsoleLessCommon}/>
            <a href='https://twitter.com/dan_abramov/status/981712092611989509' rel='noopener noreferrer' target="_blank">Dan Abramov's component life cycle sequence diagram. Bold methods are commonly used</a>
            <br/>
            <a href='https://reactjs.org/docs/react-component.html' rel='noopener noreferrer' target="_blank">React component life cycle documentation</a>
        </React.Fragment>
        );
    }
}

export default App;