'use strict';

/*
 * Story Actions
 */

import axios from 'axios'

/*
 * fetchStory() : fetch the story from API
 * @storyID: id of the story to fetch
 */
export function fetchStory( storyID = 0) {
    const url = `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`;
    return function(dispatch) {
        axios.get(url)
            .then(function (response) {
                dispatch({type: "FETCH_STORY_FULFILLED", payload: response.data});
            })
            .catch(function (error) {
                dispatch({type: "FETCH_STORY_REJECTED", payload: error})
            });
    }
}
