import React, {Component} from 'react'
import {Room} from '@material-ui/icons'
import {Grid} from '@material-ui/core'
import ORDERS_MOCK_DATA from './mockDataOrders'
import Button from '../../../components/Buttons'

class Orders extends Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: []
    }
  }

  componentDidMount () {
    this.setState({orders: ORDERS_MOCK_DATA.orders})
  }

  render () {
    const {orders} = this.state
    return (
      <div className="orders-main card-white text-left">
        My Orders
        {
          orders.map((order, orderIndex) => (
            <div className="order-panel" key={`order_${orderIndex + 1}`}>
              <div className="order-panel-well">
                <Grid container>
                  <Grid sm={10} item className="order-id text-left">
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                    >
                      OD116032931495889000
                    </Button>
                  </Grid>
                  <Grid sm={2} item className="order-trck">
                    <div className="track-btn">
                      <Room />
                      { ' '}
                      Track
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="order-detail">
                <Grid container>
                  <Grid item sm={2} className="prescription-thumb">
                    <div className="thumbnail text-center flex">
                      <img src={order.prescriptionImgUrl} alt="pimg" />
                    </div>
                  </Grid>
                  <Grid item sm={7}>
                    {order.orderedDate}
                  </Grid>
                  <Grid item sm={3}>
                    {order.orderedDate}
                  </Grid>
                </Grid>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Orders
