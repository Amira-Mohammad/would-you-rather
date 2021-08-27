import { RECEIVE_USERS, SET_LOGIN_USER } from '../Actions/Users';

export default function users(state = {}, action) {

    switch (action.type) {

        case RECEIVE_USERS:
            return {
                ...state,
                users: { ...action.users }
            }
        case SET_LOGIN_USER:

            return {
                ...state,
                loginUser: action.loginUser
            }
        default:
            return state
    }
}