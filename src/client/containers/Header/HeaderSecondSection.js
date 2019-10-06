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
                src="data:image/png;base64,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"
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
