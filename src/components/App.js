import React from "react";
import NavBar from "./components/NavBar"; // Use the correct relative path to NavBar component
import Home from "./components/Home"; // Use the correct relative path to Home component
import About from "./components/About"; // Use the correct relative path to About component

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
