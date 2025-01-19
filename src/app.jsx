import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container flex">
        <div className="menu-section">
          <div className="menu-title">
            <h1>Main Menu</h1>
          </div>
          <a href="pages/anatomy.html" className="boton-elegante"><span>Anatomy</span></a>
          <a href="pages/trainingRoutine.html" className="boton-elegante"><span>Training Routine</span></a>
          <a href="pages/calendar.html" className="boton-elegante"><span>Calendar</span></a>
          <a href="pages/foodSearch.html" className="boton-elegante"><span>Food Search</span></a>
        </div>  
        <div className="checklist-section w-1/3">
          <div className="text-center menu-title pt-4">
            <h1>Lifts-To-Do</h1>
          </div>
          <div className="checklist-section-search mb-6 px-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search lifts..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="px-4 flex-1 checkbox-section-list">
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 w-full h-full">
              <div className="space-y-2 h-full overflow-y-auto">
                {/* Checklist items */}
                <div className="flex items-center p-3 hover:bg-white rounded-lg transition-colors duration-150">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  <label className="ml-3 text-gray-700">Bench Press</label>
                </div>
                {/* ... Repeat for other exercises ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;