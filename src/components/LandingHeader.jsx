import React from 'react';

const LandingHeader = ({ title, subtitle }) => {
    return (
        <header className="flex justify-between items-center p-5 bg-black bg-opacity-50">
            <div className="text-white text-2xl font-bold">{title}</div>
            <button className="bg-red-600 text-white px-4 py-2 rounded">{subtitle}</button>
        </header>
    );
};

export default LandingHeader;
