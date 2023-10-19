import { useLoaderData } from "react-router-dom";
import MyCartData from "./MyCartData";
import { useContext } from "react";
import { AuthContext } from "../Login/Firebase/AuthProvider";
;


const MyCart = () => {

    const { user } = useContext(AuthContext)
    const email = user.email
    
    
    const cartData =useLoaderData() 
    const myCartData =cartData.filter(e => e.email.includes(email) )
    
    return (
        <div>
            <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    myCartData?.map(data => <MyCartData key={data._id} MyCart={data} ></MyCartData>)
                }
            </div>
        </div>
    );
};

export default MyCart;