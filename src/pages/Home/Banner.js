import React from 'react';
import s2 from  '../../img/s2.jpg';
import s3 from  '../../img/s3.jpg';
import s4 from  '../../img/s4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-50">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={s2} className="w-full h-3/5 mx-auto object-fill" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-52">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={s3} className="w-full h-3/5 object-fill" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-52">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={s4} className="w-full h-3/5 object-fill" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-52">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
       
      </div>
    );
};

export default Banner;