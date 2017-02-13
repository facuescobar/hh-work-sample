'use strict';

/*
 * Story Reducer
 */

export default function reducer(state = {
    data: null,
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case "FETCH_STORY":
            {
                return {
                    ...state,
                    fetching: true
                }
            }
            break;
        case "FETCH_STORY_REJECTED":
            {
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
            }
            break;
        case "FETCH_STORY_FULFILLED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    data: action.payload
                }
            }
            break;
    }
    return state
}
