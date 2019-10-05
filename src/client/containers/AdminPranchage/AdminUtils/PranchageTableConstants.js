import React from 'react'
import {Button, Tooltip} from '@material-ui/core'
import PropTypes from 'prop-types'
//import {handleDelete} from '../../helper/commonMethods'

const PranchageTableConstants = (that, classes) => [
  {
    Header: 'Name',
    accessor: 'name',
    width: 250
  },
  {
    Header: 'Pranchage Name',
    accessor: 'pranchageName',
    width: 250
  },
  {
    Header: 'Created By',
    accessor: 'createdBy',
    width: 200
  },
  {
    Header: 'View',
    Cell: row => (
      <Button
        className={classes.tableButtons}
        variant="outlined"
        color="primary"
        onClick={() => that.handleView(row.original)}
      >
       View
      </Button>
    ),
    width: 100
  },
  {
    Header: 'Edit',
    Cell: row => (
      <Button
        className={classes.tableButtons}
        variant="outlined"
        color="primary"
        onClick={() => that.handleEdit(row.original)}
      >
       Edit
      </Button>
    ),
    width: 100
  },
  {
    Header: 'Delete',
    Cell: row => {
      const {original: {componentType, onBoardingType, id}} = row
      return (
        <Button
          className={classes.tableButtons}
          variant="outlined"
          color="secondary"
          onClick={() => {
            //handleDelete(`v1/${onBoardingType}/${componentType.toLowerCase()}/${id}`, that.getOnBoardedComponents, that.toggleLoader)
          }
          }
          disabled={row.original.status === 'DELETED'}
        >
       Delete
        </Button>
      )
    },
    width: 120
  },
  {
    Header: 'Created On',
    accessor: 'createdOn',
    width: 200
  },
  {
    Header: 'Updated On',
    accessor: 'updatedOn',
    width: 200
  }
]

export default PranchageTableConstants
