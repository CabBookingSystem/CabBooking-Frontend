import { Route, Routes } from 'react-router-dom'
import Car from './AdminPortal/screens/Car'
import AddDriver from './AdminPortal/screens/AddDriver'
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

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='car' element={<Car/>} />
        <Route path='add-driver' element={<AddDriver/>} />
        <Route path='Addcar' element={<AddCar/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='JourneyDetails' element={<JourneyDetails/>}/>
        <Route path='AdminHome' element={<AdminHome/>}/>
        <Route path='DriverHome' element={<DriverHome/>}/>
        <Route path='BookingList' element={<BookingList/>}/>

      
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
