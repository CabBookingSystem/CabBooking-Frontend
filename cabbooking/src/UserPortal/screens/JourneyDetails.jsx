import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import { getDetails } from '../Services/Booking';


function JourneyDetails() {

    //  const [id, setId] = useState('')
    //  const [source, setSource] = useState('')
    //  const[destination,setDestination]=useState('');
    //  const[time,setTime]=useState('');
    //  const[date,setDate]=useState('');
    //  const[amount,setAmount]=useState('');
        const[details,setDetails]=useState([]);


  const bookId=sessionStorage.getItem('bookid')
      const loadDetails = async () => {
          const result = await getDetails(bookId)
          console.log(result)
        
          //if (result['status'] == 'success')
          if(result!=null)
          {
           setDetails(result)
          } else {
            toast.error("error")
          }
        }
      const pay=async()=>{
        toast.success("Booking Confirmed")
      }
      
      
        useEffect(() => {
          //Fetch source and destination data from the backend
      
          loadDetails()
        },[])

        const { source, destination, time, date, amount, category } = details;


    return (
      <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Journey Details</h2>
  
        <div style={{ marginBottom: "10px" }}>
          <strong>From:</strong> {source}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>To:</strong> {destination}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Date:</strong> {date}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Time:</strong> {time}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Amount:</strong> {amount}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>category:</strong> {category}
        </div>
  
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button style={{ padding: "10px 20px", border: "none", backgroundColor: "blue", color: "white", cursor: "pointer" }} onClick={pay}>
            Confirm Booking
          </button><br></br>
          <button style={{ padding: "10px 20px", border: "none", backgroundColor: "blue", color: "white", cursor: "pointer" }}>
            Cancel 
          </button>
        </div>
      </div>
    );
  }
  
  export default JourneyDetails;
  