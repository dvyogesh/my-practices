import React from 'react'
import PropTypes from 'prop-types'
import CustomTextField from '../CustomTextField'
import UploadFile from '../DropZone'

const RenderInputTypes = ({...props}) => {
  const {inputField, handleChange, isReadOnly, getUploadedFile, inputIndex} = props

  return (
    <React.Fragment>
      {
        inputField.type === 'text' && (
          <CustomTextField
            id={`heading_${inputIndex + 1}`}
            type={inputField.type}
            value={inputField.value}
            label={inputField.label}
            multiline={inputField.multiline}
            onChange={handleChange(inputIndex)}
            disabled={isReadOnly}
          />
        )
      }

      {
        inputField.type === 'file' && (
          <UploadFile
            id={`inputIds_file_${inputField.name}_${inputIndex}`}
            files={inputField.value}
            addFile={
              (file) => {
                getUploadedFile(file, inputIndex)
              }
            }
            // templateLink={inputValues[inputIndex].files[innerIndex].downloadUrl}
            // disabled={!isEmpty(inputValues[index].files[innerIndex].downloadUrl) || !isEmpty(input.files[innerIndex].file)}
          />
        )
      }
    </React.Fragment>
  )
}

RenderInputTypes.propTypes = {
  inputField: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  isReadOnly: PropTypes.bool,
  inputIndex: PropTypes.number.isRequired,
  getUploadedFile: PropTypes.func
}

RenderInputTypes.defaultProps = {
  isReadOnly: false,
  getUploadedFile: () => {}
}

export default RenderInputTypes
