import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './config';
import './i18n';
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Suspense fallback="loading">
            <App />
        </Suspense>
    </React.StrictMode>
)
