import React, {Component} from 'react'
import {Add, Edit, Delete} from '@material-ui/icons'
import {Grid} from '@material-ui/core'
import Fab from '../../../components/Fab/Fab'
import ADDRESSES_MOCK_DATA from './mockDataAddress'

class Addresses extends Component {
  constructor (props) {
    super(props)
    this.state = {
      addresses: []
    }
  }

  componentDidMount () {
    this.setState({addresses: ADDRESSES_MOCK_DATA})
  }

  render () {
    const {addresses} = this.state
    return (
      <div className="addresses-main card-white text-left">
        Manage Addresses
        <div className="small-fab">
          <Fab size="small" color="primary" ariaLabel="add">
            <Add />
          </Fab>
        </div>
        {
          addresses.map((address, addressIndex) => (
            <Grid container className="address-panel" key={`address_${addressIndex + 1}`}>
              <Grid item sm={10}>
                <div className="address-type">
                  <span>{address.type}</span>
                </div>
                <div className="address-name-phone">
                  {address.name}
                  {' '}
                  {address.phoneNumber}
                </div>
                <div className="address-detail">
                  <p>{address.address}</p>
                  <p>
                    {address.city}
                    {address.state}
                    {address.pinCode}
                  </p>
                </div>
              </Grid>
              <Grid item sm={2} className="small-fab">
                <Fab size="small" variant="round" color="primary" ariaLabel="edit">
                  <Edit />
                </Fab>
                <Fab size="small" variant="round" color="secondary" ariaLabel="delete">
                  <Delete />
                </Fab>
              </Grid>
            </Grid>
          ))
        }
      </div>
    )
  }
}

export default Addresses
