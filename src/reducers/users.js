import {RECEIVED_USERS} from '../actions/user'

export default function users(state={},action){
    switch(action.type){
        case RECEIVED_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}
