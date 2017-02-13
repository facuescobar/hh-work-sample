'use strict';

/*
 * Store
 * @initialState: default settings to initialize the store
 */

import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducers'

export default function configureStore( initialState = {} ) {
    const middleware = applyMiddleware(promise(), thunk, logger())

    return createStore(
        reducer,
        initialState,
        middleware
    );
}
