import Main from "../Layout/Main";
import Login from "../Login/Login";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import AllServices from "../Services/AllServices";
import SignUp from "../SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/allservices',
                element:<AllServices></AllServices>
            },
            {
                path:'/servicedetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/allservices/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            }
        ]

    }
])

export default router;