import React from 'react';
import Header from './components/Header';
import SearchList from "./components/SearchList"

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
          <SearchList />
        </div>
      </div>
    </>
  );
}

export default App;