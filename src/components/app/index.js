import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'
import Toolbar from 'components/toolbar'
import Sidebar from 'components/sidebar'
import Inbox from 'components/inbox'
import Message from 'components/message'
import Overlay from 'components/overlay'
import 'stylesheets/basic.css'


@CSSModules(styles)
class App extends Component {
  render() {
    return (
      <div styleName="window">
        <Toolbar />
        <div styleName="content">
          <Overlay/>
          <Sidebar/>
          <Inbox/>
          <Message/>
        </div>
      </div>
    );
  }
}

export default App
