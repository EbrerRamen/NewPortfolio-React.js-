import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50"
        >
            <h1 className="text-2xl font-bold text-indigo-600">Md. Abrar Rahman Shafin</h1>
            <ul className="flex space-x-6 front-medium">
                <li className="hover:text-indigo-600 cursor-pointer">Home</li>
                <li className="hover:text-indigo-600 cursor-pointer">About</li>
                <li className="hover:text-indigo-600 cursor-pointer">Projects</li>
                <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
            </ul>
        </motion.nav>

    );
};

export default Navbar;