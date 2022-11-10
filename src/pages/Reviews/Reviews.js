import React, { useContext, useEffect, useState } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewsRow from './ReviewsRow';

const Reviews = () => {
    const {user,logOut} = useContext(AuthContext);
    const [review,setReview] = useState([]);
    useTitle('My Reviews');
    console.log(review);
   
    const url = `https://book-rider-server.vercel.app/reviewsadd?email=${user?.email}`;

    useEffect(() =>{
       fetch(url,{
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
       })
       .then(res => {
        if (res.status === 401 || res.status === 403) {
            return logOut();
        }
        return res.json();
    })
    .then(data => {
        setReview(data);
    })
    


    },[user?.email,logOut])



    
    const handleDelete = (_id) =>{
        const proceed = window.confirm('Are you sure to delete this?');
        if(proceed)
        {
            fetch(`https://book-rider-server.vercel.app/reviewsadd/${_id}`,{
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
        fetch(`https://book-rider-server.vercel.app/reviewsadd/${_id}`, {
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
           <div className="lg:overflow-x-auto w-20 lg:w-full mt-5 mb-64">
                <table className="lg:table w-full">
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