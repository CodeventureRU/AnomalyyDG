import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="copyright" data-text={`anomalyy ${new Date().getFullYear()}`}>
                @copyright
            </div>
        </footer>
    );
};

export default Footer;