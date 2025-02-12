import { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addCar } from '../Services/car'

function AddCar() {
    const [carName ,setCarName]=useState('')
    const [carNo ,setCarNO]=useState('')
    const [seats ,setSeates]=useState('')
    const [category ,setCategory]=useState('')
   // const [image, setImage] = useState(null)

     // get navigate function
  const navigate = useNavigate()

  const onSave = async () => {
    if (carName.length == 0) {
      toast.warn('Please enter title')
    } else if (carNo.length == 0) {
      toast.warn('Please enter carNo')
    }
    else if (seats.length == 0) {
        toast.warn('Please enter seats')
      }
     else {
      const result = await addCar(carName, carNo,seats,category)
      console.log("herreee")
      if (result['status'] == 'success') {
        toast.success('Successfully added a brand')
        navigate(-1)
      } else {
        toast.error(result['error'])
      }
    }
  }

  const onCancel = () => {
    navigate(-1)
  }


    return (
        <div>
         
          <div className='container'>
            <h2 className='header'>Add New Car</h2>
            <div className='mb-3'>
              <label htmlFor=''>car Name</label>
              <input
                onChange={(e) => setCarName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>car No.</label>
              <input
                onChange={(e) => setCarNO(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>seats</label>
              <input
                onChange={(e) => setSeates(e.target.value)}
                type='text'
                className='form-control'
              />
            {/* </div>
            { <div className='mb-3'>
              <label htmlFor=''>Details</label>
              <input
                onChange={(e) => se(e.target.value)}
                type='text'
                className='form-control'
              />
            </div> } */}


                {<div className='mb-3'>
                <label htmlFor='category' className='form-label'>Category</label>
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className='form-control'
                    id='category'
                >
                    <option value=''>Select a category</option>
                    <option value='AUTO'>Auto</option>
                    <option value='CAR'>Car</option>
                
                </select>
                </div>}


       {/* { <div className='row'>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>Image</label>
              <input
                onChange={(e) => {
                  // get the first image selected by user
                  setImage(e.target.files[0])
                }}
                type='file'
                className='form-control'
                accept='image/*'
              />
            </div>
          </div>
        </div>} */}
    
            <div className='mb-3'>
              <button onClick={onSave} className='btn btn-success'>
                Save
              </button>
              <button onClick={onCancel} className='btn btn-danger ms-2'>
                Cancel
              </button>
            </div>
          </div>
        </div>
        </div>
      )
    }
    
    export default AddCar
    

    
