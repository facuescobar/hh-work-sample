'use strict';

/*
 * Comments Component
 */

import React from 'react'
import Moment from 'moment'

export default class Comment extends React.Component {
    constructor(){
        super()
        this.state = {
            collapsed: true
        }
    }
    toggleText(){
        this.setState({ collapsed: !this.state.collapsed })
    }
    render(){
        const { comment } = this.props;
        const storyClasses= this.state.collapsed ? 'collapsed' : '';
        return (
            <div class={`story__comment ${storyClasses}`} onClick={this.toggleText.bind(this)}>
                <div class="comment__info">
                    <span class="comment__author"><i class="fa fa-user"/>{comment.by}</span>
                    <span class="comment__time"><i class="fa fa-clock-o"/>{Moment.unix(comment.time).format('MMM-D-YYYY HH:mm')}</span>
                </div>
                <div class="comment__text" >
                    <div class="text__content" dangerouslySetInnerHTML={ { __html: comment.text } }></div>
                </div>
            </div>
        )
    }
}
