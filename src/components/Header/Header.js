import React from 'react';

const Header = () => {

    return (
        <nav className='nav'>
            <section className='nav__container'>
                <div className='nav__label'>
                    <ul className='nav__duo'>
                        <li className='nav__logo'>Logo</li>
                        <li className='nav__name'>Username</li> 
                    </ul>
                </div>
            </section>
        </nav>
    );
};

export default Header;