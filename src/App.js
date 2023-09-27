// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Experience from './Pages/Experience';
import Hero from './Pages/Hero';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
// import BackTop from './Components/BackTop';
// import React {useState} from 'react'


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
