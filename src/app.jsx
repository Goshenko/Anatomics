import React from 'react';
import Header from './components/Header';
import SearchList from "./components/SearchList"
import MainMenu from './components/MainMenu';

function App() {
  return (
    <>
      <Header />
      <div className="container flex">
        <div className="w-full">
          <MainMenu />
        </div>  
      </div>
    </>
  );
}

export default App;