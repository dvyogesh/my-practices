import React, {Component} from 'react'
import {cloneDeep} from 'lodash'
import RenderInputTypes from '../../../components/Forms/RenderInputTypes'
import Button from '../../../components/Buttons'
import INPUT_CONSTANTS from './ProfileConstants'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputFields: cloneDeep(INPUT_CONSTANTS)
    }
  }

  handleChange = (index) => event => {
    const {inputFields} = this.state
    inputFields[index].value = event.target.value
    this.setState({inputFields})
  };

  handleForm = () => {}

  render () {
    const {inputFields} = this.state
    return (
      <div className="profile-main card-white text-left">
        Profile Information
        {
          inputFields.map((inputField, inputIndex) => (
            <RenderInputTypes
              key={`heading_${inputIndex + 1}`}
              handleChange={this.handleChange}
              inputField={inputField}
              inputIndex={inputIndex}
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
      </div>
    )
  }
}

export default Profile
