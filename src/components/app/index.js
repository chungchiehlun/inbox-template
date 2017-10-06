import React from 'react'
import Toolbar from '../toolbar'
import Sidebar from '../sidebar'
import Inbox from '../inbox'
import Message from '../message'
import Overlay from '../overlay'
import './index.css'

const App = () => (
  <div styleName="window">
    <Toolbar />
    <div styleName="content">
      <Overlay />
      <Sidebar />
      <Inbox />
      <Message />
    </div>
  </div>
)

export default App
