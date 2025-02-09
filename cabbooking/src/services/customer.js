import axios from "axios"
import { createUrl } from "../utils"
export async function getCustomerList(){
    try{
        const url=createUrl('Admin/Customers')
        const response=await axios.get(url)
        return  { status: "success", data: response.data };
    }catch(ex){
       return { status: "error", error: ex.message || "Unknown error" };
    }
}


export async function DeleteCustomer(id) {
    try {
        const url = createUrl(`customer/${id}`);
        const response = await axios.delete(url);
        return response.data;
      } catch (ex) {
        return { status: "error", error: ex };
      }
  }
  