import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const [services,setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/allservices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-8'>
             <div className='text-center'>
                <h1 className='text-3xl font-bold text-yellow-600'>Trending Books</h1>
                
                <p className='mt-2'>There are trending books,<br/>see the details of books here.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
          
 
        </div>
    );
};

export default AllServices;