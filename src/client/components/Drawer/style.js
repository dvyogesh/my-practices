const customDrawerStyle = {
  header: {
    color: '#6D6E71',
    position: 'fixed',
    fontSize: 21,
    background: 'white',
    fontWeight: 600,
    zIndex: 1000,
    width: 'inherit',
    padding: '5px 0px',
    borderBottom: '1px solid #e6e7e8'
  },
  heading: {
    display: 'inline-block'
  },
  children: {
    padding: '70px 15px 30px 15px'
  },
  close: {
    float: 'right',
    color: '#6D6E71',
    cursor: 'pointer',
    border: 0,
    '&:hover': {
      background: 'grey'
    }
  }
}

export default customDrawerStyle
