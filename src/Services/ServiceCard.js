import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,name,description,price,author,ratings,reviews,img} = service;
    return (

<div className="card w-full lg:w-96 bg-gray-100 shadow-xl">
<PhotoProvider>
      <PhotoView src={img}>
      <figure><img className='w-full h-52' src={img} alt="Course" /></figure>
      </PhotoView>
    </PhotoProvider>
  
      
        <div className="card-body">
          <h2 className="font-semibold text-center text-2xl">{name}</h2>
          <p>Author: <span className='font-semibold'>{author}</span> </p>
          <p>{description.slice(0,100)}...</p>
          <div>
            <div className='flex ml-5'>
            <p>Price: ${price}</p>
                <p>Reviews: {reviews}k</p>
               <FaStar className='mr-1 mt-1 text-sm text-amber-300'></FaStar><p>{ratings}</p>  
                </div>
              
                <Link to={`/servicedetails/${(_id)}`} className="flex"><button className="btn bg-blue-400 border-none  mt-3 mx-auto">
               See Details<FaArrowRight className='ml-1'></FaArrowRight></button></Link>
           
           
          </div>
        </div>
      </div>

    );
};

export default ServiceCard;