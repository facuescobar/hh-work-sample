'use strict';

/*
 * Comments Reducer
 */

export default function reducer(state = {
    data: null,
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case "FETCH_COMMENTS":
            {
                return {
                    ...state,
                    fetching: true
                }
            }
            break;
        case "FETCH_COMMENTS_REJECTED":
            {
                return {
                    ...state,
                    fetching: false,
                    error: action.payload
                }
            }
            break;
        case "FETCH_COMMENTS_FULFILLED":
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
