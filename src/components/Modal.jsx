import React from 'react';
import { FaCog, FaTimes, FaChevronLeft, FaLock, FaEdit } from 'react-icons/fa';

const Modal = ({ onClose }) => {
    return (
        <div className="fixed top-0 right-0 w-96 h-full bg-gray-100 border border-gray-600 z-50">
            <div className="flex items-center justify-between px-4 py-3 bg-grey-400">
                <div className="flex items-center">
                    <button className="text-gray-200 hover:text-white mr-3">
                        <FaChevronLeft />
                    </button>
                    <h2 className="text-black text-lg font-semibold">Settings</h2>
                </div>
                <div>
                    <button className="text-black hover:text-grey-600">
                        <FaCog />
                    </button>
                    <button className="text-black hover:text-grey-600 ml-3" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
            </div>
            <div className="p-4">
                <div className="mb-6 flex flex-col justify-center items-center">
                    <img className="w-20 h-20 object-fit rounded-full border-4 border-blue-900" src={"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="Profile" />
                    <div className="ml-4 flex flex-col items-center">
                        <h3 className="text-black font-semibold text-lg mb-1">Sandra Silva</h3>
                        <div className="flex items-center">
                            <button className="text-black hover:text-gray-600"><FaEdit /></button>
                            <span className="text-blue-600 ml-2">Edit Profile Picture</span>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-black block mb-1" htmlFor="first-name">First Name</label>
                    <input className="w-full rounded px-3 py-2 bg-gray-200 border border-gray-700 text-gray-200" type="text" id="first-name" name="first-name" />
                </div>
                <div className="mb-4">
                    <label className="text-black block mb-1" htmlFor="last-name">Last Name</label>
                    <input className="w-full rounded px-3 py-2 bg-gray-200 border border-gray-700 text-gray-200" type="text" id="last-name" name="last-name" />
                </div>
                <div className="mb-4">
                    <label className="text-black block mb-1" htmlFor="email">Email</label>
                    <div className="flex items-center">
                        <span className="text-black mr-2 font-semibold">sandra@zoom.com</span>
                    </div>
                </div>
                <div className="mb-4">
                    <button className="text-black hover:text-white"><FaLock /></button>
                    <button className="text-black hover:text-white ml-3">Change Email</button>
                </div>
                <div className="mb-4">
                    <label className="text-black block mb-1" htmlFor="password">Password</label>
                    <div className="flex items-center">
                        <button className="text-black hover:text-white"><FaLock /></button>
                        <button className="text-black hover:text-white ml-3">Change Password</button>
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <button className="w-44 px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">Save</button>
                </div>

            </div>
        </div>
    );
};

export default Modal;
