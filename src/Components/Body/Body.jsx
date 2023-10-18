/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import bgImg from '../../assets/xcat_fw23_holiday_matchingsets_oct_onsite_mh_lg_group_d_63eb8a3a23.jpg';


const Body = () => {
    return (
        <div>
            <div className="bg-contain bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className=' text-left pt-60 pl-32'>
                    <h1 className='text-5xl font-bold text-white'>GIFT STYLE</h1>
                    <p className='text-white text-lg mt-3'>Find fun matching sets and tracksuits in bold colors<br /> for everyone on your list.</p>
                    <button
                        className="flex mt-6 select-none items-center bg-[#701F5E]  gap-3 rounded-md text-base py-3 px-6 text-center align-middle font-sans font-bold uppercase text-white cursor-default"

                    >
                        Shop Now



                    </button>

                </div>

            </div>

            <div className='flex items-center justify-center'>
                <div className=''>
                    <h1 className='text-3xl underline font-semibold'>Popular brand right now</h1>


                    <div>
                        <div className='flex mt-10 gap-6'>
                            <Link to="/Nike" className=' hover:underline'>
                                <div className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src="/src/assets/Brand img/Nike.png" alt="" className="rounded-xl w-44" />
                                    </figure>
                                    <div className="card-body items-center text-center -mt-12">
                                        <h2 className="text-7xl">Nike</h2>

                                    </div>
                                </div></Link>
                            <Link to="/Adidas" className='hover:underline'>
                                <div className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src="/src/assets/Brand img/Adidas.png" alt="" className="rounded-xl w-56" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="text-7xl">Adidas</h2>

                                    </div>
                                </div>
                            </Link>
                            <Link to="/Gucci" className='hover:underline'>
                                <div className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src="/src/assets/Brand img/Gucci.png" alt="" className="rounded-xl w-44" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="text-7xl">Gucci</h2>

                                    </div>
                                </div></Link>
                        </div>
                        <div className='flex mt-10 gap-6'>
                            <Link to="/Zara" className='hover:underline'>
                                <div className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src="/src/assets/Brand img/Zara.png" alt="" className="rounded-xl w-48" />
                                    </figure>
                                    <div className="card-body items-center text-center mt-10">
                                        <h2 className="text-7xl">Zara</h2>

                                    </div>
                                </div>
                            </Link>
                            <Link to="/H&M" className='hover:underline'>
                                <div className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src="/src/assets/Brand img/HM.png" alt="" className="rounded-xl w-48" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="text-7xl">H&M</h2>

                                    </div>
                                </div>
                            </Link>
                            <Link to="/Levi's" className='hover:underline'>
                                <div className="card w-96  ">
                                    <figure className="px-10 pt-10">
                                        <img src="/src/assets/Brand img/Levis.png" alt="" className="rounded-xl w-40" />
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
    );
};

export default Body;