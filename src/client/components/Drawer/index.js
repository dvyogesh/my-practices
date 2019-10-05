import React from 'react'
import PropTypes from 'prop-types'
import {Drawer} from '@material-ui/core'
import Clear from '@material-ui/icons/Clear'
import withStyles from '@material-ui/core/styles/withStyles'
import Style from './style'

function CustomDrawer ({
  classes, children, handleClose, heading = '', width = 500
}) {
  return (
    <Drawer anchor="right" open onClose={handleClose}>
      <div style={{width}}>
        <div className={classes.header}>
          <p className={classes.heading}>{heading}</p>
          <button className={classes.close} onClick={handleClose} color="primary"><Clear /></button>
        </div>
        <div className={classes.children}>
          {children}
        </div>
      </div>
    </Drawer>
  )
}

CustomDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
  width: PropTypes.number
}

export default withStyles(Style)(CustomDrawer)
