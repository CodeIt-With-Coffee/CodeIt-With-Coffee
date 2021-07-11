import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorkerRegistration';
import AppRoutes from './routes';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>,
    document.getElementById('root'),
);
serviceWorker.register();
reportWebVitals();
