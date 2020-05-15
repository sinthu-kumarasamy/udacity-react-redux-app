import {RECEIVED_TWEETS} from '../actions/tweets'

export default function tweets(state={},action){
    switch(action.type){
        case RECEIVED_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        default:
            return state
    }
}