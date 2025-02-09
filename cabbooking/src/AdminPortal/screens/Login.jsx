import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 import { toast } from 'react-toastify'
 import { signin } from '../Services/user'
 

function Login() {
  
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

  // // get the navigate function
   const navigate = useNavigate()

  const onLogin = async () => {
    if (email.length == 0) {
      toast.warn('please enter email')
    } else if (password.length == 0) {
      toast.warn('please enter password')
      
    }
     else {
      // call the singin api
      const result = await signin(email, password)

     // check if the result is successful
     //if (result['status'] == 'success') {
     
     if(result!=null ){
       toast.success('Welcome to cab booking')
        console.log("Checking result data:", result);
        // get the user details
        const { id,firstName, lastName, phoneNo,role } = result
// const { firstName, lastName, phone } = result.data.user
 

       
//         // cache the admin details in session storage
      sessionStorage['id'] = `${id}`
        
        sessionStorage['name'] = `${firstName} ${lastName}`
         sessionStorage['role'] = `${role}`
       // sessionStorage['token'] = token
        sessionStorage['phone'] = phoneNo
        // sessionStorage['email'] = email
        sessionStorage.setItem('email', email)

       //go to home screen
    let role1= sessionStorage.getItem('role')
      if(role1 == 'CUSTOMER')
      {
        navigate('/home')
      }
      else if(role1 == 'ADMIN')
        {
          navigate('/AdminHome')
        }
        else{
          navigate('/DriverHome')
        }
      } 
      else {
        toast.error("invalid Login")
      }
    }
  }

     return(
    <div>
 
  <h2 className='header'>Login</h2>

  <div className='row'>
    <div className='col'></div>
    <div className='col'>
      <div className='mb-3'>
        <label htmlFor='email'>Email</label> {/* ✅ Added htmlFor */}
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          id='email'  //
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password</label> {/* ✅ Added htmlFor */}
        <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          id='password'  // ✅ Added matching id
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <div>
          Don't have an account? <Link to='/Register'>Register here</Link>
        </div>
        <button onClick={onLogin} className='btn btn-success mt-3'>
          Login
        </button>
      </div>
    </div>
    <div className='col'></div>
  </div>
</div>



  )
}

export default Login



//   return (
//     <div>
//       <Navbar/>
//       <h2 className='header'>Login</h2>

//       <div className='row'>
//         <div className='col'></div>
//         <div className='col'>
//           <div className='mb-3'>
//             <label htmlFor=''>Email</label>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               type='email'
//               className='form-control'
//             />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor=''>Password</label>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               type='password'
//               className='form-control'
//             />
//           </div>
//           <div className='mb-3'>
//             <div>
//               Don't have an account? <Link to='/register'>Register here</Link>
//             </div>
//             <button onClick={onLogin} className='btn btn-success mt-3'>
//               Login
//             </button>
//           </div>
//         </div>
//         <div className='col'></div>
//       </div>
//     </div>
//   )
// }

// export default Login
