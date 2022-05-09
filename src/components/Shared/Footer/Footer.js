import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h5 className="site-footer-copyright">@ Copyright <span>{new Date().getFullYear()}</span></h5>
        </footer>
    );
};

export default Footer;