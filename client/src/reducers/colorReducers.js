import {
    GET_COLOR_START,
    GET_COLOR_SUCCESS,
    GET_COLOR_FAILURE,
    POST_COLOR_START,
    POST_COLOR_SUCCESS,
    POST_COLOR_FAILURE,
    PUT_COLOR_START,
    PUT_COLOR_SUCCESS,
    PUT_COLOR_FAILURE,
    DELETE_COLOR_START,
    DELETE_COLOR_SUCCESS,
    DELETE_COLOR_FAILURE
} from '../actions'

const initialColorState = {
    isLoading: false,
    colorData: [],
    errors: null
}

export const colorReducer = (state = initialColorState, { type, payload }) => {
    switch (type) {
        case GET_COLOR_START:
            return {
                ...state,
                isLoading: true,
                colorData: [],
                errors: null
            }
        case GET_COLOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                colorData: payload,
                errors: null
            }
        case GET_COLOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                colorData: [],
                errors: payload
            }
        case PUT_COLOR_START:
            return {
                ...state,
                isLoading: true,
                errors: null
            }
        case PUT_COLOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errors: null
            }
        case PUT_COLOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                colorData: [],
                errors: payload
            }
        case DELETE_COLOR_START:
            return {
                ...state,
                errors: null
            }
        case DELETE_COLOR_SUCCESS:
            const { colorData } = state;
            const newColorData = colorData.filter(color => {
                return color.id !== payload });
            return {
                ...state,
                colorData: [...newColorData],
                errors: null
            }
        case DELETE_COLOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case POST_COLOR_START:
            return {
                ...state,
                isLoading: true,
                colorData: [],
                errors: null
            }
        case POST_COLOR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                colorData: payload,
                errors: null
            }
        case POST_COLOR_FAILURE:
            return {
                ...state,
                isLoading: false,
                colorData: [],
                errors: payload
            }
        default:
            return state
    }
}
