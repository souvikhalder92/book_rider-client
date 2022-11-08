import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {name,img,description,author,price,ratings,reviews} = useLoaderData();
    return (
        <div>
        <div className="card w-72 lg:w-8/12 bg-base-200 shadow-xl mx-auto  mt-6 mb-5">
      
  <div className='w-10/12'>
      
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
</div>
<div className="card-actions">

</div>
</div>
</div>
</div>

<div className='App'>
   <h1 className='text-yellow-600 font-bold text-3xl'>All Reviews</h1> 
</div>


</div>

    );
};

export default ServiceDetails;