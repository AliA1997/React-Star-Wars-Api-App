import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import your Provider
import { Provider } from 'react-redux';
//import your store
import store from './redux/store';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
