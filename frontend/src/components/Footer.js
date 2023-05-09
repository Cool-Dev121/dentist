import { Link } from "react-router-dom";


export default function Footer() {


    return (

        <footer className="bg-[#008F9B] rounded-lg shadow dark:bg-gray-900 m-4 text-white font-['Quicksand']">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">

                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">Denturo</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-mediumsm:mb-0 dark:text-gray-400">
                        <Link to={"/"}>
                            <span className="mr-4 hover:underline md:mr-6 ">Home</span>
                        </Link>
                        <Link to={"/service"}>
                            <span className="mr-4 hover:underline md:mr-6">Service</span>
                        </Link>
                        <Link to={"/aboutus"}>
                            <span className="mr-4 hover:underline md:mr-6 ">About Us</span>
                        </Link>
                        <Link to={"/contactus"}>
                            <span className="hover:underline">Contact Us</span>
                        </Link>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm  sm:text-center dark:text-gray-400 ">© 2023 <span className="hover:underline">Denturo™</span>. All Rights Reserved.</span>
            </div>
        </footer>


    );
}