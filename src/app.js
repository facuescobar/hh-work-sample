'use strict';

/*
 * Client APP
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import configureStore from './store'

const app = document.getElementById('main-app')
const store = configureStore();

// Render the client application to the DOM
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , app);
