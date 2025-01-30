import { Route, Routes } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
      
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
