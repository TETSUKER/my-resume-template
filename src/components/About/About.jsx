import React from 'react';
import { withNamespaces } from 'react-i18next';

import Container from '@mui/material/Container';

import i18n from '../../i18n';

import './About.scss';

const About = ({ t }) => {
    return (
        <Container className='About'>
            <div className='title-text'>{t('about.title')}</div>
            <div className='About__bio'>
                <div className='card About__bio-photo-block'>
                    <img src={require('../../assets/images/avatar.jpg')} className='photo' alt='avatar' />
                    <div className='About__bio-photo-block__bottom'>
                        <div className='name'>{t('about.name')}</div>
                        <div className='birthday'>{t('about.birthday')}</div>
                    </div>
                </div>
                <div className='minor-text'>{t('about.info')}</div>
            </div>
        </Container>
    )
}

export default withNamespaces()(About);