import React from 'react'
import './Home.css'
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import Contact from '../AboutMe/ContactMe/Contact';


export default function Home() {

  return (
    <div className="Home-container">

        <Navbar/>
        <Profile/>
        <Footer/>
        <AboutMe/>
        <Projects/>
        <Education/>
        <Contact/>
    </div>
  )
}
