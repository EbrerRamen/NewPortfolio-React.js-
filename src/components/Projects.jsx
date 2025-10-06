import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        { title: "Web Project Placeholder", description: "A sample project showcasing web development skills." },
        { title: "ML Project Placeholder", description: "A sample machine learning project placeholder." },
    ];

    return (
        <section id="projects" className="py-20 px-8 bg-indigo-50">
            <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-indigo-700 mb-12"
            >
                Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projects.map((p, i) => (
                    <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-2xl shadow-md p-6"
                    >
                        <h3 className="text-xl font-semibold text-indigo-600 mb-2">{p.title}</h3>
                        <p className="text-gray-600">{p.description}</p>
                    </motion.div>
                ))
                }
            </div>
        </section>
    );
};

export default Projects;