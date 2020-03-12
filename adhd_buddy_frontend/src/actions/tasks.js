export const fetchTasks = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TASKS' })
    fetch('http://localhost:3001/tasks').then(response => {
      return response.json()
    }).then(response => {
      dispatch({ type: 'GET_TASKS', tasks: response })
    })
  }
}