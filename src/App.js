import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from "./Pages/Navbar";
import { Projects } from './Pages/Projects';
import { AboutMe } from "./Pages/AboutMe";
import { Skills } from './Pages/Skills';
import { Contact } from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="about" class="about section">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects" style={{marginTop:"10vh"}}>
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
      <a
        href="https://wa.me/+919318411328"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
