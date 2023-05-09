import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../actions/dent';



const Modal = (props) => {

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        uploadFile: '',
        message: '',
        role: props.role,

    });

    useEffect(()=>{

    });
    const handleChange = (e) => {

        setNewUser({ ...newUser, [e.target.name]: e.target.value });

    };

    const handleFile = (e) => {

        setNewUser({ ...newUser, [e.target.name]: e.target.files[0] })
    };

    const handleSubmit = (e) => {
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
            .then((res) => {
                setShowModal(false);
                // window.location.reload();
             
            })
            .catch((err) => {
                console.log(err)
            });


    }

    return (
        <>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                    className=" p-2.5 flex-1 bg-[#008F9B]  text-white hover:bg-white hover:border-2 hover:border-[#008F9B] hover:text-[#008F9B] rounded-md outline-none ring-offset-2 ring-[#008F9B] focus:ring-2"
                    onClick={() =>
                        setShowModal(true)
                    }
                >
                    Add Appointment
                </button>
            </div>
            {
                showModal ? (<div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => toggleModal(false)}
                    ></div>
                    <div className="flex items-center min-h-screen py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <div className="mt-3 ">
                                <div className="mt-2 text-center sm:mx-4 sm:text-left">
                                    <h4 className="text-lg font-medium text-gray-800">
                                        Add an appointment ?
                                    </h4>
                                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                       Please fit your appoinment below.
                                    </p>
                                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                                        <div className="flex flex-col space-y-4 my-4">
                                            <div className="">
                                                <input type="text" placeholder="Name" className="w-full py-2 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-[#008F9B]"
                                                    name='name'
                                                    onChange={handleChange} required />
                                            </div>
                                            <div className="">
                                                <input type="email" placeholder="Email" className="w-full py-2 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-[#008F9B]"
                                                    name='email'
                                                    onChange={handleChange} required />
                                            </div>
                                            <div className="">
                                                <input type="phone" placeholder="Phone" className="w-full py-2 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-[#008F9B]"
                                                    name='phone'
                                                    onChange={handleChange} required />
                                            </div>
                                            <div className="">
                                                <input type="text" placeholder="Subject" className="w-full py-2 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-[#008F9B]"
                                                    name='subject'
                                                    onChange={handleChange} required />
                                            </div>
                                            <div>
                                                <label for="fileupload" className="sr-only">Fileupload</label>

                                                <div className="relative">
                                                    <input
                                                        class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-[#008F9B] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-[#008F9B]"
                                                        type="file"
                                                        id="formFile"
                                                        name='uploadFile'
                                                        onChange={handleFile}
                                                        required />
                                                </div>
                                            </div>
                                            <div>
                                                <textarea name="message" cols="10" rows="5" placeholder="Message" className="w-full py-2 px-4 rounded-md border-gray-400 focus:outline-none focus:border-2 focus:border-[#008F9B] "
                                                    onChange={handleChange}></textarea>
                                            </div>
                                            <div className="items-center gap-2 mt-3 sm:flex">
                                                <button
                                                    className="w-full mt-2 p-2.5 flex-1 bg-[#008F9B] rounded-md outline-none ring-offset-2 ring-[#008F9B] focus:ring-2  text-white hover:bg-white hover:border-2 hover:border-[#008F9B] hover:text-[#008F9B]"
                                                >
                                                    Sunbmit
                                                </button>
                                                <button
                                                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-[#008F9B] focus:ring-2"
                                                    onClick={() =>
                                                        setShowModal(false)
                                                    }
                                                >
                                                    Cancel
                                                </button>


                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : null
            }
        </>
    );
};
export default Modal;

