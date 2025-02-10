import axios from 'axios'
import { createUrl } from '../../utils'

export async function signup(firstName, lastName, email, password, phone) {
  try {
    const body = {
      firstName,
      lastName,
      email,
      password,
      phone,
    }

    const url = createUrl('user/register')
    const response = await axios.post(url, body)
    console.log("responseeee")
    console.log(response.data)
    return response.data
  } catch (ex) {
    return { status: 'error', error: ex }
  }
}

export async function signin(email, password) {
  try {
    const body = { email, password }
    const url = createUrl('user/signin')
    const response = await axios.post(url, body)
    console.log(response.data)
    return response.data
  } catch (ex) {
   
   // return { status: 'error', error: ex }
   return null
  }
}
