import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center py-32 px-6 bg-gradient-to-b from-indigo-100 to-white">
            <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-indigo-700 mb-4"
            >
                Hi, I’m Abrar 👋 
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl"
            >
                A passionate developer working on <span className="font-semibol text-indigo-600">Web Developer</span> and <span className="font-semibold text-indigo-600">Machine Learning</span> projects.
            </motion.p>
        </section>
    );
};

export default Hero;