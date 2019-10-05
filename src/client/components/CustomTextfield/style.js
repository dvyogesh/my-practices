const styles = theme => ({
  textFieldInputId: {
    background: '#fff',
    margin: '5px 0px',
    paddingTop: 2
  },
  label: {
    paddingLeft: 10,
    [theme.breakpoints.down('xs')]: {
      fontSize: 15
    }
  },
  focusedLabel: {
    paddingLeft: 10,
    paddingTop: 10
  },
  errorText: {
    color: '#f44336',
    marginLeft: 5
  }
})

export default styles
