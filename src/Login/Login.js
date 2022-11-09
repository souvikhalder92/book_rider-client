import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const Login = () => {
    const [error,setError] = useState('');
    const navigate = useNavigate();  
    const {providerLogin,signIn } = useContext(AuthContext);
    const location = useLocation();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
   

  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from,{replace: true});

    })
    .catch(error => console.log(error))

  }

  const notify = () => toast("Thank You!Successfully Login!");

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const form = event.target;   
    const email = form.email.value;
    const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
          const user = result.user;
          setError('');
          const currentUser = {
            email: user.email
        }
        console.log(currentUser);
        form.reset();
        //get jwt token
        fetch('http://localhost:5000/jwt',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            localStorage.setItem('token',data.token);
            navigate(from,{replace: true});
        })
        })
         .catch(e => {
          console.log(e);
          setError(e.message)
         })
        }
    return (
        <div>
        <div className="w-10/12 lg:w-96 mx-5 lg:mx-auto shadow-2xl p-8 rounded-md mt-14 bg-gray-300 mb-20">
        <h3 className='text-center text-4xl font-bold text-sky-800 mb-5'>Login</h3>
          <form onSubmit={handleSubmitLogin}>
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
            <button onClick={notify} type="submit" className="btn btn-success text-slate-800 font-bold mx-32">
            Submit 
            </button>
          <ToastContainer/>
          </form>
            <div className='mt-3 mx-10'>
                <p className='text-xl font-semibold'>OR,Login With Social Link</p>
            </div>
            <div className="flex justify-center  mt-3">
            <button  onClick={handleGoogleSignIn} className=" flex justify-center items-center rounded-md  text-center border-sky-500">
              <FaGoogle className="mr-3 text-sky-700"></FaGoogle>
            </button>
          </div>
          <p className="text-slate-900 font-semibold mt-3 ml-12">
              Are You New User? <Link to="/register" className="text-sky-800">
               Register
              </Link>
            </p>
        </div>
      </div>
    );
};

export default Login;