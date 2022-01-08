import React from 'react';
import { withNamespaces } from 'react-i18next';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import i18n from '../../i18n';

import './Contacts.scss';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Contacts = ({ t }) => {
    const data = {
        data: {
            phoneIcon: 'phone.png',
            phoneNumber: '+7-951-378-03-30',
            mailIcon: 'mail.png',
            mailAdress: 'roman_tokmin@mail.ru',
            github: 'github.png',
            telegram: 'telegram.png',
            whatsapp: 'whatsapp.png',
            vk: 'vk.png',
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = (text) => {
        navigator.clipboard.writeText(text);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };

    return (
        <div className='Contacts'>
            <div className='title-text'>{t('contacts.title')}</div>
            <div className='Contacts-block'>
                <div className='Contacts-block__left'>
                    <div className='Contacts-block__left-contact'>
                        <img onClick={() => handleClick(data.data.phoneNumber)}
                            src={require(`../../assets/images/${data.data.phoneIcon}`)} className='Contacts__icon'/>
                        <div className='minor-text Contacts__text'>{data.data.phoneNumber}</div>
                    </div>
                    <div className='Contacts-block__left-contact'>
                        <img onClick={() => handleClick(data.data.mailAdress)}
                            src={require(`../../assets/images/${data.data.mailIcon}`)} className='Contacts__icon'/>
                        <div className='minor-text Contacts__text'>{data.data.mailAdress}</div>
                    </div>
                </div>
                <div className='Contacts-block__right'>
                    <a href='https://github.com/TETSUKER' target='_blank'><img src={require(`../../assets/images/${data.data.github}`)} className='Contacts__icon'/></a>
                    <a href='https://t.me/TETSUKER' target='_blank'><img src={require(`../../assets/images/${data.data.telegram}`)} className='Contacts__icon'/></a>
                    <a href='https://wa.me/79513780330' target='_blank'><img src={require(`../../assets/images/${data.data.whatsapp}`)} className='Contacts__icon'/></a>
                    <a href='https://vk.com/tetsuker' target='_blank'><img src={require(`../../assets/images/${data.data.vk}`)} className='Contacts__icon'/></a>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert className='Alert' icon={false} severity='info' sx={{ width: '100%' }}>
                    Copied to clipboard!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default withNamespaces()(Contacts);