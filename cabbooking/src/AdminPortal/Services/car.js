import axios from 'axios'
import { createUrl } from '../../utils'

export async function addCar(carName, carNo,seats,category) {
  try {
    const body = { carName, carNo,seats,category}
    const url = createUrl('Admin/addcar')
    const response = await axios.post(url, body)
    return response.data
  } catch (ex) {
    return { status: 'error', error: ex }
  }
}