import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <div className="logo">&#60;/&#62;</div>
            <ul className="nav">
                <li><a href="#home">Главная</a></li>
                <li><a href="#about">Обо мне</a></li>
                <li><a href="#resume">Резюме</a></li>
                <li><a href="#work">Опыт работы</a></li>
                <li><a href="#contacts">Контакты</a></li>
            </ul>
        </div>
    )
};

export default Header;