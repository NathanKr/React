import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './Parent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <React.Fragment>
        <Parent />
        <a href='https://twitter.com/dan_abramov/status/981712092611989509' rel='noopener noreferrer' target="_blank">Dan Abramov's component life cycle sequence diagram. Bold methods are commonly used</a>
        <br/>
        <a href='https://reactjs.org/docs/react-component.html' rel='noopener noreferrer' target="_blank">React component life cycle documentation</a>
    </React.Fragment>
    , document.getElementById('root'));
registerServiceWorker();
