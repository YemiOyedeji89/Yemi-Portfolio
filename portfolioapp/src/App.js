import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/homePage/Home";
import ProjectGallery from "./components/pages/projects/projectsGallery/ProjectGallery";
import Tools from "./components/pages/Tools/Tools";
import Contact from "./components/pages/Contact";
import ProjectDetails from "./components/pages/projects/projectsGallery/ProjectDetails";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>

      <div className="App">
        <Navbar/>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="projectgallery/*" element={<ProjectGallery/>} />
         <Route path="projectgallery/:id" element={<ProjectDetails/>} />
         <Route path="Tools" element={<Tools />} />
         <Route path="Contact" element={<Contact />} />
        </Routes>

        <Footer/>
      </div>

    </Router>
   
  );
}

export default App;
