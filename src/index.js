import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import makeStore from './Reducers/reducer'
import App from './Container/App'

let store = createStore(makeStore);
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );

