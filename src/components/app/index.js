import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'
import Toolbar from 'components/toolbar'
import Sidebar from 'components/sidebar'
import Inbox from 'components/inbox'
import Message from 'components/message'
import Overlay from 'components/overlay'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'
import 'stylesheets/basic.css'

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

export default CSSModules(App, styles)
