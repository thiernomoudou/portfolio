import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './styles/main.css';

import App from './views/App/index';
import Navbar from './components/navbar/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('root'));
registerServiceWorker();
