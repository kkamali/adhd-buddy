const hobbiesReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case 'LOADING_HOBBIES':
      return {
        ...state
      }
    case 'GET_HOBBIES':
      return {
        ...state,
        list: action.hobbies,
      }
    default:
      return state;
  }
}

export default hobbiesReducer