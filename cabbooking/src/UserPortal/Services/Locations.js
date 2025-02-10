import axios from 'axios'
import { createUrl } from '../../utils'

export async function getLocations() {
    try {
      
      const url = createUrl('Location/loc')
      const response = await axios.get(url)
      return response.data
    } catch (ex) {
      return { status: 'error', error: ex }
    }
  }