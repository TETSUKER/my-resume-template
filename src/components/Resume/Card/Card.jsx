import React from 'react';
import './Card.scss';

const Card = (data) => {
    const text = data.data.rows.map((item, i) => <div key={i} className='minor-text'> {item} </div>);
    return (
        <div className='Card'>
            <div className='left-block'>
                <img src={require(`../../../assets/images/${data.data.logo}`)} className='left-block__logo' alt='avatar' />
                <div className='title-text left-block__title'>{data.data.logoTitle}</div>
            </div>
            <div className='right-block'>
                <div className='title-text right-block__title'>{data.data.title}</div>
                {text}
            </div>
        </div>
    )
}

export default Card;