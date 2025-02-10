
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar"; 


// function AdminHome() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       {/* Navbar */}
     
//       {/* Hero Section */}
//       <div className="container-fluid text-center py-5 bg-dark text-white">
//         <h1 className="display-5 fw-bold">🚖 Admin Dashboard</h1>
//         <p className="lead">Manage users, orders, and cabs efficiently</p>
//       </div>

//       {/* Dashboard Grid */}
//       <div className="container mt-4">
//         <div className="row">
//           {/* Add Product */}
//           <div className="col-md-4 mb-4">
//             <div className="card shadow-lg p-3 text-center border-0">
//               <div className="card-body">
//                 <h5 className="card-title">📦 Add Product</h5>
//                 <p className="card-text">Manage & add new cab categories.</p>
//                 <button className="btn btn-primary" onClick={() => navigate("/addProduct")}>Go</button>
//               </div>
//             </div>
//           </div>

//           {/* View Orders */}
//           <div className="col-md-4 mb-4">
//             <div className="card shadow-lg p-3 text-center border-0">
//               <div className="card-body">
//                 <h5 className="card-title">📑 View Orders</h5>
//                 <p className="card-text">Check & manage all bookings.</p>
//                 <button className="btn btn-success" onClick={() => navigate("/viewOrders")}>Go</button>
//               </div>
//             </div>
//           </div>

//           {/* Manage Users */}
//           <div className="col-md-4 mb-4">
//             <div className="card shadow-lg p-3 text-center border-0">
//               <div className="card-body">
//                 <h5 className="card-title">👥 Manage Users</h5>
//                 <p className="card-text">View and manage registered users.</p>
//                 <button className="btn btn-warning" onClick={() => navigate("/manageUsers")}>Go</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Logout Button */}
//         <div className="text-center mt-4">
//           <button className="btn btn-danger px-4" onClick={() => navigate("/")}>🚪 Logout</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminHome;
import React from "react";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-light vh-100 d-flex flex-column align-items-center justify-content-center">
      {/* Hero Section */}
      <div className="text-center py-4">
        <h1 className="display-4 fw-bold text-primary">🚖 Admin Dashboard</h1>
        <p className="lead text-secondary">Efficiently manage drivers, customers, and cars</p>
      </div>

      {/* Dashboard Grid */}
      <div className="row w-75">
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg text-center border-0 p-4">
            <h5 className="card-title text-dark">👨‍✈️ Add Driver</h5>
            <p className="card-text text-muted">Register new drivers for the platform.</p>
            <button className="btn btn-primary" onClick={() => navigate("/add-driver")}>
              Add Driver
            </button>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-lg text-center border-0 p-4">
            <h5 className="card-title text-dark">🚗 Show Drivers</h5>
            <p className="card-text text-muted">View and manage all registered drivers.</p>
            <button className="btn btn-success" onClick={() => navigate("/drivers")}>
              View Drivers
            </button>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-lg text-center border-0 p-4">
            <h5 className="card-title text-dark">👥 Show Customers</h5>
            <p className="card-text text-muted">View and manage all customers.</p>
            <button className="btn btn-warning" onClick={() => navigate("/Admin/Customers")}>
              View Customers
            </button>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-lg text-center border-0 p-4">
            <h5 className="card-title text-dark">🚘 Show Cars</h5>
            <p className="card-text text-muted">View and manage available cars.</p>
            <button className="btn btn-info" onClick={() => navigate("/car")}>
              View Cars
            </button>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-lg text-center border-0 p-4">
            <h5 className="card-title text-dark">➕ Add Car</h5>
            <p className="card-text text-muted">Add new cars to the system.</p>
            <button className="btn btn-secondary" onClick={() => navigate("/Addcar")}>
              Add Car
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="text-center mt-4">
        <button className="btn btn-danger px-4" onClick={() => navigate("/")}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default AdminHome;
