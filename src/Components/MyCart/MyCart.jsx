/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import MyCartData from "./MyCartData";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Login/Firebase/AuthProvider";
;


const MyCart = () => {
    const cartData =useLoaderData()
     const [myCartData, setMyCartData]= useState(cartData)
    //  const [filter,setFilter]=useState()
     

    // const { user } = useContext(AuthContext)
    // const email = user?.email
    // console.log(email);
    
    
    // useEffect(() => {
    //     const file = cartData?.filter(cart => cart.email == email)
    //     setFilter(file);


    // }, []);
    

   
    
    
     
    // const products =cartData?.filter(e => e.email.includes(email) )
    // console.log(products);
    
    return (
        <div className="mt-10">
            <div className=" max-w-screen-xl mx-auto grid  gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    myCartData?.map(data => <MyCartData key={data._id} MyCart={data}
                        myCartData={myCartData}
                        setMyCartData={setMyCartData}

                        
                        ></MyCartData>)
                }
            </div>
        </div>
    );
};

export default MyCart;