import React from 'react';
import BicepIcon from '/assets/icons/bicep.png';
import CalenderIcon from '/assets/icons/calendar.png';
import FoodIcon from '/assets/icons/dish.png';

const Card = ({ title, text, icon: Icon, link, variant }) => {
    const variantStyles = {
        default: "bg-gray-800 text-white",
        secondary: "bg-gray-600 text-white"
    };

    const selectedStyle = variantStyles[variant] || variantStyles.default;

    return (
        <div className={`m-6 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${selectedStyle} min-h-[520px] flex flex-col`}>
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
                <p className="text-gray-300 text-lg text-center">{text}</p>
            </div>

            {Icon && ( // only shows if icon is present
                <div className='mt-12 mb-12 p-6 flex flex-col items-center'>
                    <img src={Icon} alt="icon" className="w-24 h-24" />
                </div>
            )}
            
            <div className="mt-auto pt-6 flex flex-col items-center">
                <button className="bg-red-600 text-white px-6 py-3 rounded text-lg hover:bg-red-700 transition-colors duration-200">
                    More Info
                </button>
            </div>
        </div>
    );
};

export const WorkoutCard = () => (
    <Card
     title="Workouts"
     text="3D Models of what your working when your working"
     icon={BicepIcon}
    />
);

export const FoodCard = () => (
    <Card
     title="FoodPlan"
     text="Maximize what you put out, with what you put in"
     icon={FoodIcon}
     variant="secondary"
    />
);

export const CalenderCard = () => (
    <Card
     title="Calender"
     text="To run around a track you have to stay on track"
     icon={CalenderIcon}
    />
);

export default Card;