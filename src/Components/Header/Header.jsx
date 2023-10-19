import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Screenshot_2023-10-17_203936-removebg-preview.png"
import { useContext } from "react";
import { AuthContext } from "../Login/Firebase/AuthProvider";
// import { TbLogin2,TbLogin} from 'react-icons/tb';






const Header = () => {

    const { user, logOut } = useContext(AuthContext)


    const hendleSignOut = () => {
        logOut()
            .then(() =>
                console.log("logout done"))
            .catch(error => console.log(error.massage))
    }




    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#000000]  underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to={"/"}><img className="w-32" src={Logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="ml-auto  mr-8 hidden items-center gap-2 lg:flex">
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#000000]  underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/Addproduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#000000]  underline" : ""
                                }
                            >
                                Add Product
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#000000]  underline" : ""
                                }
                            >
                                My Cart
                            </NavLink>
                        </li>
                        {
                                user ? (
                                    <>
                                        <li onClick={hendleSignOut} className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                            <NavLink
                                                to="/SignIn"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#000000] underline" : ""
                                                }
                                            >
                                                Sign Out
                                            </NavLink>
                                        </li>

                                    </>
                                ) : (<>
                                    <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                        <NavLink
                                            to="/SignIn"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#000000] underline" : ""
                                            }
                                        >
                                            Sign In
                                        </NavLink>
                                    </li>

                                </>)
                            }

                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {/* <TbLogin2></TbLogin2>
                        <TbLogin></TbLogin> */}


                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="mx-3 btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        {
                                    user && (<>
                                        <div className="">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img src={user?.photoURL} />

                                                </div>
                                            </label>

                                        </div>
                                    </>)
                                }
                        </label>




                    </div>
                </div>
            </div>






        </div>
    );
};

export default Header;