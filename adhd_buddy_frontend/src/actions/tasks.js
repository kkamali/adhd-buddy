export const fetchTasks = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TASKS' })
    fetch('http://localhost:3000/tasks').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_TASKS', tasks: responseJSON })
    })
  }
}