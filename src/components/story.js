'use strict';

/*
 * Story Component
 */

import React from 'react'
import Moment from 'moment'
import Comment from './comment'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/comments-actions.js'

@connect((store) => {
    return {
        comments: store.comments.data
    }
})

export default class Story extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchComments(this.props.story.kids));
    }

    commentsLoader(){
        return (
            <div class="loader comments__loader">
                <label>Loading Comments</label>
                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"/>
            </div>
        );
    }

    render(){
        const { story, comments } = this.props;
        let DOMComments;

        if (comments)
            DOMComments= comments.map((comment) => <Comment key={comment.id} comment={comment}/>);

        return (
            <div class="story">
                <div class="story__head">
                    <div class="story__title">{story.title}</div>
                    <div class="story__info">
                        <span class="story__score">{story.score}</span>
                        <span class="story__author">{story.by}</span>
                        <span class="story__time">{Moment(story.time).format('MMMM Do YYYY HH:mm')}</span>
                        <span class="story__counter"><i class="fa fa-comment-o"/>{story.kids.length}</span>
                    </div>
                    <div class="story__url"><i class="fa fa-share-square-o"/>{story.url}</div>
                </div>
                <div class="story__comments">
                    { DOMComments || this.commentsLoader()}
                </div>
            </div>
        )
    }
}
