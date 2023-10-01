import './App.css';

import Header from './Components/Header/Header'
import Experience from './Pages/Experience';
import Hero from './Pages/Hero';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Button from './Components/button/Button';


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Button/>
      <Contact/>
    </>
  );
}

export default App;
