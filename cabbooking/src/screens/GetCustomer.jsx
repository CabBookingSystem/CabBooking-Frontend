import { useState } from "react";
import { getCustomerList } from "../services/customer";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { DeleteCustomer } from "../services/customer";

function Customer(){
    const [customers,setCustomer]=useState([])

    const loadCustomer=async()=>{
        const result=await getCustomerList()
        console.log(result)

        if (result.status === "success" && Array.isArray(result.data)) {
            setCustomer(result.data);
          } else {
            toast.error(result.error || "Failed to fetch customers");
          }
        }
      
   

    const handleDelete = async (id) => {
    console.log("Deleting customer with ID:", id); // Log the ID being passed
    if (!id) {
        console.error("Error: Customer ID is undefined or null.");
        toast.error("Invalid customer ID");
        return;
    }

    const result = await DeleteCustomer(id);
    if (result.status && result.status === "success") { 
      
        toast.success("Customer deleted successfully");
        loadCustomer();  // Refresh list after deletion
    } else {
        toast.error(result.error || "Failed to delete customer");
    }
};

        useEffect(() => {
            loadCustomer()
        }, []);
    
    
    return(
        <div>
            <div className='container'>
                <h2 className='header'>Customer</h2>
              <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>dob</th>
                        <th>Phoneno</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                {
                    customers.map((customer,index)=>{
                        return(
                    
                                <tr key={customer.id || index}>
                                    <td>{customer['id']}</td>
                                    <td>{customer['firstName']}</td>
                                    <td>{customer['dob']}</td>
                                    <td>{customer['phoneNo']}</td>
                                    <td>{customer.status ? "Active" : "Inactive"}</td>
                                    <td>{customer['role']}</td>
                                    <td>
  {customer.address && customer.address.adrLine1
    ? `${customer.address.adrLine2}, ${customer.address.city}, ${customer.address.state}`
    : "No Address Available"}
</td>

<td>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => {
                      handleDelete(customer.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                                </tr> 
                        )
                    })
                }
                </tbody>
              </table>
            </div>
        </div>
    )
}
export default Customer