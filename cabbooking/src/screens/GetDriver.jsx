import Navbar from "../components/Navbar";

function GetDriver(){
   return(

    <div>
       <Navbar/>
       <div className="container">
        <h2 className="header">Add Car</h2>
        <div className='mb-3'>
        <label htmlFor=''>Title</label>
           <input onChange={(e)=> setTitle(e.target.value)} type='text' className="form-control"/>
        </div>

        </div>
        <div className='mb-3'>
          <label htmlFor=''>Details</label>
          <input
            onChange={(e) => setDetails(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>


        <div className='mb-3'>
          <button onClick={onSave} className='btn btn-success'>
            Save
          </button>
          <button onClick={onCancel} className='btn btn-danger ms-2'>
            Cancel
          </button>
        </div>
       </div>
   
   )
}
export default GetDriver