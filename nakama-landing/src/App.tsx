import "./index.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Projects from "./components/Projects";
import Collection from "./components/Collection";
import Philosophy from "./components/Philosophy";
import Technology from "./components/Technology";
import Process from "./components/Process";
import Contact from "./components/Contact";

import Cocinas from "./pages/Cocinas";
import Playroom from "./pages/Playroom";
import Placards from "./pages/Placards";
import Habitaciones from "./pages/Habitaciones";
import Comerciales from "./pages/Comerciales";
import Vanitory from "./pages/Vanitory";
function Home() {

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

        <p>
          Diseño y fabricación de muebles a medida
        </p>

      </footer>


    </>

  );

}



function App() {

  return (

    <Routes>


      <Route 
        path="/" 
        element={<Home />} 
      />


      <Route 
        path="/cocinas" 
        element={<Cocinas />} 
      />


      <Route 
        path="/playroom" 
        element={<Playroom />} 
      />


      <Route 
        path="/placards" 
        element={<Placards />} 
      />


      <Route 
        path="/habitaciones" 
        element={<Habitaciones />} 
      />

      <Route 
  path="/comerciales" 
  element={<Comerciales />} 
/>


<Route 
    path="/vanitory" 
    element={<Vanitory />} 
/>

    </Routes>

  );

}


export default App;