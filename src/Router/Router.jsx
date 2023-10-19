/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../Error/Error";
import Addproduct from "../Components/Home/AddProduct/Addproduct";
import Ourproduct from "../Components/Home/AddProduct/Ourproduct";
import Nike from "../Components/Body/Brand/Nike";
import Adidas from "../Components/Body/Brand/Adidas";
import Gucci from "../Components/Body/Brand/Gucci";
import Zara from "../Components/Body/Brand/Zara";
import HM from "../Components/Body/Brand/HM";
import Levie from "../Components/Body/Brand/Levies";
import Levies from "../Components/Body/Brand/Levies";
import UpdateProduct from "../Components/Home/AddProduct/UpdateProduct";
import BrandCardDetails from "../Components/Body/Brand/BrandCard/BrandCardDetails/BrandCardDetails";
import Register from "../Components/Login/Register";
import SignIn from "../Components/Login/SignIn";
import PrivateRoute from "../Components/Login/PrivateRoute";



const Router = createBrowserRouter([
    {
        path :"/",
       element :<MainLayOut></MainLayOut> ,
       errorElement :<Error></Error>,
       children :[
        {
            path : "/",
            element : <Home></Home>,
           
        },
        {
            path : "/Addproduct",
            element : <Addproduct></Addproduct>,
           
        },
        {
            path : "/Nike",
            element :<PrivateRoute><Nike></Nike></PrivateRoute> ,
            loader : () =>fetch('http://localhost:5000/product')
           
        },
        {
            path : "/Adidas",
            element : <PrivateRoute><Adidas></Adidas></PrivateRoute>,
            loader : () =>fetch('http://localhost:5000/product')
           
        },
        {
            path : "/Gucci",
            element : <PrivateRoute><Gucci></Gucci></PrivateRoute>,
            loader : () =>fetch('http://localhost:5000/product')
           
        },
        {
            path : "/Zara",
            element : <PrivateRoute><Zara></Zara></PrivateRoute>,
            loader : () =>fetch('http://localhost:5000/product')
           
        },
        {
            path : "/H&M",
            element :<PrivateRoute><HM></HM></PrivateRoute> ,
            loader : () =>fetch('http://localhost:5000/product')
           
        },
        {
            path : "/Levi's",
            element : <PrivateRoute><Levies></Levies></PrivateRoute>,
            loader : () =>fetch('http://localhost:5000/product')
           
        },
        {
            path : "/Ourproduct",
            element : <Ourproduct></Ourproduct>,
            loader : () =>fetch('http://localhost:5000/product')
           
        },
        {
            path : "/UpdateProducat/:id",
            element : <UpdateProduct></UpdateProduct>,
            loader : ({params}) =>fetch(`http://localhost:5000/product/${params.id}`)
           
        },
        {
            path : "/Details/:id",
            element : <BrandCardDetails></BrandCardDetails>,
            loader : ({params}) =>fetch(`http://localhost:5000/product/${params.id}`)
           
        },
        {
            path : "/Register",
            element : <Register></Register>,
            
            
            
            
        },
        {
            path : "/SignIn",
           element: <SignIn></SignIn>
            
            
            
            
        },
        
        
       ]
       
    }
])

export default Router;