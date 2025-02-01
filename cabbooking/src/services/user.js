import axios from 'axios'
import { createUrl } from '../utils'

export async function signup(firstName, lastName, email, password, phoneNo, userAddress) {
    try{
        const body = {
            firstName,
            lastName,
            email,
            password,
            phoneNo,
            userAddress,
          }
          
          const url = createUrl('users/register')
          const response = await axios.post(url, body)
          return response.data
        }
        catch (ex) {
        //   return { status: 'error', error: ex }
          return { status: 'error', error: ex.response?.data || ex.message };
        }      
}
