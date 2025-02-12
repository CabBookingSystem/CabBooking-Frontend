// import React from "react";
// import { useNavigate } from "react-router-dom";

// function AdminHome() {
//   const navigate = useNavigate();

//   return (
//     <div 
//       className="vh-100 d-flex flex-column justify-content-center align-items-center text-white"
//       style={{
//         backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,cars')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Title Section */}
//       <div className="text-center mb-4">
//         <h1 className="display-4 fw-bold">🚖 Admin Dashboard</h1>
//         <p className="lead">Manage users, drivers, cars, and bookings efficiently</p>
//       </div>

//       {/* Dashboard Grid */}
//       <div className="container">
//         <div className="row g-4">
//           {/* Add Driver */}
//           <div className="col-md-4">
//             <div className="card shadow-lg text-center bg-dark text-white">
//               <div className="card-body">
//                 <h5 className="card-title">👨‍✈️ Add Driver</h5>
//                 <p className="card-text">Register new drivers</p>
//                 <button className="btn btn-light" onClick={() => navigate("/add-driver")}>Go</button>
//               </div>
//             </div>
//           </div>

//           {/* Show Drivers */}
//           <div className="col-md-4">
//             <div className="card shadow-lg text-center bg-primary text-white">
//               <div className="card-body">
//                 <h5 className="card-title">🛑 Show Drivers</h5>
//                 <p className="card-text">View all registered drivers</p>
//                 <button className="btn btn-light" onClick={() => navigate("/drivers")}>Go</button>
//               </div>
//             </div>
//           </div>

//           {/* Show Customers */}
//           <div className="col-md-4">
//             <div className="card shadow-lg text-center bg-success text-white">
//               <div className="card-body">
//                 <h5 className="card-title">👥 Show Customers</h5>
//                 <p className="card-text">Manage customer details</p>
//                 <button className="btn btn-light" onClick={() => navigate("/Admin/Customers")}>Go</button>
//               </div>
//             </div>
//           </div>

//           {/* Show Cars */}
//           <div className="col-md-4">
//             <div className="card shadow-lg text-center bg-warning text-dark">
//               <div className="card-body">
//                 <h5 className="card-title">🚗 Show Cars</h5>
//                 <p className="card-text">View available cars</p>
//                 <button className="btn btn-dark" onClick={() => navigate("/car")}>Go</button>
//               </div>
//             </div>
//           </div>

//           {/* Add Car */}
//           <div className="col-md-4">
//             <div className="card shadow-lg text-center bg-danger text-white">
//               <div className="card-body">
//                 <h5 className="card-title">➕ Add Car</h5>
//                 <p className="card-text">Add new vehicles</p>
//                 <button className="btn btn-light" onClick={() => navigate("/Addcar")}>Go</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Logout Button */}
//         <div className="text-center mt-4">
//           <button className="btn btn-outline-light px-5 py-2" onClick={() => navigate("/")}>
//             🚪 Logout
//           </button>
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
      {/* <div className="text-center py-4">
        <h1 className="display-4 fw-bold text-primary">🚖 Admin Dashboard</h1>
        <p className="lead text-secondary">Efficiently manage drivers, customers, and cars</p>
      </div> */}

<div className="container-fluid text-center py-5 bg-dark text-white">
        <h1 className="display-4 fw-bold">🚖 Admin Dashboard</h1>
        <p className="lead">Manage users, orders, and cabs efficiently</p>
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
