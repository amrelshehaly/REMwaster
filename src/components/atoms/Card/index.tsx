import React from 'react';
import './card.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    image?: string;
    onClick?: () => void;
    selected?: boolean;
    chip?: number;
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    title,
    image,
    onClick,
    selected,
    chip
}) => {
    const cardClasses = `card ${onClick ? 'card--clickable' : ''} ${className} ${selected ? 'card--selected' : ''}`.trim();

    return (
        <div className={cardClasses} onClick={onClick}>
            {chip && <div className="card__chip">{chip} Yards</div>}
            {image && <img src={image} alt="" className="card__image" />}
            {title && <h3 className="card__title">{title}</h3>}
            <div className="card__content">{children}</div>
        </div>
    );
};

export default Card;
