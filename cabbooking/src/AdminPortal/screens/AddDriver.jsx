// import { useState } from 'react'
// import Navbar from '../components/Navbar'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { createUrl } from '../utils'
// //import { addBrand } from '../services/brand'

// function AddDriver() {
//   const [firstName, setfirstName] = useState('')
//   const [lastName, setlastName] = useState('')
//   const [age, setage] = useState('')
//   const [email, setemail] = useState('')
//   const [phoneNo, setphoneNo] = useState('')
//   const [category, setcategory] = useState('')
//   const [carId, setcarId] = useState('')


//   // get navigate function
//   const navigate = useNavigate()

//   const onSave = async () => {
//     if (firstName.length == 0) {
//       toast.warn('Please enter firstName')
//     } else if (lastName.length == 0) {
//       toast.warn('Please enter lastName')
//     } else if (age.length == 0) {
//         toast.warn('Please enter age')
//     } else if (email.length == 0) {
//         toast.warn('Please enter email')
//     } else if (category.length == 0) {
//         toast.warn('Please enter category')
//     } else if (carId.length == 0) {
//         toast.warn('Please enter carId')
//     } else if (phoneNo.length == 0) {
//         toast.warn('Please enter phoneNo')
      
//     } else {
//       const result = await addDriverToBackend(firstName, lastName,age, email,phoneNo,category, carId)
//       if (result['status'] == 'success') {
//         toast.success('Successfully added a Car')
//         navigate(-1)
//       } else {
//         toast.error(result['error'])
//       }
//     }
//   }

//   const onCancel = () => {
//     navigate(-1)
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className='container'>
//         <h2 className='header'>Add Driver</h2>
//         <div className='mb-3'>
//           <label htmlFor=''>FirstName</label>
//           <input
//             onChange={(e) => setfirstName(e.target.value)}
//             type='text'
//             className='form-control'
//           />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor=''>LastName</label>
//           <input
//             onChange={(e) => setlastName(e.target.value)}
//             type='text'
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label htmlFor=''>Age</label>
//           <input
//             onChange={(e) => setage(e.target.value)}
//             type='text'
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label htmlFor=''>Email</label>
//           <input
//             onChange={(e) => setemail(e.target.value)}
//             type='email'
//             className='form-control'
//           />
//         </div>

        

//         <div className='mb-3'>
//           <label htmlFor=''>PhoneNo</label>
//           <input
//             onChange={(e) => setphoneNo(e.target.value)}
//             type='number'
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label htmlFor=''>Category</label>
//           <input
//             onChange={(e) => setcategory(e.target.value)}
//             type='text'
//             className='form-control'
//           />
//         </div>

//         <div className='mb-3'>
//           <label htmlFor=''>CarId</label>
//           <input
//             onChange={(e) => setcarId(e.target.value)}
//             type='number'
//             className='form-control'
//           />
//         </div>


//         <div className='mb-3'>
//           <button onClick={onSave} className='btn btn-success'>
//             Save
//           </button>
//           <button onClick={onCancel} className='btn btn-danger ms-2'>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddDriver


// // import { useState } from 'react'
// // import Navbar from '../components/Navbar'
// // import { useNavigate } from 'react-router-dom'
// // import { toast } from 'react-toastify'
// // // import { addDriverToBackend } from '../services/driverService' // Import your service for adding the driver

// // function AddDriver() {
// //   const [firstName, setFirstName] = useState('')
// //   const [lastName, setLastName] = useState('')
// //   const [age, setAge] = useState('')
// //   const [email, setEmail] = useState('')
// //   const [phoneNo, setPhoneNo] = useState('')
// //   const [category, setCategory] = useState('')
// //   const [carId, setCarId] = useState('')

// //   // get navigate function
// //   const navigate = useNavigate()

// //   // Assuming you have an actual API service function here
// //   const addDriverToBackend = async (firstName, lastName, age, email, phoneNo, category, carId) => {
// //     // Replace this with your actual API call
// //     const response = await fetch('/api/driver', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //         firstName,
// //         lastName,
// //         age,
// //         email,
// //         phoneNo,
// //         category,
// //         carId,
// //       }),
// //     })
// //     const result = await response.json()
// //     return result
// //   }

// //   const onSave = async () => {
// //     // Validation checks
// //     if (firstName.length === 0) {
// //       toast.warn('Please enter firstName')
// //     } else if (lastName.length === 0) {
// //       toast.warn('Please enter lastName')
// //     } else if (age.length === 0) {
// //       toast.warn('Please enter age')
// //     } else if (email.length === 0) {
// //       toast.warn('Please enter email')
// //     } else if (category.length === 0) {
// //       toast.warn('Please enter category')
// //     } else if (carId.length === 0) {
// //       toast.warn('Please enter carId')
// //     } else if (phoneNo.length === 0) {
// //       toast.warn('Please enter phoneNo')
// //     } else {
// //       const result = await addDriverToBackend(firstName, lastName, age, email, phoneNo, category, carId)
// //       if (result.status === 'success') {
// //         toast.success('Successfully added a Driver')
// //         navigate(-1)
// //       } else {
// //         toast.error(result.error || 'Something went wrong')
// //       }
// //     }
// //   }

// //   const onCancel = () => {
// //     navigate(-1)
// //   }

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className='container'>
// //         <h2 className='header'>Add Driver</h2>
// //         <div className='mb-3'>
// //           <label htmlFor=''>FirstName</label>
// //           <input
// //             onChange={(e) => setFirstName(e.target.value)}
// //             type='text'
// //             className='form-control'
// //           />
// //         </div>
// //         <div className='mb-3'>
// //           <label htmlFor=''>LastName</label>
// //           <input
// //             onChange={(e) => setLastName(e.target.value)}
// //             type='text'
// //             className='form-control'
// //           />
// //         </div>

// //         <div className='mb-3'>
// //           <label htmlFor=''>Age</label>
// //           <input
// //             onChange={(e) => setAge(e.target.value)}
// //             type='text'
// //             className='form-control'
// //           />
// //         </div>

// //         <div className='mb-3'>
// //           <label htmlFor=''>Email</label>
// //           <input
// //             onChange={(e) => setEmail(e.target.value)}
// //             type='email'
// //             className='form-control'
// //           />
// //         </div>

// //         <div className='mb-3'>
// //           <label htmlFor=''>PhoneNo</label>
// //           <input
// //             onChange={(e) => setPhoneNo(e.target.value)}
// //             type='number'
// //             className='form-control'
// //           />
// //         </div>

// //         <div className='mb-3'>
// //           <label htmlFor=''>Category</label>
// //           <input
// //             onChange={(e) => setCategory(e.target.value)}
// //             type='text'
// //             className='form-control'
// //           />
// //         </div>

// //         <div className='mb-3'>
// //           <label htmlFor=''>CarId</label>
// //           <input
// //             onChange={(e) => setCarId(e.target.value)}
// //             type='number'
// //             className='form-control'
// //           />
// //         </div>

// //         <div className='mb-3'>
// //           <button onClick={onSave} className='btn btn-success'>
// //             Save
// //           </button>
// //           <button onClick={onCancel} className='btn btn-danger ms-2'>
// //             Cancel
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default AddDriver
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddDriver() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [category, setCategory] = useState('');
  const [carId, setCarId] = useState('');

  // get navigate function
  const navigate = useNavigate();

  // Define the addDriverToBackend function
  const addDriverToBackend = async (firstName, lastName, age, email, phoneNo, category, carId) => {
    try {
      const response = await fetch('http://localhost:3000/api/driver', { // Update the URL according to your backend setup
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          age,
          email,
          phoneNo,
          category,
          carId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add driver');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error adding driver:', error);
      toast.error('Failed to add driver. Please try again.');
      return { status: 'error', error: error.message };
    }
  };

  const onSave = async () => {
    if (firstName.length === 0) {
      toast.warn('Please enter first name');
    } else if (lastName.length === 0) {
      toast.warn('Please enter last name');
    } else if (age.length === 0) {
      toast.warn('Please enter age');
    } else if (email.length === 0) {
      toast.warn('Please enter email');
    } else if (category.length === 0) {
      toast.warn('Please enter category');
    } else if (phoneNo.length === 0) {
      toast.warn('Please enter phone number');
    } else {
      const result = await addDriverToBackend(firstName, lastName, age, email, phoneNo, category, carId);
      if (result!=null) {
        toast.success('Successfully added a driver');
        navigate(-1); // Navigate to the previous page
      } else {
        toast.error(result.error);
      }
    }
  };

  const onCancel = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="header">Add Driver</h2>
        <div className="mb-3">
          <label htmlFor="">First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Age</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Phone Number</label>
          <input
            onChange={(e) => setPhoneNo(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Category</label>
          {/* <input
            onChange={(e) => setCategory(e.target.value)}
            type="optional"
            className="form-control"
          /> */}


            <select
          onChange={(e)=> setCategory(e.target.value)}
          className='form-control'
          id='category'

          >
            <option value="">select a category</option>
            <option value="AUTO">Auto</option>
            <option value="CAR">Car</option>

            </select>

        </div>

        {/* <div className="mb-3">
          <label htmlFor="">Car ID</label>
          <input
            onChange={(e) => setCarId(e.target.value)}
            type="number"
            className="form-control"
          />
        </div> */}

        <div className="mb-3">
          <button onClick={onSave} className="btn btn-success">
            Save
          </button>
          <button onClick={onCancel} className="btn btn-danger ms-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDriver;
