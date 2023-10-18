
import { useLoaderData } from 'react-router-dom';

const BrandCardDetails = () => {
    const Details =useLoaderData()
    const {name,brand,photoURL,type,price,shortDescription,rating,_id} = Details
    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-9 py-12">


                <div className="hero rounded-lg h-[36rem]" style={{ backgroundImage: `url(${photoURL})` }}>
                    <div className="hero-overlay rounded-b-lg h-32 mt-[28rem]  bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="mt-[28rem] lg:mr-[62rem]">


                            <button  className="px-6 py-4 rounded-md text-white bg-[#FF444A]">Price ${price}</button>
                        </div>
                    </div>
                </div>

                <h2 className="mb-2 block mt-14 font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
                    {name}
                </h2>
                <p className="block font-sans text-[15px] font-normal leading-relaxed text-gray-700 antialiased">
                    {shortDescription}
                </p>
            </div>
        </div>
    );
};

export default BrandCardDetails;