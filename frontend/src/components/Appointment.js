import { useEffect } from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";

import contactimg from '../assets/images/dentistry3.png';
import {add} from '../actions/dent';


export default function Appointment(props) {

    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        uploadFile: '',
        message: '',
        role: "patient",

    });
    useEffect(()=>{

    })

    const handleChange = (e)=>{
        setNewUser({...newUser, [e.target.name]: e.target.value});

    };

    const handleFile = (e)=>{
        setNewUser({...newUser, [e.target.name]: e.target.files[0]})
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', newUser.name);
        formData.append('email', newUser.email);
        formData.append('phone', newUser.phone);
        formData.append('subject', newUser.subject);
        formData.append('message', newUser.message);
        formData.append('uploadFile', newUser.uploadFile);
        formData.append('role', newUser.role);

        dispatch(add(formData))
        .then(()=>{
            window.location.reload(true);
        })
    }

    return (
        <div className='md:flex flex-row mx-12 space-x-12 font-["Quicksand"]'>
            <div className="flex flex-col  md:w-1/2 appoinment-form my-8">
                <div className="mt-5 text-[#008F9B]">
                    <h1 className="text-3xl font-bold text-center">Appointment</h1>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="flex flex-col space-y-8 my-8">
                        <div className="flex flex-row justify-between space-x-8">
                            <div className="w-1/2">
                                <input type="text" placeholder="Name" className="w-full py-4 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-[#008F9B]"
                                name='name'
                                onChange={handleChange} required />
                            </div>
                            <div className="w-1/2">
                                <input type="email" placeholder="Email" className="w-full py-4 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-[#008F9B]"
                                name='email'
                                onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between space-x-8">
                            <div className="w-1/2">
                                <input type="phone" placeholder="Phone" className="w-full py-4 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-[#008F9B]"
                                name='phone'
                                onChange={handleChange} required />
                            </div>
                            <div className="w-1/2">
                                <input type="text" placeholder="Subject" className="w-full py-4 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-[#008F9B]"
                                name='subject'
                                onChange={handleChange} required />
                            </div>
                        </div>
                        <div>
                            <label for="fileupload" className="sr-only">Fileupload</label>

                            <div className="relative">
                                <input
                                    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    type="file"
                                    id="formFile"
                                    name='uploadFile'
                                    onChange={handleFile}
                                    required />
                            </div>
                        </div>
                        <div>
                            <textarea name="message" cols="30" rows="10" placeholder="Message" className="w-full py-2 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-[#008F9B]"
                            onChange={handleChange}></textarea>
                        </div>
                        <div className="col-span-2 text-center">
                                <button className="w-[200px] bg-[#008F9B] text-white py-4 px-6 rounded-md hover:bg-white hover:border-[#008F9B] hover:border-2 hover:text-[#008F9B]">Submit</button>
                        
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-col  md:w-1/2 appoinment-form my-8 space-y-5 ">
                <div className='  '>
                    <img src={contactimg} alt='contactimage' className='rounded-xl'/>

                </div>

                <div className=''>
                    <h1 className='text-xl'>CONTACT INFORMATION</h1>
                    <h1 className='text-lg'>Location</h1>
                    <p>Call:</p>
                    <p>Fax:</p>
                    <p>Email:</p>

                </div>

            </div>
        </div>
    )
}