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
//           .navbar-custom {
//             background: linear-gradient(90deg, #008080, #005f73); /* Teal to Blue Gradient */
//             padding: 10px 20px;
//             box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//           }

//           .navbar-brand img {
//             height: 45px;
//             transition: transform 0.3s ease-in-out;
//           }

//           .navbar-brand img:hover {
//             transform: scale(1.1);
//           }

//           .navbar-nav .nav-link {
//             color: #fff;
//             font-weight: 500;
//             padding: 8px 15px;
//             transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
//             border-radius: 8px;
//           }

//           .navbar-nav .nav-link:hover {
//             color: #ffdd57;
//             background: rgba(255, 255, 255, 0.1);
//           }

//           .logout-btn {
//             background: #ff4d4d;
//             color: white;
//             font-weight: bold;
//             border: none;
//             padding: 8px 15px;
//             border-radius: 8px;
//             transition: background 0.3s ease-in-out, transform 0.2s;
//           }

//           .logout-btn:hover {
//             background: #e60000;
//             transform: scale(1.05);
//           }

//           .navbar-toggler {
//             border: none;
//             outline: none;
//           }

//           .navbar-toggler-icon {
//             background-color: white;
//           }
//         `}
//       </style>

//       <nav className="navbar navbar-expand-lg navbar-custom" data-bs-theme="dark">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             <img src="./image/image.png" alt="Logo" />
//           </Link>

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

//             <button onClick={onLogout} className="logout-btn">Logout</button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const onLogout = () => {
    sessionStorage.clear()
    navigate('/login');
  };

  return (
    <div>
      <style>
        {`
          /* Navbar Styling */
          .navbar-custom {
            // background: linear-gradient(90deg, #ffcc00, #ff8800); /* Yellow to Orange */
            //  background: linear-gradient(90deg,rgba(230, 108, 195, 0.61),rgba(143, 34, 189, 0.55));
             background: linear-gradient(90deg,rgba(6, 74, 103, 0.61),
             rgba(79, 131, 162, 0.55));
            padding: 12px 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }

          /* Logo */
          .navbar-brand img {
            height: 50px;
            transition: transform 0.3s ease-in-out;
          }

          .navbar-brand img:hover {
            transform: scale(1.1);
          }

          /* Navigation Links */
          .navbar-nav .nav-link {
            color: #fff;
            font-weight: 500;
            padding: 8px 15px;
            transition: color 0.3s, background 0.3s;
            border-radius: 8px;
          }

          .navbar-nav .nav-link:hover {
            color: #333;
            background: rgba(255, 255, 255, 0.2);
          }

          /* Buttons */
          .navbar-buttons {
            display: flex;
            gap: 10px;
          }

          /* Book Now Button */
          .book-btn {
            background: #fff;
            color: #333;
            font-weight: bold;
            padding: 8px 15px;
            border-radius: 8px;
            border: 2px solid black;
            transition: all 0.3s;
          }

          .book-btn:hover {
            background: #333;
            color: #fff;
          }

          /* Get Started Button */
          .get-started-btn {
            background:#ffb300;
            color: white;
            font-weight: bold;
            border: none;
            padding: 8px 15px;
            border-radius: 8px;
            transition: background 0.3s;
          }

          .get-started-btn:hover {
            background: #cc4400;
          }

          /* Logout Button */
          .logout-btn {
            background:rgb(153, 38, 188);
            color: white;
            font-weight: bold;
            border: none;
            padding: 8px 15px;
            border-radius: 8px;
            transition: background 0.3s;
          }

          .logout-btn:hover {
            background: #cc0000;
          }

          /* Navbar Toggle */
          .navbar-toggler {
            border: none;
          }

          .navbar-toggler-icon {
            background-color: white;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-custom" data-bs-theme="dark">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="RideNexa Logo" />
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/category">ViewCustomers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brand">Book Now</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AddCar">Add Car</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">View Car</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Admin/Customers">View Customers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">About Us</Link>
              </li>
            </ul>

            {/* Buttons */}
            <div className="navbar-buttons">
              <button className="book-btn">Book Now</button>
              <button className="get-started-btn">Get Started</button>
              <button onClick={onLogout} className="logout-btn">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
