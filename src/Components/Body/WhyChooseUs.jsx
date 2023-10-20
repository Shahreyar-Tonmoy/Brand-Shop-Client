/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import icon1 from '/Assignment/Assignment-09/src/assets/icon4.png'
import icon2 from '/Assignment/Assignment-09/src/assets/icon5.png'
import icon3 from '/Assignment/Assignment-09/src/assets/icon6.png'


const WhyChooseUs = () => {
    return (
       <div className=" mb-5  ">
         <div className="text-center pt-20 bg-[#F3F3F3]">
            <h1 className="mb-5 text-3xl font-semibold">Why Choose Us?</h1>
            <h1 className="mb-14">A choice that makes the difference.</h1>
            <div className="grid  md:grid-cols-2  lg:grid-cols-3 max-w-screen-xl mx-auto lg:px-20 lg:pb-20">
                <div
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                className="relative mt-6  flex w-80 flex-col rounded-xl mx-auto bg-white bg-clip-border text-gray-700 shadow-xl">
                    <div className="p-6">
                        <img className="mx-auto w-40" src={icon1} alt="" />
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Highly Sell
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        The nature of an educational experience by taking as its starting point Dewey's Art as Experience in order to identify .
                        </p>
                    </div>
                    
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                className="relative mt-6 flex w-80 flex-col rounded-xl mx-auto bg-white bg-clip-border text-gray-700 shadow-xl">
                    <div className="p-6">
                        <img className="mx-auto" src={icon2} alt="" />
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Top Brands
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                       The nature of an educational experience by taking as its starting point Dewey's Art as Experience in order to identify.
                        </p>
                    </div>
                    
                </div>
                <div 
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                className="relative mt-6 flex w-80 flex-col rounded-xl mx-auto bg-white bg-clip-border text-gray-700 shadow-xl">
                    <div className="p-6">
                        <img className="mx-auto" src={icon3} alt="" />
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Dedicated Support
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        The nature of an educational experience by taking as its starting point Dewey's Art as Experience in order to identify.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
       </div>
    );
};

export default WhyChooseUs;