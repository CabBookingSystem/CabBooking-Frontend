
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Keeping your existing Navbar component



function AdminHome() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}



      {/* Hero Section */}
      <div className="container-fluid text-center py-5 bg-dark text-white">
        <h1 className="display-5 fw-bold">🚖 Admin Dashboard</h1>
        <p className="lead">Manage users, orders, and cabs efficiently</p>
      </div>

      {/* Dashboard Grid */}
      <div className="container mt-4">
        <div className="row">
          {/* Add Product */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg p-3 text-center border-0">
              <div className="card-body">

                <h5 className="card-title"> Add Driver</h5>
                <p className="card-text">Manage & add new cab categories.</p>
                <button className="btn btn-primary" onClick={() => navigate("/add-driver")}>Go</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg p-3 text-center border-0">
              <div className="card-body">
                <h5 className="card-title">Car Details</h5>
                <p className="card-text">Manage & add new cab categories.</p>
                <button className="btn btn-primary" onClick={() => navigate("/car")}>Go</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg p-3 text-center border-0">
              <div className="card-body">
                <h5 className="card-title">Add Driver</h5>
                <p className="card-text">Manage & add new cab categories.</p>
                <button className="btn btn-primary" onClick={() => navigate("/add-driver")}>Go</button>

              </div>
            </div>
          </div>

          {/* View Orders */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg p-3 text-center border-0">
              <div className="card-body">
                <h5 className="card-title">📑 View Customers</h5>
                <p className="card-text">Check & manage all bookings.</p>
                <button className="btn btn-success" onClick={() => navigate("/Admin/Customers")}>Go</button>
              </div>
            </div>
          </div>

          {/* Manage Users */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg p-3 text-center border-0">
              <div className="card-body">
                <h5 className="card-title">👥 Manage Users</h5>
                <p className="card-text">View and manage registered users.</p>
                <button className="btn btn-warning" onClick={() => navigate("/manageUsers")}>Go</button>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center mt-4">

          <button className="btn btn-danger px-4" onClick={() => navigate("/login")}>🚪 Logout</button>

        </div>
      </div>
    </div>
  );
}


export default AdminHome;
