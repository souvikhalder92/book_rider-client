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
    
    const handleDelete = (_id) =>{
        const proceed = window.confirm('Are you sure to delete this?');
        if(proceed)
        {
            fetch(`http://localhost:5000/reviews/${_id}`,{
                method: 'DELETE'

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('Deleted Successfully !!!');
                    const remaining = review.filter(re => re._id !== _id);
                    setReview(remaining);
                }

            })
            
        }
  
    

    }
    const handleStatusUpdate = (_id) => {
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Updated'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = review.filter(re => re._id !== _id);
                const approving = review.find(re => re._id === _id);
                approving.status = 'Updated'

                const newReviews = [approving, ...remaining];
                setReview(newReviews);
            }
        })
    }
    return (
        <div className='mt-5'>
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
                            <th>Edit Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(review => <ReviewsRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
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