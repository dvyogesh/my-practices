export default function mapData (selectedData, inputs) {
  //const inputs = getInputs(selectedTech, inputValues)

  Object.keys(selectedData).forEach((selected) => {
    inputs.forEach((input, index) => {
      if (input.name === selected) {
        selectedData[selected] ? inputs[index].value = selectedData[selected] : inputs[index].value = ''
      }
    })
  })

  return inputs
}
