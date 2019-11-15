import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux"
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers/index'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    rootElement);
