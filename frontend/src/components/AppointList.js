import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAppoint, getAllData } from "../actions/dent";
import usePagination from "./Pagination";
import { Pagination } from "@mui/material";
import Modal from "./Modal";
import fileimg from '../assets/images/icon-file-22.jpg';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";


export default function AppointList() {
    const appoints = useSelector(state => state.appoints);
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const [tableData, setTableData] = useState([]);

    const [searchTitle, setSearchTitle] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const count = Math.ceil(tableData.length / pageSize);
    const _DATA = usePagination(tableData, pageSize);
    const [appView, setAppView] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getAllData(user.role));
        setTableData(appoints);
        console.log(appoints.length);
    }, [appoints.length]);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    const onChangeSearchTitle = e => {
        setSearchTitle(e.target.value);
        let filtered;
        if (e.target.value !== '') {
            filtered = appoints.filter(str => str.name.includes(e.target.value));
            setTableData(filtered);
        } else {
            setTableData(appoints);
        }
    };
    const removeAppoint = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteAppoint(id))
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        });

    }
    const viewAppoint = (person) => {
        setAppView(person);
        setShowModal(true);
    };
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <>
            <div className="flex flex-col pt-24">
                <hi className="capitalize pt-4 text-4xl text-center font-mono font-bold text-[#008F9B]">{user.role} details</hi>
                <div className="overflow-x-auto">
                    <div className="flex justify-between py-3 pl-2">
                        <div className="relative max-w-xs">
                            <label htmlFor="hs-table-search" className="sr-only">
                                Search
                            </label>
                            <input
                                type="text"
                                name="hs-table-search"
                                id="hs-table-search"
                                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500"
                                placeholder="Search..."
                                value={searchTitle}
                                onChange={onChangeSearchTitle}
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <svg
                                    className="h-3.5 w-3.5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                        </div>
                        {user.role === "dentist" ? (<Modal role={user.role} />) : null}

                    </div>

                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 ">
                                <thead className=" bg-gray-100">
                                    <tr>
                                        {user.role === 'laboratory' ? (<th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left  uppercase "
                                        >
                                            role
                                        </th>) : ("")}

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            phone
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            subject
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            message
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            upload
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            upload date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 ">
                                    {_DATA.currentData() ? (_DATA.currentData().map((person, index) => (
                                        <tr className="hover:bg-blue-100 " key={index} >

                                            {person.role === 'dentist' && user.role === 'laboratory' ? (<td className="px-6 py-4 text-sm font-medium  text-red-500">
                                                {person.role}
                                            </td>) : person.role === 'dentist' && user.role === 'dentist' ? ("") : (<td className="px-6 py-4 text-sm font-medium   text-blue-500">
                                                {person.role}
                                            </td>)}
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 ">
                                                {person.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 ">
                                                {person.email}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 ">
                                                {person.phone}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 ">
                                                {person.subject}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 overflow-hidden break-all ">
                                                {person.message}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 ">
                                                {person.file ? (<Link href={"uploads/appointment/" + person.file} target="_blank" className="hover:text-purple-500 "><img className="w-6 h-6 hover:text-purple-500" src={fileimg} alt="image" />{"." + person.file.split(".")[1]}</Link>) : null}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800 overflow-hidden break-all ">
                                                {person.createdAt}
                                            </td>
                                            <td class="py-3 px-6">
                                                <div class="flex item-center ">
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" title="view" onClick={() => viewAppoint(person)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </div>
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" title="delete" onClick={() => removeAppoint(person._id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))) : null}
                                </tbody>

                            </table>
                            <div className="rounded-t mb-0 px-4 py-4 border-0 bg-gray-100">
                                <div className=" flex flex-row ">

                                    <Pagination
                                        count={count}
                                        page={page}
                                        variant="outlined"
                                        shape="rounded"
                                        onChange={handleChange}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModal ? (<div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => toggleModal(false)}
                    ></div>
                    <div className="flex items-center min-h-screen py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">

                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h1 className="text-3xl dark:text-white font-['Josefin Sans]">
                                    {appView.role}:
                                    <small className="text-[#0fac81]"> {appView.name}</small>
                                </h1>
                            </div>
                            <div className="mt-3 ">
                                <div className="mt-2 text-center sm:mx-4 sm:text-left">
                                    <p className="mt-2 text-[15px] leading-relaxed ">
                                        Email: <span className="text-[#0fac81]">{appView.email}</span>
                                    </p>
                                </div>
                                <div className="mt-2 text-center sm:mx-4 sm:text-left">
                                    <p className="mt-2 text-[15px] leading-relaxed ">
                                        PhoneNumber: <span className="text-[#0fac81]">{appView.phone}</span>
                                    </p>
                                </div>
                                <div className="mt-2 text-center sm:mx-4 sm:text-left">
                                    <p className="mt-2 text-[15px] leading-relaxed ">
                                        Subject: <span className="text-[#0fac81]">{appView.subject}</span>
                                    </p>
                                </div>
                                <div className="mt-2 text-center sm:mx-4 sm:text-left">
                                    <p className="mt-2 text-[15px] leading-relaxed ">
                                        FileName: <span className="text-[#0fac81]">{appView.file}</span>
                                    </p>
                                </div>
                                <div className="mt-2 text-center sm:mx-4 sm:text-left">
                                    <p className="mt-2 text-[15px] leading-relaxed ">
                                        Message: <br /><span className="overflow-hidden break-all ">{appView.message}</span>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : null
            }
        </>
    );
}