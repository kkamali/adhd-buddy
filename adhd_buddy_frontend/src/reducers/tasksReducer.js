const tasksReducer = (state = { tasks: [], hobbies: [], habits: [], loading: false }, action) => {
  switch (action.type) {
    case 'LOADING_TASKS':
      return {
        ...state,
        tasks: [...state.tasks],
        loading: true
      }
    case 'GET_TASKS':
      return {
        ...state,
        tasks: action.tasks,
        loading: false
      }
    default:
      return state;
  }
}

export default tasksReducer