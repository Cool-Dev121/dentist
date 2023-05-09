import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/auth";


export default function Header() {
    const [navbar, setNavbar] = useState(false);
    const {isLoggedIn} = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlelogin = () => {
        dispatch(logout())
        .then(()=>{
            navigate("/");
        });
    };
    return (
        <div>
            <nav className="w-full bg-white fixed top-0  shadow z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl text-[#008F9B] md:items-center md:flex md:px-8 font-['Quicksand']">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="#">
                                <h2 className="text-5xl font-bold">Denturo</h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-xl ">
                                <li className="p-2 hover:bg-[#008F9B] hover:text-white hover:rounded-lg">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="p-2 hover:bg-[#008F9B] hover:text-white hover:rounded-lg">
                                    <Link to="/service">Service</Link>
                                </li>
                      
                                <li className="p-2 hover:bg-[#008F9B] hover:text-white hover:rounded-lg">
                                    <Link to="/aboutus">About Us</Link>
                                </li>
                                <li className="p-2 hover:bg-[#008F9B] hover:text-white hover:rounded-lg">
                                    <Link to="/contactus">Contact Us</Link>
                                </li>
                                {isLoggedIn?(<li className="bg-[#008F9B] text-white hover:bg-white hover:text-[#008F9B] border-2 border-solid border-[#008F9B] rounded-lg px-3 py-1">
                                    <Link onClick={handlelogin}>Logout</Link>
                                </li>):
                                (<li className="bg-[#008F9B] text-white hover:bg-white hover:text-[#008F9B] border-2 border-solid border-[#008F9B] rounded-lg px-3 py-1">
                                    <Link to="/login">Login</Link>
                                </li>)}
                                
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}