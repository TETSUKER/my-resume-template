import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { withNamespaces } from 'react-i18next';

import {useScrollTrigger, Button} from '@mui/material';
import {
    AppBar,
    Toolbar,
    useMediaQuery,
    useTheme,
    Drawer,
    IconButton,
    ListItem,
    ListItemText,
    StylesProvider
    } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import i18n from '../../i18n';

import './Header.scss';

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

const Header = ({ t }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(false);
    const links = [
        {title: t('header.home'), target: 'Home', offset: -250},
        {title: t('header.about'), target: 'About', offset: -90},
        {title: t('header.resume'), target: 'Resume', offset: -100},
        {title: t('header.skills'), target: 'Skills', offset: -90},
        {title: t('header.contacts'), target: 'Contacts', offset: -150}
    ]

    return (
        <StylesProvider injectFirst>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <div className='Header'>
                            <img src={require(`../../assets/images/${t('lang')}.png`)} className="langBtn"
                                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')} />
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

export default withNamespaces()(Header);