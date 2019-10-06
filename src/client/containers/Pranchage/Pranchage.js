import React, {Component} from 'react'
import {cloneDeep} from 'lodash'
import {Grid, Button, Container} from '@material-ui/core'
import ImgMediaCard from '../../components/Cards/ImgMediaCard'
import DrawerForm from '../../components/Forms/DrawerForm'
import pranchageTableConstants from './PranchageUtils/PranchageTableConstants'
import {mapData} from './PranchageUtils/helper'
import PRANCHAGE_CONSTANTS from './PranchageUtils/PranchageConstants'
import PRANCHAGE_MOCK_DATA from './PranchageUtils/mockData'

import './pranchageStyle.scss'

class Pranchage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputFields: cloneDeep(PRANCHAGE_CONSTANTS.patient),
      patientList: cloneDeep(PRANCHAGE_MOCK_DATA.patientList),
      showDrawer: false,
      isReadOnly: false
    }
    this.pranchageTableConstants = pranchageTableConstants(this)
  }

  handleCreateBtnClick = () => this.setState({showDrawer: true})
  closeDrawer = () => {
    this.setState({
      showDrawer: false,
      inputFields: cloneDeep(PRANCHAGE_CONSTANTS.patient),
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
      inputFields: mapData(row, cloneDeep(PRANCHAGE_CONSTANTS.patient))
    })
  }

  handleEdit = (row) => {
    this.setState({
      showDrawer: true,
      isReadOnly: false,
      inputFields: mapData(row, cloneDeep(PRANCHAGE_CONSTANTS.patient))
    })
  }

  handleForm = () => {}

  render () {
    const {inputFields, showDrawer, patientList, isReadOnly} = this.state
    return (
      <Container maxWidth="xl" className="pranchage-main">
        <div className="text-left">
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={this.handleCreateBtnClick}
          >
            Create Patient
          </Button>
          <Grid container>
            <Grid item sm={8}>
              <ul className="list-of-patient">
                {
                  patientList &&
                    patientList.map((patient, patientIndex) => (
                      <li
                        key={`patientList${patientIndex + 1}`}
                        className="list-item"
                      >
                        <ImgMediaCard
                          name={patient.name}
                          profileUrl={patient.profileUrl}
                          littleAbout={patient.littleAbout}
                        />

                      </li>
                    ))
                }
              </ul>
            </Grid>
            <Grid item sm={4}>
              box--
            </Grid>
          </Grid>
        </div>
        {
          showDrawer && (
            <DrawerForm
              closeDrawer={this.closeDrawer}
              inputFields={inputFields}
              heading="Create patient"
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

export default Pranchage
