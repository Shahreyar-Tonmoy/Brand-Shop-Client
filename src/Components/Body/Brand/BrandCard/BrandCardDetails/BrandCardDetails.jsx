/* eslint-disable no-unused-vars */

import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Login/Firebase/AuthProvider';
import { Rating } from '@mui/material';

const BrandCardDetails = () => {
    const Details =useLoaderData()
    const { user } = useContext(AuthContext)
    const email= user.email;
    console.log(email);
    const {name,brand,photoURL,type,price,shortDescription,rating,} = Details
    

    const handleMyCart=()=>{
        const cart = { name, brand, type, price, shortDescription, rating, photoURL,email }
        
        fetch('https://adidas-server-side.vercel.app/mycart', {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(cart)
    })
    .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Add Cart Succesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  
                  
                  
            }
        })



    }


    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-9 py-12">


                <div className="hero rounded-lg h-[36rem]" style={{ backgroundImage: `url(${photoURL})` }}>
                    <div className="hero-overlay rounded-b-lg h-32 mt-[28rem]  bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="mt-[28rem] lg:mr-[62rem]">


                            <button onClick={handleMyCart}  className="px-6 py-4 rounded-md btn border-none text-white bg-[#FF444A] hover:bg-[#FF444A]">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <h2 className="mb-2 block mt-14 font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
                    {name}
                </h2>
                <h2 className="mb-2 block  font-sans text-xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
                    Brand: {brand}
                </h2>
                <h2 className="mb-2 block  font-sans text-xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
                Type: {type}
                </h2>
                <h2 className="mb-2 block  font-sans text-xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
                    Price: {price}
                </h2>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                <p className="block font-sans text-[15px] font-normal leading-relaxed text-gray-700 antialiased">
                    {shortDescription}
                </p>
            </div>
        </div>
    );
};

export default BrandCardDetails;