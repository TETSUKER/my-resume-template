import React from 'react';
import { withNamespaces } from 'react-i18next';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import i18n from '../../i18n';

import './Home.scss';

const Home = ({ t }) => {
    return (
        <Container className='Home'>
            <div className='title-text Home__name'>{t('home.name')}</div>
            <div className='minor-text Home__info'>{t('home.info')}</div>
            <a href='/files/TokminRoman.pdf' target='_blank' download>
                <Button className='minor-text Button' variant='contained'>{t('home.download')}</Button>
            </a>
        </Container>
    )
};

export default withNamespaces()(Home);