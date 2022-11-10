import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AllReviews = ({review}) => {
    const {user} = useContext(AuthContext);
    const {message,customer,
        photoURL} = review;
    return (
        <div className="card w-3/4 lg:w-96 bg-gray-100 shadow-xl mx-auto lg:mx-0">
        <figure><img className='w-20 h-20 rounded-full mt-5' src={photoURL ? photoURL : <FaUserAlt></FaUserAlt>} alt="review" /></figure>
        <div className="card-body">
          <h2 className="font-semibold text-center text-2xl">{customer}</h2>
         
          
          <div>
            <div className='flex ml-5'>
            <p>Review: {message}</p>
             
          </div>
        </div>
      </div>
      </div>

    );
};

export default AllReviews;