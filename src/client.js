import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from 'components/app'
import {createStore, combineReducers} from 'redux'

const overlay = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_OVERLAY':
      return true
    case 'CLOSE_OVERLAY':
      return false
    default:
      return state
  }
}

let store = createStore(combineReducers({ overlay }))

render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('app'));
