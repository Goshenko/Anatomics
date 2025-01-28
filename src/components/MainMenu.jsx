import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-cover bg-center font-exo2" style={{ backgroundImage: "url('not set yet')" }}>
            <header className="flex justify-between items-center p-5 bg-black bg-opacity-50">
                <div className="text-white text-2xl font-bold">Anatomics</div>
                <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleClick}>Sign In</button>
            </header>
            <main className="flex flex-col items-center justify-center text-center text-white mt-20">
                <h1 className="text-6xl font-bold mb-4">Welcome to Anatomics</h1>
                <p className="text-xl mb-8">Your ultimate fitness companion</p>
                <button className="bg-red-600 text-white px-6 py-3 rounded text-lg" onClick={handleClick}>Get Started</button>
            </main>
            <section className="mt-20 p-10 bg-black bg-opacity-50">
                <h2 className="text-3xl font-bold text-white mb-6">Features</h2>
                <div className="space-y-40">
                    <div className="bg-gray-800 p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Workouts</h3>
                        <p>3D Models of what your working when your working.</p>
                        <div className="mt-10">
                            {/* Placeholder for additional info and images */}
                            <p>More info about Workouts...</p>
                            <img src="/path/to/workouts-image.jpg" alt="Workouts" className="mt-4" />
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 my-10" />
                    <div className="bg-gray-700 p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Food plan</h3>
                        <p>Maximize what you put out, with what you put in.</p>
                        <div className="mt-10">
                            {/* Placeholder for additional info and images */}
                            <p>More info about Food plan...</p>
                            <img src="/path/to/food-plan-image.jpg" alt="Food plan" className="mt-4" />
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 my-10" />
                    <div className="bg-gray-800 p-6 rounded">
                        <h3 className="text-xl font-bold mb-2">Calendar</h3>
                        <p>To run around a track you have to stay on track.</p>
                        <div className="mt-10">
                            {/* Placeholder for additional info and images */}
                            <p>More info about Calendar...</p>
                            <img src="/path/to/calendar-image.jpg" alt="Calendar" className="mt-4" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainMenu;
