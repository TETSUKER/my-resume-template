import React from 'react';
import './Skills.scss';
import SkillCard from './SkillCard/SkillCard';

const Skills = () => {
    return (
        <div className='Skills'>
            <div className='title-text'>Навыки</div>
            <div className='SkillCards'>
                <SkillCard data={{
                    image: 'html5.png',
                    title: 'HTML5'
                }}/>
                <SkillCard data={{
                    image: 'css3.png',
                    title: 'CSS3'
                }}/>
                <SkillCard data={{
                    image: 'js.png',
                    title: 'JS'
                }}/>
                <SkillCard data={{
                    image: 'nodejs.png',
                    title: 'NodeJS'
                }}/>
                <SkillCard data={{
                    image: 'react.png',
                    title: 'React'
                }}/>
                <SkillCard data={{
                    image: 'angular.png',
                    title: 'Angular'
                }}/>
                <SkillCard data={{
                    image: 'material-ui.png',
                    title: 'Material UI'
                }}/>
                <SkillCard data={{
                    image: 'linux.png',
                    title: 'Linux'
                }}/>
            </div>
            <div className='horizontal-line'></div>
        </div>
    )
}

export default Skills;