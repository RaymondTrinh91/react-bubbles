import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { colorReducer } from './colorReducers'

export default combineReducers ({
    loginReducer,
    colorReducer
})