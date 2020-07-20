import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem('token')}`
  },
  timeout: 10000
})

export async function getAllFoods () {
  let response = await apiClient.get('/food/all')
  return response.data
}

export async function addNewFood ( food ) {
  return await apiClient.post('/food/add', {
    body: {
      food
    }
  })
}

export async function removeFoodById ( id ) {
  return apiClient.delete('/food/remove',  { 
    data: { 
      id 
    } 
  })
}

export async function getDaysConsumption ( date ) {
  let response = await apiClient.get(`/consumed/${date}`)
  return response
}

export async function removeConsumedFood ( consumed_id ) {
  return apiClient.delete('/consumed/remove', {
    data: {
      consumed_id
    }
  })
}

export async function addConsumedFood ( payload ) {
  return apiClient.post('/consumed/add', {
    payload
  })
}

export async function reorderConsumedAt ( payload ) {
  return apiClient.put('/consumed/consumed_at_reorder', {
    payload
  })
}

export async function login ( payload ) {
  let response = await apiClient.put('/person/login', {
    payload
  })

  let { userData, jwt } = response.data
  localStorage.setItem('token', jwt)

  return userData
}

export async function signup ( payload ) {
  return apiClient.put('/person/signup', {
    payload
  })
}