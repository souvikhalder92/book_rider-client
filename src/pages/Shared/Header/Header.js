import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import s1 from '../../../img/s1.png';
import { FaAccusoft, IconName } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';




const Header = () => {
  const {user,logOut}  = useContext(AuthContext);
    

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }
    return (
        <div className="navbar bg-neutral flex-col lg:flex-row">
        <div className="flex-1 ">
       
        <FaAccusoft  className="text-4xl font-bold text-yellow-600 ml-2"></FaAccusoft><Link to='/' className="text-3xl font-bold text-yellow-600 ml-2" >Book Rider</Link>
        
        </div>
       
        <div className="flex-none">
          <ul className="list-none  flex  lg:flex-row text-left  p-0">
            <li className='text-xl text-yellow-600'><Link to="/home">Home</Link></li>
            {
                  user?.uid ? 
                  <>
                     <li className='text-xl text-yellow-600 ml-3'><Link to="/reviewsadd">My Reviews</Link></li>
                    <li className='text-xl text-yellow-600 ml-3'><Link to="/itemadd">Add a Service</Link></li>
                    <button onClick={handleLogOut} className='text-xl text-yellow-600 ml-2'><Link to="/home">Logout</Link></button>
                  </>
                  :
                  <li className='text-xl text-yellow-600 ml-3'><Link to="/login">Login</Link></li>

            }
           
            <li className='text-xl text-yellow-600 ml-3 mr-5'><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;