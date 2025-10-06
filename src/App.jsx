import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 flex flex-col items-center justify-center">
            <Navbar />
            <div className="backdrop-blur-lg bg-gray-900/30 border border-gray-700/40 rounded-3xl shadow-2xl p-10 w-11/12 md:w-3/4 lg:w-2/3 my-10">
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
