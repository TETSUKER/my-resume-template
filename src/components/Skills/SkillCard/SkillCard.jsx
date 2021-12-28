import React from 'react';
import './SkillCard.scss';

const SkillCard = (data) => {
    return (
        <div className="SkillCard">
            <img src={require (`../../../assets/images/${data.data.image}`)} className='SkillCard__image' />
            <div className="SkillCard__title">{data.data.title}</div>
        </div>
    )
}

export default SkillCard;