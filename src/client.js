import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from 'components/app'
import { createStore } from 'redux'
import reducer from 'redux/reducer'

let store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
)
