import './App.css'
import { Loading } from './components/Loading';
import './index.css';
import { useState } from 'react';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import About from './components/sections/About';
import Navbar from './components/Navbar';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (<>
  {!isLoaded && <Loading onComplete={() => setIsLoaded(true)}/>}{" "}
  <div
    className={`min-h-screen transition-opacity duration-700 ${
      isLoaded ? "opacity-100" : "opacity-0"
    }`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
  </div>
    
  </>);
}

export default App 
