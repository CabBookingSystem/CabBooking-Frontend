import Navbar from "../Components/Navbar";

import{toast} from 'react-toastify'

import { useEffect,useState } from "react";
import { getBookingList } from "../Services/bookingrequest"
import BookingsRow from "../Components/BookingsRow";


function BookingList(){

  const [bookings,setBookings]=useState([])
  const [driverId,setDriverId]=useState(sessionStorage.getItem('id'))
  console.log(driverId)
    console.log("after useState")
    const onLoadBookings=async()=>{
        const result = await getBookingList(driverId)
        if (result!=null) {
            setBookings(result)
          console.log(result)
        } else {
          toast.error('something went wrong')
        }
      }

    //   useEffect(() => {
    //     // load pending bookings when this component is loaded on the screen
       
    //     onLoadBookings()
    //   }, [])

    useEffect(() => {
        if (driverId) {
          onLoadBookings();
        }
      }, [driverId]); 
    



    return (
        <div>
     <div className='container'>
          <h2 className='header'>Requests</h2>
  
          {/* <Link className='btn btn-success' to='/add-category'>
            Add
          </Link> */}
          {bookings.length == 0 && (
            <h4 className='mt-3'>
              There are no Bookings. Please use add button to add one.
            </h4>
          )} 
  
          {bookings.length > 0 && (
            <table className='table-hover table mt-3'>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Source</th>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Customer</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => {
                  return (
                   <BookingsRow
                    
                      id={booking.id}
                      source={booking.source}
                      destination={booking.destination}
                      date={booking.date}
                      time={booking.time}
                      firstName={booking.firstName}
                      onAccept={onLoadBookings}
                    
                    />
                  )
                })}
              </tbody>
            </table>
          )}
        </div> 
      </div>
  

    )

}


export default BookingList;