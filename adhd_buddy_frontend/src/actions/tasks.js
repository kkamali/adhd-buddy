const URL = "http://localhost:3000/tasks"

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TASKS' })
    fetch(URL).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_TASKS', tasks: responseJSON })
    })
  }
}

export const addTask = task => {
  let configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ task: task })
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_TASKS' })
    fetch(URL, configObject).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_TASKS', tasks: responseJSON })
    })
  }
}

export const deleteTask = id => {
  let configObject = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id })
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_TASKS' })
    fetch(`${URL}/${id}`, configObject).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_TASKS', tasks: responseJSON })
    })
  }
}