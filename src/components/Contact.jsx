import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-8 bg-white">
            <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-indigo-700 mb-8"
            >
                Get in Touch
            </motion.h2>

            <p className="text-center text-gray-600 mb-6">
                Have a project in mind or just want to say hello? Reach out below!
            </p>

            <div className="flex justify-center">
                <a 
                href="mailto:your@email.com"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
                >
                    Say Hello 👋
                </a>
            </div>
        </section>
    );
};

export default Contact;