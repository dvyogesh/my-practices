import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {Phone} from '@material-ui/icons'

class HeaderFirstSection extends Component {
  render () {
    return (
      <div className="header-first-section">
        <Grid container>
          <Grid item md={6} className="text-left header-fist-left">
            <Link to="#">Download the App</Link>
            <Link to="#">0ffers</Link>
          </Grid>
          <Grid item md={6} className="text-right header-fist-right">
            <ul>
              <li><Link to="#">List your Practice  </Link></li>
              <li><Link to="#"> Need Help?   </Link></li>
              <li>
                <Link to="#">
                  <Phone className="phon-icon" />
                  1800 208 5454
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default HeaderFirstSection
