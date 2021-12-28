import React from 'react';
import './Home.scss';
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <div className="Home">
            <div className="Home-name">Роман Токмин</div>
            <div className="Home-info">Web-разработчик, Новосибирск</div>
            <a href="/files/TokminRoman.pdf" target="_blank" download>
                <Button
                    variant="contained"
                    className="Home-download">
                        Скачать резюме
                </Button>
            </a>
        </div>
    )
};

export default Home;