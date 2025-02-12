import axios from 'axios'
import { createUrl } from '../../utils'

export async function BookCab(userId,source, destination,time,date,price,category) {
    try {
      const body = { userId,source, destination,time,date,price,category}
      const url = createUrl('customer/bookCar')
      const response = await axios.post(url, body)
      return response.data
    } catch (ex) {
      return null;
    }
  }

  export async function getDetails(bookId) {
    try {
      
      const url = createUrl(`customer/${bookId}`)
      const response = await axios.get(url)
      return response.data
    } catch (ex) {
      return { status: 'error', error: ex }
    }
  }