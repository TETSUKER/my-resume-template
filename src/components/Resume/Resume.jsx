import React from 'react';
import './Resume.scss';
import Card from './Card/Card';
import Container from '@mui/material/Container';

const Resume = () => {
    return (
        <Container className='Resume'>
            <div className='title-text'>Резюме</div>
            <Card data={{
                title: 'Новосибирский Государственный Технический Университет',
                rows: [
                    'Бакалавриат, 2017-2021',
                    'Факультет: Автоматики и вычислительной техники',
                    'Направление: Управление в технических системах',
                    'Профиль: Автоматика и управление'
                ],
                logo: 'building.png',
                logoTitle: 'Образование'
            }}/>
            <div className='Resume__about minor-text'>
            Во время обучения работал с различными платами Плис\Arduino, также изучал основы системы linux, что мне понравилось больше всего и работал в качестве лабораторных работ с различным сетевым оборудованием. Также, параллельно изучал JavaScript, который пригодился для реализации моего приложения для бакалаврской работы. Сейчас продолжаю обучение на магистратуре этого направления.
            </div>
            <Card data={{
                title: 'ООО «Предприятие «Элтекс» (ELTEX) —',
                rows: [
                    'один из ведущих российских разработчиков и производителей сетевого оборудования.',
                    'Февраль 2021 - Текущее время'
                ],
                logo: 'bag.png',
                logoTitle: 'Опыт работы'
            }}/>
            <div className='Resume__about minor-text'>
                Мое первое место работы в качестве web-разработчика, где фронтенд оборудования написан на KnockautJS, запросы к системе выполнял Lua 
                и небольшая прослойка Си-шного кода для выполнения системных вызовов. Здесь я правил баги, дописывал функционал, а также переносил проекты 
                с KnockautJS на Angular. Писал много документации, чем упростил работу другим разработчикам, приводил в порядок старые проекты и поднимал новые. Очень много нового узнал от своих коллег, чем очень благодарен им!
            </div>
        </Container>
    )
}

export default Resume;