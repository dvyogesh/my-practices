import React, {Component} from 'react'
import {Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'
import Search from './Search/Search'

class HeaderSecondSection extends Component {
  render () {
    return (
      <div className="header-second-section">
        <Grid container>
          <Grid item md={2} className="text-left header-fist-left">
            <Link to="#">
              <img
                alt="log"
                src="../../../../public/logo.jpg"
              />
            </Link>
          </Grid>
          <Grid item md={8} className="text-right header-second-mid">
            <Search />
          </Grid>
          <Grid item md={2} className="text-right header-second-right">
            <ul>
              <li><Link to="#">Login /</Link></li>
              <li><Link to="#"> Sign Up   </Link></li>
            </ul>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default HeaderSecondSection
