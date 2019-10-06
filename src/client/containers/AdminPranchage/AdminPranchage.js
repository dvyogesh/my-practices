import React, {Component} from 'react'
import {cloneDeep} from 'lodash'
import ReactTable from 'react-table'
import {Button, Container} from '@material-ui/core'
import DrawerForm from '../../components/Forms/DrawerForm'
import pranchageTableConstants from './AdminUtils/AdminPranchageTableConstants'
import mapData from './AdminUtils/helper'
import './style.scss'
import ADMIN_CONSTANTS from './AdminUtils/AdminConstants'
import ADMIN_MOCK_DATA from './AdminUtils/mockData'

class AdminPranchage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputFields: cloneDeep(ADMIN_CONSTANTS.adminPranchage),
      pranchageList: cloneDeep(ADMIN_MOCK_DATA.pranchageList),
      showDrawer: false,
      isReadOnly: false
    }
    this.pranchageTableConstants = pranchageTableConstants(this)
  }

  handleCreateBtnClick = () => this.setState({showDrawer: true})
  closeDrawer = () => {
    this.setState({
      showDrawer: false,
      inputFields: cloneDeep(ADMIN_CONSTANTS.adminPranchage),
      isReadOnly: false
    })
  }

  handleChange = (index) => event => {
    const {inputFields} = this.state
    inputFields[index].value = event.target.value
    this.setState({inputFields})
  };

  handleView = (row) => {
    this.setState({
      showDrawer: true,
      isReadOnly: true,
      inputFields: mapData(row, cloneDeep(ADMIN_CONSTANTS.adminPranchage))
    })
  }

  handleEdit = (row) => {
    this.setState({
      showDrawer: true,
      isReadOnly: false,
      inputFields: mapData(row, cloneDeep(ADMIN_CONSTANTS.adminPranchage))
    })
  }

  handleForm = () => {}

  render () {
    const {inputFields, showDrawer, pranchageList, isReadOnly} = this.state
    return (
      <Container maxWidth="xl" className="admin-pranchage-main">
        <div className="text-left">
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={this.handleCreateBtnClick}
          >
            Create Pranchage
          </Button>
          <div className="list-of-pranchage">
            {
              pranchageList && (
                <ReactTable
                  data={pranchageList}
                  noDataText="No records found!"
                  className="-highlight"
                  columns={this.pranchageTableConstants}
                  defaultPageSize={pranchageList.length > 5 ? 5 : pranchageList.length}//{pranchageList.length === 0 ? 5 : pranchageList.length}
                  pageText={`Total Count : ${pranchageList.length} Page: `}
                  //loading={loading}
                  manual
                />
              )
            }
          </div>
        </div>
        {
          showDrawer && (
            <DrawerForm
              closeDrawer={this.closeDrawer}
              inputFields={inputFields}
              heading="Create Pranchage"
              handleForm={this.handleForm}
              handleChange={this.handleChange}
              submitBtnTitle="save"
              isReadOnly={isReadOnly}
            />
          )
        }
      </Container>
    )
  }
}

export default AdminPranchage
