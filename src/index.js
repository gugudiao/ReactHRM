import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import allStore from './redux/stores/index'

const store = allStore(); 
ReactDOM.render(
                <Provider store={store}>
                  <App/>
                </Provider>,
                document.getElementById('root')
);
registerServiceWorker();
