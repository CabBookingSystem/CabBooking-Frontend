import axios from 'axios'
import { createUrl } from '../../utils'

export async function addDriverToBackend(firstName,lastName,age,email,password,confirmPassword,category,phoneNo) {
  try {
    const body = { firstName,lastName,age,email,password,confirmPassword,category,phoneNo}
    const url = createUrl('Admin/add-driver')
    const response = await axios.post(url, body)
    console.log(response.data)
    return response.data
  } catch (ex) {
    return null
  }
}

// export async function getDriverList() {
//   try {
//     const url = createUrl('brand/')
//     const response = await axios.get(url)
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }

// export async function deleteDriver(id) {
//   try {
//     const url = createUrl('brand/' + id)
//     const response = await axios.delete(url)
//     return response.data
//   } catch (ex) {
//     return { status: 'error', error: ex }
//   }
// }