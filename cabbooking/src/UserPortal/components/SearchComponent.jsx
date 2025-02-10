// import { Link, useNavigate } from 'react-router-dom'
 import { toast } from 'react-toastify'
 import { BookCab } from '../Services/Booking';
 import { getDistance, getLocations } from '../Services/Locations';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  
  // State for source and destination options
 const [locations,setLocations]=useState([])
  //const[userId,setUserId]=useState('');
  const [source,setSource]=useState('');
  const[destination,setDestination]=useState('');
 const [time,setTime]=useState('');
 const[date,setDate]=useState('');
 const[category,setCategory]=useState('');
 const[distance,setDistance]=useState('')
 //const[price,setPrice]=useState('')

  const handleRedirect = () => {
      navigate("/JourneyDetails");

  }
const OnSearch = async () => {

   let price;
    if (source.length == 0) {
      toast.warn('please enter source')
    } else if (destination.length == 0) {
      toast.warn('please enter time')
      
    }
    else if(date.length==0)
    {
      toast.warn('please enter date')
    }
    else if(category.length==0)
      {
        toast.warn('please select vehical Category ')
      }
    else if(source==destination)
    {
      toast.warn('source and Destination Cannot be same ')
    }
 
     else {
     // console.log(setUserId(sessionStorage.getItem('id')))
    // const userId = sessionStorage.getItem('id');
    //  console.log(userId)
    //     const result = await BookCab(userId,source, destination,time,date,category)   
    //     if(result!=null ){
    //       console.log("Checking result data:", result);
    //       const{id}=result;
    //       sessionStorage['bookid']=`${id}`;
    //       console.log(sessionStorage.getItem('bookid'))
    //         navigate('/JourneyDetails')

    //const userId = sessionStorage.getItem('id');
        
    // Store the booking details in sessionStorage
   
    // const source=sessionStorage.getItem(bookingDetails.source);
    // console.log(source)
    // Navigate to JourneyDetails page
console.log(source)
    const result=await getDistance(source,destination)
    if(result!=null)
      {
       setDistance(result)
       console.log(result)
      price=result*10
        console.log(price)
        //console.log(locations)
        const bookingDetails = {
   
          source,
          destination,
          distance,
          price,
          time,
          date,
          category
      };
       
      sessionStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
      console.log('Stored in sessionStorage:', bookingDetails);
      
      
          navigate('/JourneyDetails');
             
            // else {
            //   toast.error("Already have one Booking")
            // }
           }



        
       else {
        toast.error("error")
      }
    }






  }

const loadLocations=async()=>
{
  const result=await getLocations()
  console.log(result)

  if(result!=null)
  {
    setLocations(result)

  }
  else{
    toast.error('error')
  }
}
 
useEffect(()=>{
  loadLocations()
},[])
    
  
 
   

 
  

  return (
    <div>
      {/* Hero Section */}
      <header style={styles.hero}>
        <div className="container py-5" style={{ backgroundImage: "/image/car3.jpg" }}>
          <h1 className="text-left text-white mb-4" style={styles.heroTitle}>Cab Booking Made Easy</h1>
          <p className="text-left text-white mb-5">Book a cab in seconds with just a few clicks</p>

          {/* Search Form */}
          <div className="row justify-content-left">
            <div className="col-md-6 col-lg-4">
              <div className="card p-4 shadow-lg" style={styles.card}>
                <div className="card-body">
                  {/* Source Dropdown */}
                  <div className="mb-3">
                    <label htmlFor="source" className="form-label text-dark">Source</label>
                    <select id="source" className="form-select" 
                      onChange={(e) => setSource(e.target.value)}>
                      <option value="">Select Source</option>
                      {locations.map((location) => (
                        <option key={location.id} value={location.source}>
                          {location.source}
                        </option>
                       
                      ))}
                    
                    </select>
                  </div>

                  {/* Destination Dropdown */}
                  <div className="mb-3">
                    <label htmlFor="destination" className="form-label text-dark">Destination</label>
                    <select id="destination" className="form-select" 
                      onChange={(e) => setDestination(e.target.value)}>
                      <option value="">Select Destination</option>
                      {locations.map((location) => (
                        <option key={location.id} value={location.destination}>
                          {location.destination}
                        </option>
                      ))}
                    </select>
                  </div>
                   {/* Time Selection */}
                  <div className="mb-3">
                    <label htmlFor="time" className="form-label text-dark">Select Time</label>
                     <input type="time" id="time" className="form-control" onChange={(e) => setTime(e.target.value)}/>
                   </div>
                        {/* Time Selection */}
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label text-dark">Select Date</label>
                     <input type="date" id="time" className="form-control" onChange={(e)=>setDate(e.target.value)} />
                   </div>

                  {/* Vehicle Category Dropdown */}
                  <div className="mb-3">
                    <label htmlFor="vehicle" className="form-label text-dark">Vehicle Category</label>
                    <select id="vehicle" className="form-select" onChange={(e)=>setCategory(e.target.value)}>
                       <option value="">Select Vehicle</option>
                       <option value="AUTO">Auto</option>
                       <option value="CAT">Car</option>
                      
                    </select>
                  </div>

                  {/* Search Button */}
                  <button className="btn btn-teal w-100" onClick={OnSearch}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Other sections... */}
    </div>
  );
}

// Styles (as before)
const styles = {
  hero: {
    backgroundImage: 'url("/image/3644592.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'left',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  // Other styles...
};

export default HomePage;





















// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();

//   const onLogout = () => {
//     navigate('/login');
//   };

//   return (
//     <div>
//       <style>
//         {`
//           /* Navbar Styling */
//           .navbar-custom {
//             background: linear-gradient(90deg, #007FFF, #6A00F4, #FF0080, #FF6600, #FFD700);
//             padding: 12px 20px;
//             box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//           }

//           /* Logo */
//           .navbar-brand img {
//             height: 50px;
//             transition: transform 0.3s ease-in-out;
//           }

//           .navbar-brand img:hover {
//             transform: scale(1.1);
//           }

//           /* Navigation Links */
//           .navbar-nav .nav-link {
//             color: #fff;
//             font-weight: 500;
//             padding: 8px 15px;
//             transition: color 0.3s, background 0.3s;
//             border-radius: 8px;
//           }

//           .navbar-nav .nav-link:hover {
//             color: #333;
//             background: rgba(255, 255, 255, 0.2);
//           }

//           /* Buttons */
//           .navbar-buttons {
//             display: flex;
//             gap: 10px;
//           }

//           /* Book Now Button */
//           .book-btn {
//             background: #fff;
//             color: #333;
//             font-weight: bold;
//             padding: 8px 15px;
//             border-radius: 8px;
//             border: 2px solid black;
//             transition: all 0.3s;
//           }

//           .book-btn:hover {
//             background: #333;
//             color: #fff;
//           }

//           /* Get Started Button */
//           .get-started-btn {
//             background: #ff5500;
//             color: white;
//             font-weight: bold;
//             border: none;
//             padding: 8px 15px;
//             border-radius: 8px;
//             transition: background 0.3s;
//           }

//           .get-started-btn:hover {
//             background: #cc4400;
//           }

//           /* Logout Button */
//           .logout-btn {
//             background: #ff4444;
//             color: white;
//             font-weight: bold;
//             border: none;
//             padding: 8px 15px;
//             border-radius: 8px;
//             transition: background 0.3s;
//           }

//           .logout-btn:hover {
//             background: #cc0000;
//           }

//           /* Navbar Toggle */
//           .navbar-toggler {
//             border: none;
//           }

//           .navbar-toggler-icon {
//             background-color: white;
//           }
//         `}
//       </style>

//       <nav className="navbar navbar-expand-lg navbar-custom" data-bs-theme="dark">
//         <div className="container-fluid">
//           {/* Logo */}
//           <Link className="navbar-brand" to="/">
//             <img src="/images/logo.png" alt="RideNexa Logo" />
//           </Link>

//           {/* Toggle Button for Mobile */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar Links */}
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/category">Categories</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/brand">Book Now</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/product">About Us</Link>
//               </li>
//             </ul>

//             {/* Buttons */}
//             <div className="navbar-buttons">
//               <button className="book-btn">Book Now</button>
//               <button className="get-started-btn">Get Started</button>
//               <button onClick={onLogout} className="logout-btn">Logout</button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;




















// import { useState } from "react";
// import { Menu, X, Car, IndianRupee, LifeBuoy } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="p-4">
//       <Sheet open={open} onOpenChange={setOpen}>
//         <SheetTrigger>
//           <Button variant="ghost">
//             <Menu size={24} />
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="left" className="w-64 bg-white shadow-lg">
//           <div className="flex justify-between items-center p-4 border-b">
//             <h2 className="text-lg font-semibold">Menu</h2>
//             <Button variant="ghost" onClick={() => setOpen(false)}>
//               <X size={24} />
//             </Button>
//           </div>
//           <ul className="p-4 space-y-4">
//             <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
//               <Car size={20} />
//               <span>Book your ride</span>
//             </li>
//             <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
//               <IndianRupee size={20} />
//               <span>Rate card</span>
//             </li>
//             <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
//               <LifeBuoy size={20} />
//               <span>Support</span>
//             </li>
//           </ul>
//           <div className="p-4 mt-auto text-gray-500 text-sm border-t">
//             <a href="#" className="text-blue-500">Terms of Service</a>
//             <p>© 2018</p>
//           </div>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// }


// import { useState } from "react";
// import { Menu, CircleDot, MapPin, ArrowRight } from "lucide-react";
// import Button from "./Button";  // Adjust path based on your project structure


// export default function OlaUI() {
//   const [location, setLocation] = useState("");

//   return (
//     <div className="bg-black text-white">
//       {/* Header */}
//       <div className="flex justify-between items-center p-4">
//         <h1 className="text-xl font-bold">OLA</h1>
//         <div className="flex space-x-4">
//           <Button variant="ghost">Ola Electric</Button>
//           <Button variant="ghost">Krutrim</Button>
//           <Button variant="ghost">Outstation</Button>
//         </div>
//         <div className="flex space-x-4">
//           <Button variant="outline">Book an Ola Cab</Button>
//           <Button variant="outline">Free S1 Test Ride</Button>
//           <Menu size={24} className="cursor-pointer" />
//         </div>
//       </div>
      
//       {/* Booking Section */}
//       <div className="bg-white text-black p-6 rounded-md w-3/4 mx-auto mt-4 shadow-lg">
//         <div className="flex border-b pb-2 space-x-4">
//           <Button variant="ghost" className="border-b-2 border-black">Daily</Button>
//           <Button variant="ghost">Rental</Button>
//           <Button variant="ghost">Outstation</Button>
//         </div>
//         <div className="flex mt-4 space-x-4">
//           <div className="flex items-center border p-3 rounded w-1/2">
//             <CircleDot size={20} className="text-green-500" />
//             <input type="text" placeholder="Current Location" className="ml-2 w-full outline-none" readOnly />
//           </div>
//           <div className="flex items-center border p-3 rounded w-1/2">
//             <MapPin size={20} className="text-red-500" />
//             <input
//               type="text"
//               placeholder="Enter Location"
//               className="ml-2 w-full outline-none"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//           </div>
//         </div>
//         <Button className="mt-4 w-full bg-black text-white flex items-center justify-center">
//           SEARCH <span className="ml-2 text-green-400">OLA CABS</span>
//         </Button>
//       </div>
      
//       {/* Advertisement */}
//       <div className="bg-green-100 text-black p-6 mt-6 flex justify-between items-center w-3/4 mx-auto rounded-md shadow-lg">
//         <div>
//           <h2 className="text-xl font-bold">Introducing the all-new S1X+</h2>
//           <p>Check the all new design, gorgeous from every angle!</p>
//           <p>Grab the all new S1X+ at ₹89,999* only and make it yours today!</p>
//         </div>
//         <ArrowRight size={36} className="bg-green-500 text-white p-2 rounded-full" />
//       </div>
//     </div>
//   );
// }
