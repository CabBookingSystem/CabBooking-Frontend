import { useEffect, useState } from 'react';
import { getUserList } from '../services/driverdetail';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const loadUsers = async () => {
    const result = await getUserList();
    console.log(result);

    if (result['status'] === 'success') {
      setUsers(result['data']);
    } else {
      toast.error(result['error']);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2 className='header'>Users</h2>
      <div className='row'>
        {users.map((driverdetail) => {
          return (
            <div className='col-4' key={driverdetail.id}>
              <div className='card'>
                <div className='card-body'>
                  <h6 className='card-title'>{driverdetail.firstName} {driverdetail.lastName}</h6>
                  <p className='card-text'><strong>Email:</strong> {driverdetail.email}</p>
                  <p className='card-text'><strong>Phone:</strong> {driverdetail.phoneNo}</p>
                  <p className='card-text'><strong>Role:</strong> {driverdetail.role}</p>
                  <button
                    onClick={() => {
                      navigate('/home/user-details', {
                        state: { id: user.id },
                      });
                    }}
                    className='btn btn-link'
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
