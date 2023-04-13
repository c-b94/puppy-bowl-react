import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect } from "react";
import "./App.css";
import RenderAllPuppies from "./RenderAllPuppies";
import RenderSinglePup from "./RenderSinglePup";
import  NewPuppyForm  from "./NewPuppyForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <div className="heading-container">
        <h1 id="heading">Puppy Bowl</h1>
          <nav id="navbar">
            <Link to="/">Home</Link>
            <Link to="/form">submit pupper</Link>
          </nav>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <RenderAllPuppies/>
            }
          />
          <Route
            path="/:dogid"
            element = {<RenderSinglePup/>}
          />
          <Route
            path="/form"
            element = {<NewPuppyForm/>}
          />
        </Routes>
    
      </div>
    </BrowserRouter>
  );
}

export default App;
