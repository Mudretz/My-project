import React from 'react';

const NavBar = () => {
    return (
        <header>
            <div className="header__links">
                <a href="#">Главная</a>
                <a href="#">История</a>
            </div>
            <div className="header__item">
                <a href="#">Баланс</a>
                <div className="avatar">
                    <img src="avatar.png" alt="аватар"></img>
                </div>
            </div>
        </header>
    );
};
 
export default NavBar;