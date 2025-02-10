import { Route, Routes } from 'react-router-dom'
import GetCustomer from './AdminPortal/screens/GetCustomer'
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
        <Route path='details' element={<details/>} />
        <Route path='Admin/Customers' element={<GetCustomer/>} />
        <Route path='Addcar' element={<AddCar/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='JourneyDetails' element={<JourneyDetails/>}/>
        <Route path='AdminHome' element={<AdminHome/>}/>
        <Route path='DriverHome' element={<DriverHome/>}/>
        <Route path='BookingList' element={<BookingList/>}/>
        <Route path='Confirm' element={<Confirm />} />
      
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
