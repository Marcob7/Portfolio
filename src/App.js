import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Ervaring from "./components/Ervaring";
//import Projecten from "./components/Projecten";
import Work from "./components/Work";
//import { Route, HashRouter as Router, Routes } from "react-router-dom";
//import Goo from 'gooey-react'


function App() {
  return ( 
    <>
   
    <Navbar /> 
    <Home />
    <About />
    <Ervaring /> 
    <Work />
    <Contact /> 
   
    </>
  );
}

export default App;
