import React from 'react';
import { withNamespaces } from 'react-i18next';

import Container from '@mui/material/Container';

import Card from './Card/Card';
import i18n from '../../i18n';

import './Resume.scss';

const Resume = ({ t }) => {
    return (
        <Container className='Resume'>
            <div className='title-text'>{t('resume.title')}</div>
            <Card data={{
                title: t('resume.education.title'),
                rows: [
                    t('resume.education.rows.0'),
                    t('resume.education.rows.1'),
                    t('resume.education.rows.2'),
                    t('resume.education.rows.3')
                ],
                logo: 'building.png',
                logoTitle: t('resume.education.logoTitle')
            }}/>
            <div className='Resume__about minor-text'>{t('resume.education.info')}</div>
            <Card data={{
                title: t('resume.work.title'),
                rows: [
                    t('resume.work.rows.0'),
                    t('resume.work.rows.1')
                ],
                logo: 'bag.png',
                logoTitle: t('resume.work.logoTitle')
            }}/>
            <div className='Resume__about minor-text'>{t('resume.work.info')}</div>
        </Container>
    )
}

export default withNamespaces()(Resume);