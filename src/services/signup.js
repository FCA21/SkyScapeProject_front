import { authApi } from './serviceConfig'

export async function signup(signupData) {
  const response = await authApi.post('/auth/signup', signupData)
  return response
}
