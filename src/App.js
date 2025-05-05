import logo from './logo.svg';
import './App.css';
import { Header } from './Components/HeadersFile';
 // Ensure the correct path
 import { About } from "./Components/About";
 import Project from "./Components/Project"
import Hero from "./Components/Hero"
import Contacts from "./Components/Contacts"
import Navbar from './Components/Navbar';
import Heros from './Components/Heros';
import Abouts from './Components/Abouts'
import Projects from'./Components/Projects'
import Footer from './Components/Footer';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter
     basename="/portfolio"
     >
    <div className="App">
      <Navbar />
      <Heros />
      <Abouts />
      <Projects />
      <Contacts />
      {/* <Footer /> */}
    </div>
  </BrowserRouter>
  );
}

export default App;
