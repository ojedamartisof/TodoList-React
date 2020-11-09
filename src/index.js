import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

//Style
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
import './index.css';

//Javascript
import 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
