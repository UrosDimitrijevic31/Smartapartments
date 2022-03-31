import React from 'react';
import './ApartmentsCard.scss';

const ApartmentsCard = (props) => {    
    return (
        <div className="apartment">
            <img onClick={() => console.log('cao')} src={props.img} alt="apartments-image"/>
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <p>{props.info}</p> 
        </div>
    )
}
 
export default ApartmentsCard; 