import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import RootReducer from './Reducers/RootReducer'
import {Provider} from 'react-redux'

const store = createStore(RootReducer)
    ReactDOM.render(<Provider 
        store = {store}><App />
        </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
