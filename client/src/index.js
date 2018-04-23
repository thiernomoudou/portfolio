import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';

import './index.css';
import './styles/main.css';
import {brands, faUser, faBriefCase, faDatabase, faTasks} from './icons';

import Root from './views/Root';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(brands, faUser, faBriefCase, faDatabase, faTasks);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
