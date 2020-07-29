import axios from "axios"
import router from "../router/index"

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000
})

function getToken () {
  if (localStorage.token) {
    let token = localStorage.getItem('token')
    apiClient.defaults.headers['authorization'] = `Bearer ${token}`; 
  }
}

function forceUserLogout (response) {
  if (response.data.status && response.data.status == 403) {
    alert('looks like you timed out')
    localStorage.clear()
    router.push('/')
    return;
  }
}

export async function getAllFoods () {
  getToken()
  let response = await apiClient.get('/food/all')
  return response.data
}

export async function addNewFood ( food ) {
  getToken()
  return await apiClient.post('/food/add', {
    body: {
      food
    }
  })
}

export async function removeFoodById ( id ) {
  getToken()
  return apiClient.delete('/food/remove',  {
    data: { 
      id 
    } 
  })
}

export async function getDaysConsumption ( date ) {
  getToken()
  let response = await apiClient.get(`/consumed/${date}`)
  return response
}

export async function removeConsumedFood ( consumed_id ) {
  getToken()
  return apiClient.delete('/consumed/remove', {
    data: {
      consumed_id
    }
  })
}

export async function addConsumedFood ( payload ) {
  getToken()
  let response = await apiClient.post('/consumed/add', {
    payload
  })

  forceUserLogout(response)
  return response
}

export async function reorderConsumedAt ( payload ) {
  getToken()
  return apiClient.put('/consumed/consumed_at_reorder', {
    payload
  })
}

export async function login ( payload ) {
  getToken()
  let response = await apiClient.put('/person/login', {
    payload
  })

  let { userData, jwt } = response.data
  localStorage.setItem('token', jwt)

  return userData
}

export async function signup ( payload ) {
  getToken()
  return apiClient.put('/person/signup', {
    payload
  })
}

export async function checkJWT () {
  getToken()
  return apiClient.get('/person/checkJWT')
}