// import Navbar from "../components/Navbar";

// function GetDriverDetails(){
//    return(

//     <div>
//        <Navbar/>
//        <div className="container">
//         <h2 className="header">Add Car</h2>
//         <div className='mb-3'>
//         <label htmlFor=''>Title</label>
//            <input onChange={(e)=> setTitle(e.target.value)} type='text' className="form-control"/>
//         </div>

//         </div>
//         <div className='mb-3'>
//           <label htmlFor=''>Details</label>
//           <input
//             onChange={(e) => setDetails(e.target.value)}
//             type='text'
//             className='form-control'
//           />
//         </div>


//         <div className='mb-3'>
//           <button onClick={onSave} className='btn btn-success'>
//             Save
//           </button>
//           <button onClick={onCancel} className='btn btn-danger ms-2'>
//             Cancel
//           </button>
//         </div>
//        </div>
   
//    )
// }
// export default GetDriverDetails


import { useState, useEffect } from "react";
import { getDriverList } from "../../AdminPortal/Services/driver";
import { toast } from "react-toastify";


function GetDriver() {
    const [drivers, setDrivers] = useState([]);

    const loadDrivers = async () => {
        const result = await getDriverList();
        console.log(result);

        if (result.status === "success" && Array.isArray(result.data)) {
            setDrivers(result.data);
        } else {
            toast.error(result.error || "Failed to fetch drivers");
        }
    };

    // const handleDelete = async (id) => {
    //     console.log("Deleting driver with ID:", id);
    //     if (!id) {
    //         console.error("Error: Driver ID is undefined or null.");
    //         toast.error("Invalid driver ID");
    //         return;
    //     }

    //     const result = await deleteDriver(id);
    //     if (result.status && result.status === "success") {
    //         toast.success("Driver deleted successfully");
    //         loadDrivers(); // Refresh list after deletion
    //     } else {
    //         toast.error(result.error || "Failed to delete driver");
    //     }
    // };

    useEffect(() => {
        loadDrivers();
    }, []);

    return (
        <div className='container'>
            <h2 className='header'>Drivers</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Category</th>
                        <th>Car ID</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {drivers.map((driver, index) => (
                        <tr key={driver.id || index}>
                            <td>{driver.id}</td>
                            <td>{driver.firstName} {driver.lastName}</td>
                            <td>{driver.dob}</td>
                            <td>{driver.age}</td>
                            <td>{driver.email}</td>
                            <td>{driver.phoneNo}</td>
                            <td>{driver.category}</td>
                            <td>{driver.carId || "N/A"}</td>
                            <td>
                                {/* <button
                                    className='btn btn-danger ml-2'
                                    onClick={() => handleDelete(driver.id)}
                                >
                                    Remove
                                </button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetDriver;
