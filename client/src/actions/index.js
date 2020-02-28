import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const postLogin = (user) => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth()
        .post('http://localhost:5000/api/login', user)
        .then(res => {
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
        .then(res => dispatch({ type: GET_COLOR_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_COLOR_FAILURE, payload: err.response.data.error }))
}

export const PUT_COLOR_START = "PUT_COLOR_START"
export const PUT_COLOR_SUCCESS = "PUT_COLOR_SUCCESS"
export const PUT_COLOR_FAILURE = "PUT_COLOR_FAILURE"

export const updateColorCall = (id, newColor) => dispatch => {
    dispatch({ type: PUT_COLOR_START })
    axiosWithAuth()
        .put(`http://localhost:5000/api/colors/${id}`, newColor)
        .then(res => {
            console.log('put req', res)
            dispatch({ type: PUT_COLOR_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: PUT_COLOR_FAILURE, payload: err.response.data.error }))
}

export const DELETE_COLOR_START = "DELETE_COLOR_START"
export const DELETE_COLOR_SUCCESS = "DELETE_COLOR_SUCCESS"
export const DELETE_COLOR_FAILURE = "DELETE_COLOR_FAILURE"

export const deleteColorCall = (color) => dispatch => {
    dispatch({ type: DELETE_COLOR_START })
    axiosWithAuth()
        .delete(`http://localhost:5000/api/colors/${color.id}`)
        .then(res => {
            console.log('put req', res)
            dispatch({ type: DELETE_COLOR_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: DELETE_COLOR_FAILURE, payload: err.response }))
}

export const POST_COLOR_START = "POST_COLOR_START"
export const POST_COLOR_SUCCESS = "POST_COLOR_SUCCESS"
export const POST_COLOR_FAILURE = "POST_COLOR_FAILURE"

export const postNewColor = (newColor) => dispatch => {
    dispatch({ type: POST_COLOR_START })
    axiosWithAuth()
        .post('http://localhost:5000/api/colors', newColor)
        .then(res => dispatch({ type: POST_COLOR_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_COLOR_FAILURE, payload: err.response }))
}