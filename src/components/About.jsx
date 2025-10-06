import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 px-8 bg-white">
            <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-indigo-700 mb-8"
            >
                About Me
            </motion.h2>

            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-gray-600 leading-relaxed"
            >
                This section will describe who you are, your background, and what inspires you to build amazing things
            </motion.p>
        </section>
    );
};

export default About;