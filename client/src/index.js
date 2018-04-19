import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';

import './index.css';
import './styles/main.css';
import {brands, faCheckSquare, faCoffee} from './icons';

import App from './views/App/index';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(brands, faCheckSquare, faCoffee);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
