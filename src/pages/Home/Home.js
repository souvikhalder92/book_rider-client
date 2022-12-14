import React from 'react';
import Faq from '../../FAQ/Faq';
import useTitle from '../../hooks/useTitle';
import Services from '../../Services/Services';
import About from '../About/About';
import Banner from './Banner';


const Home = () => {
    useTitle('Home');
    return (
        <div className=''>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Faq></Faq>
            
            
        </div>
    );
};

export default Home;