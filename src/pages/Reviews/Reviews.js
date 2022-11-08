import React, { useContext, useEffect, useState } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewsRow from './ReviewsRow';

const Reviews = () => {
    const {user} = useContext(AuthContext);
    const [review,setReview] = useState([]);

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
           <p className='text-2xl font-bold'>Total Reviews: {review.length}</p>
           <div className="overflow-x-auto w-full mt-5 mb-64">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Book Name</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(review => <ReviewsRow
                                key={review._id}
                                review={review}
                            ></ReviewsRow>)
                        }
                    </tbody>
                </table>
            </div>
           </>}</p>
        
        </div>
    );
};

export default Reviews;