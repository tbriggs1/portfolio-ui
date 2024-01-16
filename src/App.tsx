import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
