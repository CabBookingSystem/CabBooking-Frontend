import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signup } from '../services/user'
import '../styles/register.css'
import Navbar from '../components/Navbar'

function Register() {
  //User details
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [userAddress, setUserAddress] = useState('')

  //user's-Address details
  const [adrLine1, setAdrLine1] = useState('');
  const [adrLine2, setAdrLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');

  // get navigate function
  const navigate = useNavigate()

   const onSignup = async () => {
    if (firstName.length == 0) {
      toast.warn('Please enter first name')
    } else if (lastName.length == 0) {
      toast.warn('Please enter last name')
    } else if (email.length == 0) {
      toast.warn('Please enter email')
    } else if (phone.length == 0) {
      toast.warn('Please enter phone number')
    } else if (userAddress.length === 0) {
      toast.warn('Please enter address'); 
    } else if (password.length == 0) {
      toast.warn('Please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warn('Please confirm password')
    } else if (password != confirmPassword) {
      toast.warn('Password does not match')
    }else if (adrLine1.length === 0 || city.length === 0 || state.length === 0 || pinCode.length === 0) {
      toast.warn('Please fill all address details');
    } 

   else {
      const address = { adrLine1, adrLine2, city, state, pinCode };
      const result = await signup(firstName, lastName, email, password, phone, userAddress)
      if (result['status'] == 'success') {
        toast.success('Successfully registered a new admin')
        // go back
        navigate(-1)
      } else {
        toast.error(result.error|| 'Registeration failed')
      }
    }
  };

return (
  <div>
  <Navbar/>
      
  <div className="registration-page vh-100 d-flex align-items-center justify-content-center bg-light">
    
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h2 className="text-center mb-4">Registeration</h2>
              <form>
                {/* Name Section */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="form-control"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="form-control"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Section */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Password Section */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                {/* Address Section */}
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="address1" className="form-label">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      id="address1"
                      className="form-control"
                      placeholder="Enter your address"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="address2" className="form-label">
                      Address Line 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="address2"
                      className="form-control"
                      placeholder="Additional address details"
                    />
                  </div>
                </div>

                {/* City, State, and Pin Code Section */}
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="form-control"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="form-control"
                      placeholder="Enter your state"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="pincode" className="form-label">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      className="form-control"
                      placeholder="Enter your pin code"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button onClick={onSignup} type="submit" className="btn btn-primary px-5 py-2">
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);



}
export default Register;
