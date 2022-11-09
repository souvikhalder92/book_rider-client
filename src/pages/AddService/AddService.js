import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import AllServices from '../../Services/AllServices';

const AddService = () => {
    const {_id}  = useLoaderData();
    const [service,setService] = useState([]);
   
    const url = `http://localhost:5000/allservices`;

    useEffect(() =>{
       fetch(url)
       .then(res => res.json())
       .then(data => setService(data))

    },[service])


    const handleService = event =>{
        event.preventDefault();
        const form = event.target;
        const bookname = form.bookName.value;
        const authorname = form.authorName.value;
        const photoURL = form.photoURL.value;
        const ratings = form.ratings.value;
        const reviews = form.reviews.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
         service: _id,
         name: bookname,
         img: photoURL,
         description: description,
         author: authorname,
         ratings: ratings,
         reviews: reviews,
         price: price

        }
        fetch('http://localhost:5000/allservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
               
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast('Service Added successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div className='mt-3'>
            <p className='text-center font bold text-2xl mb-3'>Add a Service.{service.length}</p>
       
        <form onSubmit={handleService} className="mt-5">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:border  lg:p-5   lg:border-slate-300 hover:border-stone-400 '>
            <input name="bookName" type="text" placeholder="Book Name" className="input input-ghost w-full  input-bordered" required/>
            <input name="authorName" type="text" placeholder="Author Name" className="input input-ghost w-full  input-bordered" required/>
            <input name="photoURL" type="text" placeholder="Image URL" className="input input-ghost w-full  input-bordered" required />
            <input name="ratings" type="number" placeholder="Ratings" className="input input-ghost w-full  input-bordered" required/>
            <input name="reviews" type="number" placeholder="Review" className="input input-ghost w-full  input-bordered" required/>
            <input name="price" type="number" placeholder="Price" className="input input-ghost w-full  input-bordered" required/>
            <textarea name="description" className="textarea textarea-bordered h-24 w-full mx-0 lg:mx-60" placeholder="Description" required></textarea>
        </div>
      
         <div className='text-center mb-5'>
        <input className='btn mt-4' type="submit" value="Submit Your Review" />
        <ToastContainer/>
        </div>
    </form>
    </div>
    );
};

export default AddService;