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

  export async function getDistance(source,destination) {

const body={source,destination}
    console.log(source)
    try 
    {
          const url=createUrl('Location/Distance')
          const response=await axios.post(url,body);
          console.log(response)
          return response.data
    } catch (ex) {
      return  null
    }

  }