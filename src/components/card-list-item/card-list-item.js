import React from "react";
import './card-list-item.css'

const CardListItem = ({card, onCardSelected}) => {
    const {src, name} = card;
    return <img src={src} alt={name} onClick={onCardSelected }/>
};

export default CardListItem