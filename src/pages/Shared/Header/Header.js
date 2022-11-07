import React from 'react';
import { Link } from 'react-router-dom';
import s1 from '../../../img/s1.png';




const Header = () => {
    return (
        <div className="navbar h-20 bg-gray-300">
        <div className="flex-1">
        <img src={s1} className="w-16  ml-0 lg:ml-5 mt-2" alt="" />
        <Link to='/' className="text-2xl lg:text-4xl font-bold text-yellow-600 ml-0" >Book Rider</Link>
        
        </div>
       
        <div className="block lg:flex mr-5">
          <ul className="menu lg:menu-horizontal p-0">
            <li className='text-xl'><Link to="/home">Home</Link></li>
           
            <li className='text-xl'><Link to="/">Blog</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;