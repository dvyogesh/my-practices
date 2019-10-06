import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from './containers/Header/Header'
import 'react-table/react-table.css'
import './components/Table/react-table.scss'
import './app.css'

class App extends Component {
  render () {
    const {children} = this.props
    return (
      <div>
        <Header />
        {children}
        <div>
          footer
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
