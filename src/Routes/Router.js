import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import AllServices from "../Services/AllServices";

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
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/allservices',
                element:<AllServices></AllServices>
            }
        ]

    }
])

export default router;