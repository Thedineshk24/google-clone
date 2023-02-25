import React, { useState } from 'react';
import Modal from './Modal';

const Header = () => {
    const [showGoogleModal, setShowGoogleModal] = useState(false);

    const handleModal = () => {
        setShowGoogleModal(!showGoogleModal);
    }
    return (
        <div className='flex justify-between pt-5 bg-gray-100'>
            <div className='flex ml-5'>
                <a href="/" className='mr-5'>About</a>
                <a href="/" className='mr-5'>Store</a>
            </div>
            {showGoogleModal ? <Modal onClose={handleModal} /> :
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md mr-5' onClick={handleModal}>Google Settings</button>}
        </div>
    );
};

export default Header;
