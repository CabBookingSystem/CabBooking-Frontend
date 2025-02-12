// // // import { useEffect, useState } from 'react'
// // // import { getCarDetails } from '../services/car'
// // // import { toast } from 'react-toastify'
// // // import { createUrl } from '../utils'
// // // import { useNavigate } from 'react-router-dom'

// // // function Car(){

// // //     const [cars, setCars] = useState([])

// // //     const navigate = useNavigate()
  
// // //     const loadCars = async () => {
// // //       const result = await getCarDetails()
// // //       console.log(result)
  
// // //     //   if (result['status'] == 'success') {
// // //         if (result!=null){
// // //         setCars(result['data'])
// // //       } else {
// // //         toast.error(result['error'])
// // //       }
// // //     }
  
// // //     useEffect(() => {
// // //         loadCars()
// // //     }, [])
  

// // //     return (
// // //         <div>
// // //         <h2 className="header">Cars</h2>
// // //         <table className="table">
// // //           <thead>
// // //             <tr>
// // //               <th scope="col">Image</th>
// // //               <th scope="col">CarName</th>
// // //               <th scope="col">CarNo</th>
// // //               <th scope="col">Category</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {cars.map((car) => {
// // //               return (
// // //                 <tr key={car['id']}>
// // //                   <td>
// // //                     <img
// // //                       src={createUrl(car['image'])}
// // //                       alt={car['carName']}
// // //                       style={{ width: '50px', height: '50px', objectFit: 'cover' }}
// // //                     />
// // //                   </td>
// // //                   <td>{car['carName']}</td>
// // //                   <td>{car['carNo']}</td>
// // //                   <td>{car['status']}</td>
// // //                   <td>{car['seats']}</td>
// // //                   <td>{car['category']}</td>
// // //                   <td>{car['image']}</td>
// // //                   <td>
// // //                     {/* <button
// // //                       onClick={() => {
// // //                         navigate('/home/car-details', {
// // //                           state: { id: car['id'] },
// // //                         });
// // //                       }}
// // //                       className="btn btn-link"
// // //                     >
// // //                       Details
// // //                     </button> */}
// // //                   </td>
// // //                 </tr>
// // //               );
// // //             })}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     )      
// // // }

// // // export default Car

// // import { useEffect, useState } from 'react'
// // import { getCarDetails } from '../services/car'
// // import { toast } from 'react-toastify'
// // import { createUrl } from '../utils'
// // import { useNavigate } from 'react-router-dom'

// // function Car() {
// //   const [cars, setCars] = useState([]); // Initializing with an empty array
// //   const [loading, setLoading] = useState(true); // To handle loading state
// //   const [error, setError] = useState(null); // To handle errors

// //   const navigate = useNavigate();

// //   // Load car details from the API
// //   const loadCars = async () => {
// //     try {
// //       const result = await getCarDetails();
// //       console.log("API Response:", result); // Log the entire API response for inspection
  
// //       // Check the structure of the response
// //       if (result && result.data && Array.isArray(result.data)) {
// //         setCars(result.data);
// //       } else {
// //         // Log unexpected format or missing data
// //         console.error("Unexpected API response structure:", result);
// //         setError("No cars available or failed to load data");
// //         toast.error("No cars available or failed to load data");
// //       }
// //     } catch (err) {
// //       console.error("Error fetching data:", err);
// //       setError("Error fetching data");
// //       toast.error("Error fetching car details");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
  

// //   // Load cars on component mount
// //   useEffect(() => {
// //     loadCars();
// //   }, []);

// //   // Display a loading state
// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   // If there's an error, display the error message
// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div>
// //       <h2 className="header">Cars</h2>
// //       <table className="table">
// //         <thead>
// //           <tr>
// //             <th scope="col">Image</th>
// //             <th scope="col">CarName</th>
// //             <th scope="col">CarNo</th>
// //             <th scope="col">Category</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {cars.length === 0 ? (
// //             <tr>
// //               <td colSpan="4">No cars available</td>
// //             </tr>
// //           ) : (
// //             cars.map((car) => (
// //               <tr key={car['id']}>
// //                 <td>
// //                   <img
// //                     src={createUrl(car['image'])}
// //                     alt={car['carName']}
// //                     style={{ width: '50px', height: '50px', objectFit: 'cover' }}
// //                   />
// //                 </td>
// //                 <td>{car['carName']}</td>
// //                 <td>{car['carNo']}</td>
// //                 <td>{car['category']}</td>
// //                 {/* You can add more columns or actions as needed */}
// //               </tr>
// //             ))
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default Car;

// import { useEffect, useState } from 'react';
// import { getCarDetails } from '../services/car';
// import { toast } from 'react-toastify';
// import { createUrl } from '../utils';
// import { useNavigate } from 'react-router-dom';

// function Car() {
//   const [cars, setCars] = useState([]); // State for storing the list of cars
//   const [loading, setLoading] = useState(true); // State to handle loading state
//   const [error, setError] = useState(''); // State for handling error messages
//   const navigate = useNavigate();

//   // Function to load car details from the backend
//   const loadCars = async () => {
//     try {
//       const result = await getCarDetails();
//       console.log("API Response:", result); // Log the response for debugging

//       // Check if the result structure is correct and contains data
//       if (result && result.data && Array.isArray(result.data)) {
//         setCars(result.data); // Update state with the fetched car data
//       } else {
//         console.error("Unexpected API response structure:", result);
//         toast.error("No cars available or failed to load data");
//         setError("No cars available or failed to load data");
//       }
//     } catch (err) {
//       // Error handling if the API request fails
//       console.error("Error fetching data:", err);
//       toast.error("Error fetching car details");
//       setError("Error fetching data");
//     } finally {
//       setLoading(false); // Set loading to false once the request is complete
//     }
//   };

//   // UseEffect hook to load cars once the component is mounted
//   useEffect(() => {
//     loadCars();
//   }, []); // Empty dependency array to ensure it runs only once after mount

//   // JSX rendering
//   return (
//     <div>
//       <h2 className="header">Cars</h2>
//       {loading ? (
//         <div>Loading...</div> // Show a loading message while data is being fetched
//       ) : (
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Image</th>
//               <th scope="col">CarName</th>
//               <th scope="col">CarNo</th>
//               <th scope="col">Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cars && cars.length > 0 ? (
//               cars.map((car) => (
//                 <tr key={car.id}>
//                   <td>
//                     <img
//                       src={createUrl(car['image'])} // Create the URL for the image
//                       alt={car['carName']}
//                       style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                     />
//                   </td>
//                   <td>{car['carName']}</td>
//                   <td>{car['carNo']}</td>
//                   <td>{car['category']}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4">No cars available</td> {/* Fallback message when no cars are found */}
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default Car;

import { useEffect, useState } from 'react';
import { getCarDetails } from '../Services/car';
import { toast } from 'react-toastify';
import { createUrl } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Car() {
  const [cars, setCars] = useState([]); // State for storing the list of cars
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(''); // State for handling error messages
  const navigate = useNavigate();

  // Function to load car details from the backend
  const loadCars = async () => {
    try {
      const result = await getCarDetails();
      console.log("API Response:", result); // Log the response for debugging

      // Since the response is directly an array of cars, no need for result.data
      if (Array.isArray(result) && result.length > 0) {
        setCars(result); // Update state with the fetched car data
      } else {
        console.error("Unexpected API response structure:", result);
        toast.error("No cars available or failed to load data");
        setError("No cars available or failed to load data");
      }
    } catch (err) {
      // Error handling if the API request fails
      console.error("Error fetching data:", err);
      toast.error("Error fetching car details");
      setError("Error fetching data");
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  // UseEffect hook to load cars once the component is mounted
  useEffect(() => {
    loadCars();
  }, []); // Empty dependency array to ensure it runs only once after mount

  // JSX rendering
  return (
    <div>
     

      <div className='container'>
      <h2 className="header">Cars</h2>

        <Link className='btn btn-success mb-3' to='/Addcar'>
          Add
        </Link>
        {cars.length == 0 && (
          <h4>There are no cars, please use add button to add one</h4>
        )}


      {loading ? (
        <div>Loading...</div> // Show a loading message while data is being fetched
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">CarName</th>
              <th scope="col">CarNo</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {cars && cars.length > 0 ? (
              cars.map((car) => (
                <tr key={car.id}>
                  <td>
                    <img
                      src={createUrl(car['image'])} // Create the URL for the image
                      alt={car['carName']}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>{car['carName']}</td>
                  <td>{car['carNo']}</td>
                  <td>{car['category']}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No cars available</td> {/* Fallback message when no cars are found */}
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
}

export default Car;
