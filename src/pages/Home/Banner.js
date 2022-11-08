import React from 'react';
import s2 from  '../../img/s2.jpg';
import s3 from  '../../img/s3.jpg';
import s6 from  '../../img/s6.jpg';

const Banner = () => {
    return (
      <div className='h-3/4 w-10/12 mx-auto'>
        <div className="carousel mt-5 mb-0">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={s6} className="w-full   object-fill rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={s3} className="w-full object-fill  rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={s2} className="w-full object-fill rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
       
      </div>
      </div>
    );
};

export default Banner;