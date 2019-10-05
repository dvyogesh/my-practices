import React, { Component } from 'react';
import {cloneDeep} from 'lodash'
import ReactTable from 'react-table'
import {Grid, Button, Container} from '@material-ui/core'
import EmptyCard from '../../components/Cards/EmptyCard'
import CustomTextField from '../../components/CustomTextField'
import Drawer from '../../components/Drawer'
import pranchageTableConstants from './AdminUtils/pranchageTableConstants'
import ADMIN_CONSTANTS from './AdminUtils/AdminConstants'
import ADMIN_MOCK_DATA from './AdminUtils/mockData'

import './AdminPranchage.css'

class AdminPranchage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputFields: cloneDeep(ADMIN_CONSTANTS['adminPranchage']),
      pranchageList: cloneDeep(ADMIN_MOCK_DATA['pranchageList']),
      showDrawer: false
    }
    console.log(ADMIN_MOCK_DATA)
  }


  handleCreateBtnClick = () => this.setState({showDrawer: true})
  closeDrawer = () => this.setState({showDrawer: false})

  handleChange = (index) => event => {
     const {inputFields} = this.state
     inputFields[index].value = event.target.value
     this.setState({inputFields})
   };

  handleForm = () => {}

  render(){
    const {inputFields, showDrawer, pranchageList}=this.state
    return (
    <Container maxWidth="xl">

      <div className="text-left">
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={this.handleCreateBtnClick}
        >
          Create Pranchage
        </Button>
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
        </div>
      {
          showDrawer && (
            <Drawer handleClose={this.closeDrawer} heading="Create Pranchage">

                {
                  inputFields.map((inputField,inputIndex)=>(
                    <CustomTextField
                      type={inputField.type}
                      value={inputField.value}
                      label={inputField.label}
                      multiline={inputField.multiline}
                      onChange={this.handleChange(inputIndex)}
                    />
                  ))
                }
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={this.handleForm}
                >
                  Save
                </Button>
            </Drawer>
          )
        }
</Container>
      )
  }

}

export default AdminPranchage;
