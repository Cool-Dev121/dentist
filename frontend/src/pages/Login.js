import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Navigate} from "react-router-dom";

import { clearMessage } from "../actions/message";
import { signin } from "../actions/auth";
import LoginHeader from '../components/LoginHeader';
import { useTranslation } from 'react-i18next';
import ChangeLang from '../components/ChangeLang';
import denturo from '../assets/images/about-banner1.png';
import denturoAnimated from '../assets/images/cleaner.png';




export default function Login() {

    const form = useRef();
    // const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [loading, setLoading] = useState(true);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.auth);

    const { message } = useSelector(state => state.message);
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(clearMessage());

    }, []);
    const dispatch = useDispatch();

    const handleChange = (e) => {

        const value = e.target.value;
        const targetname = e.target.name;
        if (targetname === 'email') {
            setEmail(value);

        } else if (targetname === 'password') {

            setPassword(value);
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        // setLoading(true);
        dispatch(signin(email, password))
            .then(() => {
                // setLoading(true);
            })
            .catch(() => {
                // setLoading(false);
            })
    }

    if (isLoggedIn) {

        if (user.role === 'dentist') {
            return <Navigate to="/dentist"/>;

        } else if (user.role === 'laboratory') {
            return <Navigate to="/laboratory"/>;

        } else {
            return <Navigate to="/"/>;
       
        }
    }

    return (
        <>
            <div>
                <ChangeLang />
                <section className=" flex flex-wrap lg:h-screen lg:items-center font-['Quicksand']">

                    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-2 lg:py-24">

                        <LoginHeader
                            heading={t('header.signin.heading')}
                            paragraph={t('header.signin.paragraph')}
                            linkName={t('header.signin.link')}
                            linkUrl="/signup"
                        />
                        <form className="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={handleSubmit} ref={form}>
                            <div>
                                <label for="email" className="sr-only">Email</label>

                                <div className="relative">
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        required="true"
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                        placeholder="Enter email"
                                        onChange={handleChange}
                                    />

                                    <span
                                        className="absolute inset-y-0 right-0 grid place-content-center px-4"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label for="password" className="sr-only">Password</label>

                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required="true"
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm   "
                                        placeholder="Enter password"
                                        onChange={handleChange}
                                        minLength={8}
                                    />

                                    <span
                                        className="absolute inset-y-0 right-0 grid place-content-center px-4"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            {/* <div className="flex items-center justify-between ">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                        ref={checkBtn}
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        {t('rememberme')}
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-[#00ADEF] hover:text-blue-500">
                                        {t('forgot')}
                                    </a>
                                </div>
                            </div> */}

                            <div className="flex items-center justify-between">

                                <button
                                    type="submit"
                                    className="w-full inline-block rounded-lg bg-[#008F9B] px-5 py-3 text-sm font-medium text-white hover:bg-white hover:border-2 hover:border-[#008F9B] hover:text-[#008F9B]"
                                >
                                    {t('btn.signin.title')}
                                </button>
                            </div>
                            {message && (
                                <div className="form-group">
                                    <div className={isLoggedIn ? "font-regular relative mb-4 block w-full rounded-lg bg-green-500 p-4 text-base leading-5 text-white opacity-100" : "font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100"} role="alert">
                                        {message}
                                    </div>
                                </div>

                            )}

                        </form>

                    </div>
                    <div className="w-full mx-auto sm:w-1/2 md:w-1/2 relative ">
                        <img src={denturo} alt="Denturo" />
                        <img src={denturoAnimated} alt="Denturo" className=" absolute left-[35px] bottom-0 " />
                    </div>
                </section>
            </div>



        </>
    )
}