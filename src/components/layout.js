'use strict';

/*
 * Layout Component
 */

import React from 'react'
import '../css/style.scss'

export default class LayoutPage extends React.Component {
    render(){
        return (
            <div class="all-content-wrapper">
                {React.cloneElement(this.props.children)}
            </div>
        )
    }
}
