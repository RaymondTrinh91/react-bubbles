import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions'

const initialLoginState = {
    loggedIn: false,
    userData: null,
    errors: null
}

export const loginReducer = (state = initialLoginState, { type, payload }) => {
    switch (type) {
        case LOGIN_START:
            return {
                ...state,
                loggedIn: false,
                userData: null,
                errors: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                userData: payload,
                errors: null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                userData: null,
                errors: payload
            }
        default:
            return state
    }
}