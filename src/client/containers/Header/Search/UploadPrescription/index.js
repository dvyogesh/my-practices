import React, {Component} from 'react'
import {CloudUpload} from '@material-ui/icons'
import {cloneDeep} from 'lodash'
import DrawerForm from '../../../../components/Forms/DrawerForm'
import PRESCRIPTION_CONSTANTS from './helperUploadPrescription'

class UploadPrescription extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputFields: cloneDeep(PRESCRIPTION_CONSTANTS.orderNowForm),
      showDrawer: false
    }
  }

  uploadPrescriptioneBtnClick = () => this.setState({showDrawer: true})

  handleClose = () => {
    this.setState({
      showDrawer: false,
      inputFields: cloneDeep(PRESCRIPTION_CONSTANTS.orderNowForm)
    })
  }

  handleSubmit = () => {

  }

  handleChange = (index) => event => {
    const {inputFields} = this.state
    inputFields[index].value = event.target.value
    this.setState({inputFields})
  };

  handleForm = () => {

  }

  getUploadedFile = (files, index) => {
    const {inputFields} = this.state
    inputFields[index].value = files.map(
      file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )
    this.setState({inputFields})
  }

  render () {
    const {inputFields, showDrawer} = this.state
    return (
      <div className="upload-prescription text-center">
        <p role="presentation" onClick={this.uploadPrescriptioneBtnClick}>
          Upload Prescription
          <CloudUpload className="prescription-upload-icon" />
        </p>
        {
          showDrawer && (
            <DrawerForm
              handleClose={this.handleClose}
              closeDrawer={this.handleClose}
              inputFields={inputFields}
              heading="Order Now"
              handleForm={this.handleForm}
              handleChange={this.handleChange}
              submitBtnTitle="Order Now"
              getUploadedFile={this.getUploadedFile}
            />
          )
        }
      </div>
    )
  }
}

export default UploadPrescription
