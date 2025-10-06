import React from "react";

const Footer = () => {
    return (
        <footer className="py-6 bg-indigo-600 text-center text-white text-sm">
            © {new Date().getFullYear()} Md. Abrar Rahman Shafin. All rights reserved.
        </footer>
    );
};

export default Footer;