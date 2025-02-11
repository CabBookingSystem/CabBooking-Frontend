import axios from 'axios'
import { createUrl } from '../../utils'


export async function getBookingList(driverId) {
    try {

        console.log("hereeee")
      const url = createUrl(`Driver/${driverId}`)
      console.log("url")
      const response = await axios.get(url)
      console.log("after api call")
      return response.data
    } catch (ex) {
      return { status: 'error', error: ex }
    }
  }


  export async function acceptBooking(driverId,bookingId) {
    try {
      const url = createUrl(`Driver/${driverId}/${bookingId}`)
      console.log("herreee")
      const response = await axios.put(url)
      return response.data
    } catch (ex) {
      return null
    }
  }