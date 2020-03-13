const habitsReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case 'LOADING_HABITS':
      return {
        ...state
      }
    case 'GET_HABITS':
      return {
        ...state,
        list: action.habits,
      }
    default:
      return state;
  }
}

export default habitsReducer