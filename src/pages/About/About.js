import React from 'react';
import s5 from '../../img/s5.jpg'

const About = () => {
    return (
        <div>
 <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
   <div className='relative w-1/2'>
   <img src={s5} className="w-full  h-full rounded-lg shadow-2xl mr-96" alt='' />
   </div>
    <div className='w-1/2 ml-5'>
        <p className='text-3xl text-yellow-600 font-bold'>About Us</p>
      <h1 className="my-4 text-5xl font-bold">We provide <br/> our
       best service.<br/></h1>
      <p className="py-6">This is for books lover.We try our <br/> best for people.</p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;