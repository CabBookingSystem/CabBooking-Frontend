// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify'
// import { getDetails } from '../Services/Booking';


// function JourneyDetails() {

//     //  const [id, setId] = useState('')
//     //  const [source, setSource] = useState('')
//     //  const[destination,setDestination]=useState('');
//     //  const[time,setTime]=useState('');
//     //  const[date,setDate]=useState('');
//     //  const[amount,setAmount]=useState('');
//         const[details,setDetails]=useState([]);


//   const bookId=sessionStorage.getItem('bookid')
//       const loadDetails = async () => {
//           const result = await getDetails(bookId)
//           console.log(result)
        
//           //if (result['status'] == 'success')
//           if(result!=null)
//           {
//            setDetails(result)
//           } else {
//             toast.error("error")
//           }
//         }
//       const pay=async()=>{
//         toast.success("Booking Confirmed")
//       }
      
      
//         useEffect(() => {
//           //Fetch source and destination data from the backend
      
//           loadDetails()
//         },[])

//         const { source, destination, time, date, amount, category } = details;


//     return (
//       <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Journey Details</h2>
  
//         <div style={{ marginBottom: "10px" }}>
//           <strong>From:</strong> {source}
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <strong>To:</strong> {destination}
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <strong>Date:</strong> {date}
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <strong>Time:</strong> {time}
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <strong>Amount:</strong> {amount}
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <strong>category:</strong> {category}
//         </div>
  
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <button style={{ padding: "10px 20px", border: "none", backgroundColor: "blue", color: "white", cursor: "pointer" }} onClick={pay}>
//             Confirm Booking
//           </button><br></br>
//           <button style={{ padding: "10px 20px", border: "none", backgroundColor: "blue", color: "white", cursor: "pointer" }}>
//             Cancel 
//           </button>
//         </div>
//       </div>
//     );
//   }
  
//   export default JourneyDetails;
  

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { BookCab } from '../Services/Booking';
import { useNavigate } from 'react-router-dom';
import { Radio, RadioIcon } from 'lucide-react';

function JourneyDetails() {
    // State to hold booking details
    const navigate = useNavigate();
    const [details, setDetails] = useState({});
    const [userId,setUserId]=useState('');

    useEffect(() => {
        // Retrieve booking details from sessionStorage
        const storedDetails = JSON.parse(sessionStorage.getItem('bookingDetails'));
        if (storedDetails) {
            setDetails(storedDetails);
        } else {
            toast.error('No booking details found');
        }
    }, []);

    const { source, destination,distance,price, time, date, category } = details;

   
    const booking = async () => {
       toast.success("Booking Confirmed");
        navigate('/Confirm')
       console.log(setUserId(sessionStorage.getItem('id')))
    const userId = sessionStorage.getItem('id');
     console.log(userId)
        const result = await BookCab(userId,source, destination,time,date,price,category)
        if(result!=null ){
          console.log("Checking result data:", result)
          
          
        }
        else{
          toast.error("error")
        }
      }
       const cancel = async () => {
         sessionStorage.clear();
         navigate(-1);
       }  

    return (
      
      <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <button 
  onClick={cancel} 
  style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
>
  <img 
    src="https://img.icons8.com/?size=100&id=19175&format=png&color=000000" 
    alt="Back"
    width="30" 
    height="30" 
  />
</button>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Journey Details</h2>

        <div style={{ marginBottom: "10px" }}>
          <strong>From:</strong> {source || "N/A"}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>To:</strong> {destination || "N/A"}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Date:</strong> {date || "N/A"}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Time:</strong> {time || "N/A"}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>Category:</strong> {category || "N/A"}
        </div>
       
        <div style={{ marginBottom: "10px" }}>
          <strong>Distance:</strong> 
          {distance ? `${distance} km` : "N/A"}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong>Amount:</strong> 
          {price ? `${price} rs` : "N/A"}
        </div>
        <div style={{ marginBottom: "10px" }}>
        {/* <strong>Payment mode :</strong>  */}
        
       <div style={{ marginBottom: "10px" }}>
 

  
       <div className="d-flex align-items-center mb-3">
  <strong className="me-3">Payment mode :</strong>

  <div className="form-check form-check-inline">
    <input type="radio" id="cash" name="paymentMode" className="form-check-input" />
    <label className="form-check-label" htmlFor="cash">Cash</label>
  </div>

  <div className="form-check form-check-inline">
    <input type="radio" id="online" name="paymentMode" className="form-check-input" />
    <label className="form-check-label" htmlFor="online">UPI</label>
  </div>
</div>

</div>

         </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button style={{ padding: "10px 20px", border: "none", backgroundColor: "blue", color: "white", cursor: "pointer" }} onClick={booking}>
            Confirm Booking
          </button>
          <br></br>
          <button style={{ padding: "10px 20px", border: "none", backgroundColor: "red", color: "white", cursor: "pointer", marginTop: "10px" }} onClick={cancel}>
            Cancel 
          </button>
        </div>
      </div>
    );
}


export default JourneyDetails;
