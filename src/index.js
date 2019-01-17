import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import paginainicial from './paginainicial/paginainicial';

ReactDOM.render(paginainicial, document.getElementById('app'));

serviceWorker.unregister();
