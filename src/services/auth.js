import api from "."

async function signup(signupData) {
  const response = await api.post('/auth/signup', signupData)
  return response.data
}

async function login(loginData) {
  const response = await api.post('/auth/login', loginData)
  return response.data
}

export {
    login, signup
}
