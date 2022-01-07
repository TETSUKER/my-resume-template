import React, { useState } from "react";
import './Header.scss';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link } from 'react-scroll';
import {
    AppBar,
    Toolbar,
    useMediaQuery,
    useTheme,
    Drawer,
    IconButton,
    ListItem,
    ListItemText
    } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { StylesProvider } from '@material-ui/core';

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

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(false);
    const links = [
        {title: 'Главная', target: 'Home', offset: -250},
        {title: 'Обо мне', target: 'About', offset: -90},
        {title: 'Резюме', target: 'Resume', offset: -100},
        {title: 'Навыки', target: 'Skills', offset: -90},
        {title: 'Контакты', target: 'Contacts', offset: -150}
    ]

    return (
        <StylesProvider injectFirst>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <div className='Header'>
                            <div className='Header__logo'>&#60;/&#62;</div>
                            {isMobile ? (
                                <>
                                    <Drawer
                                        open={openDrawer}
                                        onClose={() => setOpenDrawer(false)}
                                    >
                                    {links.map((link, key) => {
                                        return (
                                            <ListItem key={key} onClick={() => setOpenDrawer(false)}>
                                                <ListItemText>
                                                    <Link
                                                        to={link.target}
                                                        spy={true}
                                                        smooth={true}
                                                        duration={500}
                                                        offset={link.offset}
                                                        className='Link'>
                                                        {link.title}
                                                    </Link>
                                                </ListItemText>
                                            </ListItem>
                                        )
                                    })}
                                    </Drawer>
                                    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                                        <MenuIcon />
                                    </IconButton>
                                </>
                                ) : (
                                <ul className='Header__nav'>
                                    {links.map((link, key) => {
                                        return (
                                            <li key={key}>
                                                <Link
                                                    to={link.target}
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                    offset={link.offset}
                                                    className='Link'>
                                                    {link.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </StylesProvider>
    )
};

export default Header;