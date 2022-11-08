import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
             <div className='text-center'>
                <h1 className='text-3xl font-bold text-yellow-600'>Trending Books</h1>
                
                <p className='mt-2'>There are trending books,<br/>see the details of books here.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='mt-5 text-center mb-5'>
        <button className="btn btn-outline btn-error">More Services</button>
        </div>
 
        </div>
    );
};

export default Services;