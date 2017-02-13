'use strict';

/*
 * Reducers
 */

import { combineReducers } from 'redux'
import story from './story-reducer'
import comments from './comments-reducer'

export default combineReducers({
    story,
    comments
})
