export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SET_LOGIN_USER = 'SET_LOGIN_USER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }

}

export function setLoginUser(loginUser) {
    return {
        type: SET_LOGIN_USER,
        loginUser
    }

}