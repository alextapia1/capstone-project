import React from 'react';
import '../Footer/Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
                <a href="https://twitter.com/alex7apia" className='footer__social'>Twitter</a>
                <a href="https://www.linkedin.com/in/alex-tapia-/" className='footer__social'>LinkedIn</a>
                <a href="https://github.com/alextapia1" className='footer__social'>GitHub</a>
            <p className='footer__text'>© AKM Inc. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;