import React from 'react';
import { FaMicrophone } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google logo"
          className="w-72 h-24 mb-10"
        />
        <div className="flex items-center border border-gray-300 rounded-full w-full px-5 py-3 hover:shadow-md focus-within:shadow-md">
          <input
            type="text"
            placeholder="Search Google or type a URL"
            className="w-full outline-none border-none focus:border-none bg-transparent"
          />
          <FaMicrophone className="ml-2 text-gray-400" />
        </div>
        <div className="flex justify-center mt-7 space-x-4">
          <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm focus:outline-none">
            Google Search
          </button>
          <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm focus:outline-none">
            I'm Feeling Lucky
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
