import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Fab as FloatingActionButtons} from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  smallsize: {
    width: 35,
    height: 35
  }
}))

export default function Fab ({...props}) {
  const classes = useStyles()
  const {children, color, disabled, ariaLabel, variant, size} = props

  return (
    <div>
      <FloatingActionButtons
        disabled={disabled}
        aria-label={ariaLabel}
        className={`${classes.fab} ${size === 'small' ? classes.smallsize : ''}`}
        color={color}
        size={size}
        variant={variant}
      >
        {children}
      </FloatingActionButtons>

    </div>
  )
}

Fab.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool
}

Fab.defaultProps = {
  variant: 'round',
  color: 'primary',
  size: 'small',
  children: '',
  disabled: false,
  ariaLabel: 'edit'
}
