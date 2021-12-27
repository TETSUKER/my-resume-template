import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className="About">
            <div className="title">Обо мне</div>
            <div className="bio">
                <div className="bio__photo-block">
                    <img src={require('../../assets/images/avatar.jpg')} className='photo' alt="avatar" />
                    <div className="bio__photo-block__bottom">
                        <div className="name">Имя: Токмин Роман</div>
                        <div className="birthday">Дата рождения: 22.01.1999</div>
                    </div>
                </div>
                <div className="bio__info-block">
                    Я начинающий веб-разработчик, 
                    в настоящее время работаю в Eltex, 
                    где разрабатываю интерфейс для сетевого оборудования, а также помогаю ему 
                    общаться с системой оборудования. Начал изучать программирование еще в НГТУ, выполняя различные лабораторные на C/C++ 
                    и реализовывая свой менеджер задач 
                    в качестве диплома на HTML/JS. Также 
                    в свободное время пишу свои проекты, 
                    сейчас изучаю React и Node JS, 
                    очень интересны эти технологии. Люблю писать документацию для проектов, 
                    а также пиццу и видеоигры!
                </div>
            </div>
        </div>
    )
}

export default About;