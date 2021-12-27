import React from 'react';
import './Card.scss';

const Card = (data) => {
    const title = 'Новосибирский Государственный Технический Университет';
    const text = data.data.rows.map((item, i) => <div key={i} className="right-block__text"> {item} </div>);
    return (
        <div className="Card">
            <div className="left-block">
                <img src={require(`../../../assets/images/${data.data.logo}`)} className='left-block__logo' alt="avatar" />
                <div className="left-block__title">{data.data.logoTitle}</div>
            </div>
            <div className="right-block">
                <div className="right-block__title">{data.data.title}</div>
                {text}
            </div>
        </div>
    )
}

export default Card;