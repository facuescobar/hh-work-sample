'use strict';

/*
 * Comments Actions
 */

import axios from 'axios'

/*
 * fetchComments() : fetch story comments from API
 * @commentIDS: array with comment IDs to fetch
 */
export function fetchComments(commentIDS = []) { //TODO: remove this//it doesn't need a default value
    const requests = commentIDS.map((commentID) => axios.get(`https://hacker-news.firebaseio.com/v0/item/${commentID}.json`));

    return function(dispatch) {
        axios.all(requests)
            .then(function(response) {
                const data = response.map((comment) => comment.data);
                dispatch({type: "FETCH_COMMENTS_FULFILLED", payload: data});
            }).catch(function(error) {
                dispatch({type: "FETCH_COMMENTS_REJECTED", payload: error})
            });
        }
}
