import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import "./main.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
