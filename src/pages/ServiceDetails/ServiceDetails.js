import React, { useContext, useEffect, useState } from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllReviews from './AllReviews';

const ServiceDetails = () => {
    const {_id,name,img,description,author,price,ratings,reviews} = useLoaderData();
    const {user}  = useContext(AuthContext);
    console.log(user);
    
    useTitle('Details');
    const [review,setReview] = useState([]);

    const url = `http://localhost:5000/reviews`;

    useEffect(() =>{
       fetch(url)
       .then(res => res.json())
       .then(data => setReview(data) )

    },[user?.email])
    const handleReview = (event) =>{
        event.preventDefault();
        const form = event.target;
        const names = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const photoURL = user?.photoURL;
        const message = form.message.value;
        const d = new Date();
        var time = d.getTime();


        const review = {
            service: _id,
            bookName: name,
            customer: names,
            email,
            photoURL,
            message,
            time
        }
        fetch('http://localhost:5000/reviewsadd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast('Review Added successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

           
          


    }

    
    return (
        <div>
        <div className="card w-72 lg:w-8/12 bg-base-200 shadow-xl mx-auto  mt-6 mb-5">
      
<figure className="px-10 pt-6">

<img src={img} alt="" className="rounded-xl w-3/4" />

</figure>
<div className="card-body items-center text-center">
<h2 className="card-title font-bold">{name}</h2>
<h1 className='text-xl font-bold'>Author Name:</h1>
<p>{author}</p>
<h1 className='font-bold'>Description:</h1>
<p>{description}</p>
<div className='block lg:flex'>
 <div className='flex'>
<FaStar className='mt-auto lg:mt-1 mx-36 lg:mx-0 text-amber-300'></FaStar>
</div> 
<p  className='font-semibold mr-3'>{ratings}</p>
<p  className='font-semibold ml-3'>Reviews: {reviews}k</p>
<p className='font-semibold ml-3'>Price: ${price}</p>
</div>

</div>

</div>

<div className='App'>
   <h1 className='text-yellow-600 font-bold text-3xl'>All Reviews: {review.length}</h1> 
   <div className='grid grid-1 lg:grid-cols-3 gap-5 mt-5 mb-8'>
   {
       
        review.sort((a,b) => a.time > b.time ? -1 : 1).map(review => <AllReviews
            key={review._id}
            review={review}></AllReviews>)
    

   }
   </div>
 
   {
    user?.uid ? 
    
    <>
       <form onSubmit={handleReview} className="mt-5">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:border  lg:p-5   lg:border-slate-300 hover:border-stone-400 '>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    <input name="photoURL" type="text" placeholder="Your imageURL" defaultValue={user?.photoURL} className="input input-ghost w-full  input-bordered" readOnly />
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full lg:mx-60 mx-0" placeholder="Your Review" required></textarea>
                </div>
              
                 <div className='text-center mb-5'>
                <input className='btn mt-4' type="submit" value="Submit Your Review" />
                <ToastContainer/>
                </div>
            </form>
    </>
    :
    <>
   
   <p className='text-2xl mb-5'>Please Login To Add Your Review.<Link to='/login' className='text-orange-700 font-semibold'>Login Here...</Link></p>
   </>
   }
</div>


</div>

    );
};

export default ServiceDetails;