import { useState } from "react"
import { acceptBooking } from "../Services/bookingrequest"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"




function BookingsRow({id,source,destination,date,time,firstName,onAccept}){


    const [drivrid,setDriverid]=useState(sessionStorage.getItem('id'))
    const navigate = useNavigate()

    const onAcceptBooking = async () => {
        const result = await acceptBooking(drivrid,id)
        if (result!=null) {
          toast.success('BookingAccepted')
            navigate('/trip')
          
        
        } else {
          toast.error("At a Time Only One Request can be accepted")
        }

    }

    return(
        <tr>
        <td>{id}</td>
        <td>{source}</td>
        <td>{destination}</td>
        <td>{date}</td>
        <td>{time}</td>
        <td>{firstName}</td>
        <td>
          {/* <button className='btn btn-success btn-sm'>Edit</button> */}
          <button onClick={onAcceptBooking} className='btn btn-success btn-sm ms-2'>
            Accept
          </button>
           {/* <button className='btn btn-success btn-sm ms-2'>
            Accept
          </button> */}
        </td>
      </tr>
    )
}

export default BookingsRow