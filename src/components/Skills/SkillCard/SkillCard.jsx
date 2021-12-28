import React from 'react';
import './SkillCard.scss';

const SkillCard = (data) => {
    return (
        <div className='card SkillCard'>
            <img src={require (`../../../assets/images/${data.data.image}`)} className='SkillCard__image' />
            <div className='title-text'>{data.data.title}</div>
        </div>
    )
}

export default SkillCard;