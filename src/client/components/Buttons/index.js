import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    //padding: 0
  }
}))

export default function Buttons ({...props}) {
  const {variant, color, children, size, onClick} = props
  const classes = useStyles()

  return (
    <Button variant={variant} color={color} size={size} className={classes.button} onClick={onClick}>
      {children}
    </Button>
  )
}

Buttons.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
}

Buttons.defaultProps = {
  variant: 'outlined',
  color: 'primary',
  size: 'small',
  children: '',
  onClick: () => {}
}
