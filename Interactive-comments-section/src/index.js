import React from 'react'
import { createRoot } from 'react-dom/client';

import App from './App';
import data from '../data.json';
import * as storage from './utils/local-storage';

/**
 * Load the initial data into local storage
 */
(() => {
    storage.setItem('data', data)
})();

const root = createRoot(document.getElementById('app'));

root.render(<App />);
