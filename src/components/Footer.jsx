import React from "react";

const Footer = () => {
    return (
        <footer className="py-6 bg-gray-900/30 border-t border-gray-700/40 text-center text-gray-300 text-sm backdrop-blur-md">
            © {new Date().getFullYear()} Md. Abrar Rahman Shafin. All rights reserved.
        </footer>
    );
};

export default Footer;