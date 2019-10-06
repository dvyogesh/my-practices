import React from 'react'
import {Tooltip} from '@material-ui/core'
import Button from '../../../components/Buttons'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
//import {handleDelete} from '../../helper/commonMethods'

const PranchageTableConstants = (that) =>  [
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
    style: {padding: '0px'},
    Cell: row => (
      <Button
        variant="outlined"
        color="primary"
        size="small"
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
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => that.handleEdit(row.original)}
      >
       Edit
      </Button>
    ),
    style: {padding: '0px'},
    width: 100
  },
  {
    Header: 'Delete',
    Cell: row => {
      const {original: {componentType, onBoardingType, id}} = row
      return (
        <Button
          variant="outlined"
          color="secondary"
          size="small"
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
    style: {padding: '0px'},
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
