import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <div className="Home-name">Роман Токмин</div>
            <div className="Home-info">Web-разработчик, Новосибирск</div>
            <button className="Home-download">Скачать резюме</button>
        </div>
    )
};

export default Home;