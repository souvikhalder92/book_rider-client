import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
    const [error,setError] = useState('');
  
    const {createUser,updateUser} = useContext(AuthContext);
  
    const handleSubmit = (event) =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
  
      console.log(name,photoURL,email,password);
  
      createUser(email,password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate('/home');
      })
      .catch(e => {
        console.log(e);
        setError(e.message)
       })
    }
    return (
        <div>
              <div className="w-11/12 lg:w-96 mx-auto shadow-2xl p-8 rounded-md mt-4 bg-gray-300 mb-6">
        <h3 className='text-center text-4xl font-bold text-sky-800 mb-5'>Register</h3>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <h1 className='text-left mb-2 font-semibold'>Name</h1>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered input-light w-full max-w-xs" required
              />
            </div>
            <div className="mb-3">
              <h1 className='text-left mb-2 font-semibold'>PhotoURL</h1>
              <input
                type="text"
                placeholder="Your PhotoURL"
                name="photoURL"
                className="input input-bordered input-light w-full max-w-xs" required
              />
            </div>
            <div className="mb-3">
              <h1 className='text-left mb-2 font-semibold'>Email Address</h1>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered input-light w-full max-w-xs" required
              />
            </div>
            <div className="mb-3">
            <h1 className='text-left mb-1 font-semibold'>Password</h1>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                className="input input-bordered input-light w-full max-w-xs" required
              />
            </div>
            <div className="mb-2">
             <p className='text-left text-red-400'>{error}</p>            
            </div>
            <button type="submit" className="btn btn-secondary text-slate-800 font-bold ml-32">
             Submit
            </button>
          </form>
          
           
        </div>
        </div>
    );
};

export default SignUp;