import Link from 'next/link';
import React from 'react';

const NotFound = () => {

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="-mb-2 text-7xl font-extrabold text-red-500 animate-bounce shadow-none bg-gray-900">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
            <p className="text-lg text-gray-400 mt-2">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;