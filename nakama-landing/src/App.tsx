import "./index.css";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Projects from "./components/Projects";
import Collection from "./components/Collection";
import Philosophy from "./components/Philosophy";
import Technology from "./components/Technology";
import Process from "./components/Process";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSlider />

        <Projects />

        <Collection />

        <Philosophy />

        <Technology />

        <Process />

        <Contact />
      </main>

      <footer className="footer">
        <p>nakama</p>
        <p>Diseño y fabricación de muebles a medida</p>
      </footer>
    </>
  );
}

export default App;