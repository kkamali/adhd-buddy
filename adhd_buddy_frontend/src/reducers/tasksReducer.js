const tasksReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case 'LOADING_TASKS':
      return {
        ...state
      }
    case 'GET_TASKS':
      return {
        ...state,
        list: action.tasks,
      }
    default:
      return state;
  }
}

export default tasksReducer