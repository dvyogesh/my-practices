import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Grid} from '@material-ui/core'
import {Person} from '@material-ui/icons'

import './accountStyle.scss'

class Account extends Component {
  render () {
    const {children} = this.props
    return (
      <div className="account-main">
        <Grid container className="account-warpper">
          <Grid item sm={3} className="account-left-section">
            <div className="profile-name-pic card-white">
              <Grid container>
                <Grid item sm={3} className="account-pic">
                  <Person />
                </Grid>
                <Grid item sm={9} className="account-name text-left">
                  <p className="hello">Hello,</p>
                  <p className="hello-Name">Yourska Na</p>
                </Grid>
              </Grid>
            </div>
            <div className="account-option-panel card-white">
              <ul className="option-list text-left">
                <li><Link to="/account">Profile Information</Link></li>
                <li><Link to="/account/orders">My Orders</Link></li>
                <li><Link to="/account/addresses">Addresses</Link></li>
                <li><Link to="/account">My Doctors</Link></li>
              </ul>
            </div>
          </Grid>
          <Grid item sm={9}>
            <div>
              {children}
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Account.propTypes = {
  children: PropTypes.node.isRequired
}

export default Account
