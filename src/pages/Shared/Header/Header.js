import React from 'react';
import { Link } from 'react-router-dom';
import s1 from '../../../img/s1.png';
import { FaAccusoft, IconName } from "react-icons/fa";




const Header = () => {
    return (
        <div className="navbar h-20 bg-neutral ">
        <div className="flex-1">
       
        <FaAccusoft  className="text-4xl font-bold text-yellow-600 ml-2"></FaAccusoft><Link to='/' className="text-3xl font-bold text-yellow-600 ml-2" >Book Rider</Link>
        
        </div>
       
        <div className="block lg:flex mr-5">
          <ul className="menu lg:menu-horizontal p-0">
            <li className='text-xl text-yellow-600'><Link to="/home">Home</Link></li>
           
            <li className='text-xl text-yellow-600'><Link to="/">Blog</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;