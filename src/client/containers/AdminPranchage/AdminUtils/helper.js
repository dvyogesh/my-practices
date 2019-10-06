export default function mapData (selectedData, inputs) {
  //const inputs = getInputs(selectedTech, inputValues)
  const inpt = inputs
  Object.keys(selectedData).forEach((selected) => {
    inputs.forEach((input, index) => {
      if (input.name === selected) {
        selectedData[selected] ? inpt[index].value = selectedData[selected] : inpt[index].value = ''
      }
    })
  })

  return inpt
}
