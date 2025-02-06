import React from "react";
import LandingHeader from "../components/LandingHeader";
import { CalenderCard, FoodCard, WorkoutCard } from "../components/Card";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import backgroundImage from "../assets/icons/test-background.jpeg";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed font-exo2"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <LandingHeader title="Anatomics" subtitle="Sign In" />
      <main className="flex flex-col items-center justify-center text-center text-white mt-20 h-96">
        <h1 className="text-6xl font-bold mb-4 text-shadow-big-dark">
          Welcome to Anatomics
        </h1>
        <p className="text-xl mb-8 text-shadow-dark">
          Your Ultimate Fitness Companion
        </p>
        <LoginButton text="Get Started" width="140px" height="50px" />
      </main>
      <div className="mt-20 p-8 bg-black bg-opacity-50">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Features
        </h2>
        <hr className="border-t border-gray-300 my-5" />
        <div className="grid grid-cols-3 mb-6">
          <WorkoutCard />
          <FoodCard />
          <CalenderCard />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center text-white mt-20 h-96">
        <h1>Call To Action</h1>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
