import React from 'react'
import PropTypes from 'prop-types'
import RenderInputTypes from './RenderInputTypes'
import Button from '../Buttons'
import Drawer from '../Drawer'

const DrawerForm = ({...props}) => {
  const {
    closeDrawer, inputFields, heading, handleForm,
    handleChange, isReadOnly, getUploadedFile
  } = props

  return (
    <Drawer handleClose={closeDrawer} heading={heading}>
      {
        inputFields.map((inputField, inputIndex) => (
          <RenderInputTypes
            key={`heading_${inputIndex + 1}`}
            handleChange={handleChange}
            isReadOnly={isReadOnly}
            getUploadedFile={getUploadedFile}
            inputField={inputField}
            inputIndex={inputIndex}
          />
        ))
      }

      {
        !isReadOnly && (
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={handleForm}
          >
            Save
          </Button>
        )
      }
    </Drawer>
  )
}

DrawerForm.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  inputFields: PropTypes.array.isRequired,
  heading: PropTypes.string,
  handleForm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isReadOnly: PropTypes.bool,
  getUploadedFile: PropTypes.func.isRequired
}

DrawerForm.defaultProps = {
  heading: 'heading',
  isReadOnly: false
}

export default DrawerForm
