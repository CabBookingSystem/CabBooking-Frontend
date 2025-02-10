import axios from 'axios'
import { createUrl } from '../../utils'

export async function addDriverToBackend(firstName, lastName,age, email,phoneNo,category) {
  try {
    const body = { firstName, lastName, age, email,phoneNo, category}
    const url = createUrl('Admin/add-driver')
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return null
  }
}



export const getDriverList = async () => {
  try {
    //  const response = await axios.get('Driver/driver-details');
    const response = await axios.get('http://localhost:8080/Driver/driver-details');

      return { status: "success", data: response.data };
  } catch (error) {
      return { status: "error", error: error.response?.data?.message || "Failed to fetch drivers" };
  }
};
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


