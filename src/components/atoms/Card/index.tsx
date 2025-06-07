import React, { useMemo } from 'react';
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

const Card = React.memo<CardProps>(({
    children,
    className = '',
    title,
    image,
    onClick,
    selected,
    chip
}) => {
    const cardClasses = useMemo(() => [
        'card',
        onClick && 'card--clickable',
        selected && 'card--selected',
        className
    ].filter(Boolean).join(' '), [onClick, selected, className]);
    
    return (
        <div className={cardClasses} onClick={onClick}>
            {chip && <div className="card__chip">{chip} Yards</div>}
            {image && (
                <div>
                    <img 
                        src={image}
                        alt="" 
                        loading="eager"    
                        decoding="async"
                        className="card__image" 
                    />
                </div>
            )}
            {title && <h3 className="card__title">{title}</h3>}
            <div className="card__content">{children}</div>
        </div>
    );
});

Card.displayName = 'Card';

export default Card;