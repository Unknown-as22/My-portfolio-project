import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Projects2 from "./pages/Projects2";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className=" flex flex-col min-h-screen">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Projects2" element={<Projects2/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        <Footer />
      </div>  
      </BrowserRouter>
    </>
  );
}

export default App;
