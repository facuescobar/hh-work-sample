'use strict';

/*
 * Routes
 */

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from '../components/layout'
import StoryPage from '../components/story-page'

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={StoryPage}/>
    </Route>
);

export default routes;
