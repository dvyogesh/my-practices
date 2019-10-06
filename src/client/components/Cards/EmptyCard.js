import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import {CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default function EmptyCard ({...props}) {
  const classes = useStyles()
  const {children} = props
  return (
    <Card className={classes.card}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

EmptyCard.propTypes = {
  children: PropTypes.node.isRequired
}
