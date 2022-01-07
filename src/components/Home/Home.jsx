import React from 'react';
import './Home.scss';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Home = () => {
    return (
        <Container className='Home'>
            <div className='title-text Home__name'>Роман Токмин</div>
            <div className='minor-text Home__info'>Web-разработчик, Новосибирск</div>
            <a href='/files/TokminRoman.pdf' target='_blank' download>
                <Button className='minor-text Button' variant='contained'>Скачать резюме</Button>
            </a>
        </Container>
    )
};

export default Home;