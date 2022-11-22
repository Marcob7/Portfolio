import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Learning from "./components/Learning";
import Ervaring from "./components/Ervaring";
//import Projecten from "./components/Projecten";
import Work from "./components/Work";
import Personal from "./components/Personal";
//import { Route, HashRouter as Router, Routes } from "react-router-dom";
//import Goo from 'gooey-react'


//temp place this here so it appears on the whole app.
function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
} else {
  reveals[i].classList.remove("active");
}
}
}

window.addEventListener("scroll", reveal);


function App() {
  return ( 
    <>
   
    <Navbar /> 
    <Home />
    <About />
    <Learning />
    <Ervaring /> 
    <Personal />
    <Work />
    <Contact /> 
   
    </>
  );
}

export default App;
