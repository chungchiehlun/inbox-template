const overlay = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_OVERLAY':
      return true
    case 'CLOSE_OVERLAY':
      return false
    default:
      return state
  }
}

export default overlay
