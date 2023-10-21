/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import Adidas from "/Assignment/Assignment-10/Adidas-client-side/src/assets/Brand img/Adidas.png"
import Nike from "/Assignment/Assignment-10/Adidas-client-side/src/assets/Brand img/Nike.png"
import Zara from "/Assignment/Assignment-10/Adidas-client-side/src/assets/Brand img/Zara.png"
import Gucci from "/Assignment/Assignment-10/Adidas-client-side/src/assets/Brand img/Gucci.png"
import HM from "/Assignment/Assignment-10/Adidas-client-side/src/assets/Brand img/HM.png"
import Levis from "/Assignment/Assignment-10/Adidas-client-side/src/assets/Brand img/Levis.png"
import BodySlider from '../Slider/BodySlider';


const Body = () => {
    return (
        <div>
            <div>
                <BodySlider></BodySlider>


            </div>

            <div className='flex items-center justify-center'>
                <div className='mt-20'>
                    <h1 className='text-3xl text-center lg:text-left underline font-semibold'>Popular brand right now</h1>


                    <div>
                        <div className='lg:flex mt-10 gap-6'>
                            <Link to="/Nike" className=' hover:underline'>
                                <div data-aos="fade-up" className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src={Nike} alt="" className="rounded-xl w-44" />
                                    </figure>
                                    <div className="card-body items-center text-center -mt-12">
                                        <h2 className="text-7xl">Nike</h2>

                                    </div>
                                </div></Link>
                            <Link to="/Adidas" className='hover:underline'>
                                <div data-aos="fade-up" className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src={Adidas} alt="" className="rounded-xl w-56" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="text-7xl">Adidas</h2>

                                    </div>
                                </div>
                            </Link>
                            <Link to="/Gucci" className='hover:underline'>
                                <div data-aos="fade-up" className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src={Gucci} alt="" className="rounded-xl w-44" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="text-7xl">Gucci</h2>

                                    </div>
                                </div></Link>
                        </div>
                        <div className='lg:flex mt-10 gap-6'>
                            <Link to="/Zara" className='hover:underline'>
                                <div data-aos="fade-up" className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src={Zara} alt="" className="rounded-xl w-48" />
                                    </figure>
                                    <div className="card-body items-center text-center mt-10">
                                        <h2 className="text-7xl">Zara</h2>

                                    </div>
                                </div>
                            </Link>
                            <Link to="/H&M" className='hover:underline'>
                                <div data-aos="fade-up" className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src={HM} alt="" className="rounded-xl w-48" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="text-7xl">H&M</h2>

                                    </div>
                                </div>
                            </Link>
                            <Link to="/Levi's" className='hover:underline'>
                                <div data-aos="fade-up" className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src={Levis} alt="" className="rounded-xl w-40" />
                                    </figure>
                                    <div className="card-body items-center text-center -mt-10">
                                        <h2 className="text-7xl">Levi's</h2>

                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
};

export default Body;