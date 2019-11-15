import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const postLogin = (user) => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth()
        .post('http://localhost:5000/api/login', user)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.response.data.error }))
}

export const GET_COLOR_START = "GET_COLOR_START"
export const GET_COLOR_SUCCESS = "GET_COLOR_SUCCESS"
export const GET_COLOR_FAILURE = "GET_COLOR_FAILURE"

export const getColors = () => dispatch => {
    dispatch({ type: GET_COLOR_START })
    axiosWithAuth()
        .get('http://localhost:5000/api/colors')
        .then(res => console.log(res))
        .catch(err => console.log(err))
} 