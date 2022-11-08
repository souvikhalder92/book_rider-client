import React, { useContext, useEffect, useState } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const {user} = useContext(AuthContext);
    const [review,setReview] = useState({});

    const url = `http://localhost:5000/reviews?email=${user?.email}`;

    useEffect(() =>{
       fetch(url)
       .then(res => res.json())
       .then(data => setReview(data))

    },[user?.email])
    return (
        <div>
           <p className='text-2xl text-center'>{review.length < 1 ? 
           'There is No Review' : 
           <>
           <p>{review.length}</p>
           </>}</p>
        
        </div>
    );
};

export default Reviews;