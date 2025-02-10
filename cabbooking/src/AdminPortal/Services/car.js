import axios from 'axios'
import { createUrl } from '../../utils'

export async function getCarDetails(){
    try{
        const url = createUrl('Admin/availablecars')
        const response = await axios.get(url)
        return response.data
    }catch(ex){
        return { status: 'error', error: ex }
    }
}

// export async function addCars(
//     carName,
//             carNo,
//             category,
//             seats,
//           image
// ){
//     try {
//       const url = createUrl('Admin/')
//       const body= new FormData()
//       body.append('carName',carName)
//       body.append('carNo',carNo)
//       body.append('category',category)
//       body.append('seats',seats)
//       body.append('image',image)


//       const response = await axios.post(url, body)
//       return response.data
//     }catch (ex) {
//         return { status: 'error', error: ex }
//       }
//     }

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
