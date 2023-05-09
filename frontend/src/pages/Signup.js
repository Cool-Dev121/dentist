import LoginHeader from "../components/LoginHeader";
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions/auth";
// import { useNavigate } from "react-router-dom";
import { clearMessage } from "../actions/message";
import { useTranslation } from "react-i18next";
import ChangeLang from '../components/ChangeLang';
import denturo from '../assets/images/about-banner1.png';
import denturoAnimated from '../assets/images/cleaner.png';


export default function Signup() {

    const { t } = useTranslation();

    const [successful, setSuccessful] = useState(false);

    const [newUser, setNewAuthor] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        photo: '',
        role: 'patient'
    })
    const [role, setRole] = useState();
    const Changerole = (e)=>{
        setRole(e.target.value);
        setNewAuthor({ ...newUser, role: e.target.value })

    }
    const handleChange = (e) => {
        setNewAuthor({ ...newUser, [e.target.name]: e.target.value })
    }

    const handlePhoto = (e) => {
        setNewAuthor({ ...newUser, photo: e.target.files[0] })
    }


    const checkPasswords = () => {
        if (newUser.password !== "" && newUser.confirm_password !== "" && newUser.password !== newUser.confirm_password)
            return false;

        else
            return true;

    }

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const form = useRef();
    // const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearMessage());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', newUser.username);
        formData.append('email', newUser.email);
        formData.append('password', newUser.password);
        formData.append('photo', newUser.photo);
        formData.append('role', newUser.role);

        if (checkPasswords() === true) {

            dispatch(signup(formData))
            .then(() => {
                setSuccessful(true);
            })
            .catch((error) => {

            });
        }
    }

    return (
        <>
            <div>
                <ChangeLang />
                <div className="w-1/3 lg:w-32 absolute left-1/3 ">
                    <select id="underline_select" class="block py-2.5 px-4 mx-2 my-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        onChange={Changerole} >
                        <option selected value="patient">Choose a Role</option>
                        <option value='dentist'>Dentists</option>
                        <option value='laboratory'>Laboratory</option>
                    </select>
                </div>
                <section className=" flex flex-wrap lg:h-screen lg:items-center font-['Quicksand']">
                    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">

                        <LoginHeader
                            heading={t('header.signup.heading')}
                            paragraph={t('header.signup.paragraph')}
                            linkName={t('header.signup.link')}
                            linkUrl="/login"
                        />
                        <form className="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={handleSubmit} ref={form} encType="multipart/form-data">
                            <div>
                                <label for="username" className="sr-only">Username</label>

                                <div className="relative">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required="true"
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                        placeholder="Enter username"
                                        onChange={handleChange}
                                    />
                                    <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
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
                            <div>
                                <label for="password" className="sr-only">Password</label>
                                <div className="relative">
                                    <input
                                        id="confirm_password"
                                        name="confirm_password"
                                        type="password"
                                        required="true"
                                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm   "
                                        placeholder="Enter confirm-password"
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
                            {checkPasswords() === true ? "" : <h1 className=" text-red-700">Password not match</h1>}
                            <div>
                                <label for="fileUpload" className="sr-only">Filepload</label>

                                <div className="relative">
                                    <input
                                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                        type="file"
                                        name="photo"
                                        id="photo"
                                        accept="*"
                                        onChange={handlePhoto} />

                                </div>
                            </div>
                            <div className="flex items-center justify-between">

                                <button
                                    type="submit"
                                    className="w-full inline-block rounded-lg bg-[#008F9B] px-5 py-3 text-sm font-medium text-white hover:bg-white hover:border-2 hover:border-[#008F9B] hover:text-[#008F9B]"
                                >
                                    {t('btn.signup.title')}
                                </button>
                            </div>
                            {message && (
                                <div className="form-group">
                                    <div className={successful ? "font-regular relative mb-4 block w-full rounded-lg bg-green-500 p-4 text-base leading-5 text-white opacity-100" : "font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100"} role="alert">
                                        {message}
                                    </div>
                                </div>

                            )}
                        </form >
                    </div>
                    <div className="w-full md:w-1/2 relative mx-auto">
                        <img src={denturo} alt="Denturo" />
                        <img src={denturoAnimated} alt="Denturo" className=" absolute left-[35px] bottom-0 " />
                    </div>

                </section>

            </div>
        </>
    )
}