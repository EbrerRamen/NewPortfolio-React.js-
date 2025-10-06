import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className ="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 flex flex-col items-center justify-center">
            <Navbar />
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 w-11/12 md:w-3/4 lg:w-2/3 my-10">
            <Hero />
            <About />
            <Projects />
            <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default App;