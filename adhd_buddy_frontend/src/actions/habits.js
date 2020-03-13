const URL = "http://localhost:3000/habits"

export const fetchHabits = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HABITS' })
    fetch(URL).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_HABITS', habits: responseJSON })
    })
  }
}

export const addHabit = habit => {
  let configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ habit: habit })
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_HABOTS' })
    fetch(URL, configObject).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_HABITS', habits: responseJSON })
    })
  }
}

export const deleteHabit = id => {
  let configObject = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id })
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_HABITS' })
    fetch(`${URL}/${id}`, configObject).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_HABITS', habits: responseJSON })
    })
  }
}