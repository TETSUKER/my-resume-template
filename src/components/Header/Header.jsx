import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-scroll';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Header = (props) => {
    return (
        
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <div className='Header'>
                            <div className='Header__logo'>&#60;/&#62;</div>
                            <ul className='Header__nav'>
                                <li>
                                    <Link
                                        to='Home'
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-250}
                                        className='Link'>
                                        Главная
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to='About'
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-150}
                                        className='Link'>
                                        Обо мне
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='Resume'
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-150}
                                        className='Link'>
                                        Резюме
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='Skills'
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-120}
                                        className='Link'>
                                        Навыки
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='Contacts'
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-150}
                                        className='Link'>
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
    )
};

export default Header;