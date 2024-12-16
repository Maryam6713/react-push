import React from "react";
import Header from "./Header";
import './Header.css'

function App() {
    return (
      
      <div className="App">
        {/* Navbar */}
        <Header/>
  
        {/* Main Content
        <header className="App-header">
          <h1>Welcome to My React App "Maryam"</h1>
        </header> */}
  
        {/* Section with Left Text and Right Image */}
        <div className="App-content">
          <div className="content-left">
            <h1>React Start</h1>
         
            <p>React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components.React. js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code.</p>
            <button><a href="./Contact.jsx">Click here</a></button>
          </div>
          <div className="content-right">
            <img 
              src={logo}
              alt="Example" 
              style={{ width: '500px', height: '250px', borderRadius: '8px' }} 
            />
          </div>
        </div>
      </div>
    );
  }
export default App;
