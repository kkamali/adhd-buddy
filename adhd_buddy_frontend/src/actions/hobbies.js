const URL = "http://localhost:3000/hobbies"

export const fetchHobbies = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HOBBIES' })
    fetch(URL).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_HOBBIES', hobbies: responseJSON })
    })
  }
}

export const addHobby = hobby => {
  let configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ hobby: hobby })
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_HOBBIES' })
    fetch(URL, configObject).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_HOBBIES', hobbies: responseJSON })
    })
  }
}

export const deleteHobby = id => {
  let configObject = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id })
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_HOBBIES' })
    fetch(`${URL}/${id}`, configObject).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_HOBBIES', hobbies: responseJSON })
    })
  }
}