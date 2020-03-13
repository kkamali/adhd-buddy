const habitsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOADING_HABITS':
      return {
        ...state,
        habits: [...state.habits],
        loading: true
      }
    case 'GET_HABITS':
      return {
        ...state,
        habits: action.habits,
        loading: false
      }
    default:
      return state;
  }
}

export default habitsReducer