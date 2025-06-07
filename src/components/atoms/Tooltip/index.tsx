import React, { useState } from 'react';
import './tooltip.css';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

const Tooltip = React.memo<TooltipProps>(({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className="tooltip">{content}</div>}
    </div>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip; 