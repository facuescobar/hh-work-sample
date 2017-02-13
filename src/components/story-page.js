'use strict';

/*
 * Story Page Component
 */

import React from 'react'
import { connect } from 'react-redux'
import { fetchStory } from '../actions/story-actions.js'
import Story from  './story'

@connect((store) => {
    return {
        story: store.story.data,
    }
})

export default class StoryPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchStory(3410773));
    }

    storyLoader(){
        return (
            <div class="loader story__loading">
                <label>Loading Story</label>
                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"/>
            </div>
        )
    }

    render(){
        const { story, comments } = this.props;

        return (
            <div class="story-page">
                { story ? <Story story={story} /> : this.storyLoader() }
            </div>
        )
    }
}
