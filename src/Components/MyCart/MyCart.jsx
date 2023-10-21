/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import MyCartData from "./MyCartData";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Login/Firebase/AuthProvider";



const MyCart = () => {
    const cartData =useLoaderData()
     const [myCartData, setMyCartData]= useState(cartData)
    
     

    const { user } = useContext(AuthContext)
    const email = user?.email
    
    
    
    useEffect(() => {
        const file = cartData?.filter(cart => cart.email == email)
        setMyCartData(file);


    }, [cartData])   

    console.log(myCartData.length);
    

   
    
    
     
    
    return (
        <div className="mt-10">
            <div>
                    {
                        myCartData.length > 0 ? '' : <h1 className="text-xl lg:text-5xl font-semibold text-center">No Cart Data Here !!!!!!!</h1> 
                    }
                </div>
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