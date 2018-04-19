import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';

import './index.css';
import './styles/main.css';
import {brands, faUser, faBriefCase, faDatabase} from './icons';

import App from './views/App/index';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(brands, faUser, faBriefCase, faDatabase);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
