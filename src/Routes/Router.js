import Main from "../Layout/Main";
import Login from "../Login/Login";
import AddService from "../pages/AddService/AddService";
import Alert from "../pages/Alert/Alert";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Reviews from "../pages/Reviews/Reviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import AllServices from "../Services/AllServices";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
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
            },
            {
                path:'/itemadd',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/allservices')
            },
            {
                path:'/reviewsadd',
                element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
            }
        ]

    },
    {
        path:'*',
        element:<Alert></Alert>
    }
])

export default router;