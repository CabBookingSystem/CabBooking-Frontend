import axios from 'axios'
import { createUrl } from '../../utils'

export async function signup(firstName, lastName,dob, email, password, phoneNo, status,role) {
    try{
        const body = {
            firstName,
            lastName,
            dob,
            email,
            password,
            phoneNo,
            status,
            role,
          }
          
          const url = createUrl('Driver/driver-details')
          const response = await axios.post(url, body)
          return response.data
        }
        catch (ex) {
        //   return { status: 'error', error: ex }
          return { status: 'error', error: ex.response?.data || ex.message };
        }      
}
