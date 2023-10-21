/* eslint-disable no-unused-vars */
import { useContext } from "react";

import icon from '../../assets/Screenshot_2023-10-17_203936-removebg-preview.png'
import { AuthContext } from "../Login/Firebase/AuthProvider";


const ContactUs = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <div className="relative  flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto mt-20">
                <img src={icon} alt="" />
                <div className="p-6 pt-0 text-center">
                    <h2 className=" text-2xl mt-2">Fashion Store</h2>
                    <h1 className="text-lg mt-2"> 3096 Progress Way, Tripoli,United States</h1>
                    <h1 className="mt-2">(+1)319-882-9011</h1>
                    <h1 className="mt-2">shahreyartonmoy@gmail.com</h1>

                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;