import React from 'react';
import './styles.scss';

import Logo from './../../assets/logo.png';

const Header = props => {
    return (
        <header className="header">
            <div className='wrap'>
                <div className='logo'>
                    <img src={Logo} alt='ecom logo'></img>
                </div>
            </div>
        </header>
    )

};
export default Header;
