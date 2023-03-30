import React from 'react';
import '../Footer/Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__social'>Twitter</p>
            <p className='footer__social'>LinkedIn</p>
            <p className='footer__social'>Github</p>
            <p className='footer__text'>© AKM Inc. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;