import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  // get navigate function
  const navigate = useNavigate();

  const onLogout = () => {
    // clear the session storage
    // sessionStorage.removeItem('name');
    // sessionStorage.removeItem('token');
    // sessionStorage.removeItem('email');
    // sessionStorage.removeItem('phone');

    // go to login screen
    navigate('/login');
  };

  return (
    <div>
      {/* Custom CSS for Teal Background */}
      <style>
        {`
          .bg-teal {
            background-color: #008080; /* Teal color */
          }
          .navbar-nav .nav-link {
            color: white; /* White color for links */
          }
          .navbar-nav .nav-link:hover {
            color: #f0f0f0; /* Light gray color for hover effect */
          }
          .navbar-nav .nav-link:focus {
            color: #f0f0f0; /* Light gray color for focus */
          }
          .navbar-toggler-icon {
            background-color: #fff; /* White color for hamburger icon */
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg bg-teal" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./image/image.png" alt="Logo" style={{ height: '40px' }} />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brand">
                  BookNow
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={onLogout}
                  className="nav-link"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                > 
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
