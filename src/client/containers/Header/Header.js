import React, {Component} from 'react'
import HeaderFirstSection from './HeaderFirstSection'
import HeaderSecondSection from './HeaderSecondSection'
import './headerStyle.scss'

class Header extends Component {
  render () {
    return (
      <header className="header-main">
        <HeaderFirstSection />
        <HeaderSecondSection />
      </header>
    )
  }
}

export default Header
