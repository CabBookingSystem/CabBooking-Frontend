import { Route, Routes } from 'react-router-dom'
<<<<<<< HEAD
import GetCustomer from './AdminPortal/screens/GetCustomer'
=======
import Car from './AdminPortal/screens/Car'
import AddDriver from './AdminPortal/screens/AddDriver'
>>>>>>> 974def94e411e0597bfabf89b654bc8dbdad65ed
import Login from './AdminPortal/screens/Login'
import Register from './AdminPortal/screens/Register'
import Home from './UserPortal/screens/Home'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddCar from './AdminPortal/screens/AddCar'
import AboutUs from './AdminPortal/screens/AboutUs'
import JourneyDetails from './UserPortal/screens/JourneyDetails'
import DriverHome from './DriverPortal/Screens/DriverHome'
import AdminHome from './AdminPortal/screens/AdminHome'
import BookingList from './DriverPortal/Screens/BookingList'
import Confirm from './UserPortal/screens/Confirm'
function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
<<<<<<< HEAD
        <Route path='details' element={<details/>} />
        <Route path='Admin/Customers' element={<GetCustomer/>} />
=======
        <Route path='car' element={<Car/>} />
        <Route path='add-driver' element={<AddDriver/>} />
>>>>>>> 974def94e411e0597bfabf89b654bc8dbdad65ed
        <Route path='Addcar' element={<AddCar/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='JourneyDetails' element={<JourneyDetails/>}/>
        <Route path='AdminHome' element={<AdminHome/>}/>
        <Route path='DriverHome' element={<DriverHome/>}/>
        <Route path='BookingList' element={<BookingList/>}/>
<<<<<<< HEAD
        <Route path='Confirm' element={<Confirm />} />
=======

>>>>>>> 974def94e411e0597bfabf89b654bc8dbdad65ed
      
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
