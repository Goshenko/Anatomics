import React from 'react';
import LoginButton from './LoginButton';

const LandingHeader = ({ title, subtitle }) => {
    return (
        <header className="flex justify-between items-center p-5 bg-black bg-opacity-50">
            <div className="text-white text-2xl font-bold">{title}</div>
            <LoginButton
                text="Sign In"
                width="100px"
                height="50px"
            />
        </header>
    );
};

export default LandingHeader;
