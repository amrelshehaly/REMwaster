import React from 'react';
import './Preview.css';

interface PreviewProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Preview = React.memo<PreviewProps>(({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="preview-overlay" onClick={onClose}>
      <div className="preview-container" onClick={(e) => e.stopPropagation()}>
        <button className="preview-close" onClick={onClose}>
          ×
        </button>
        <div className="preview-content">
          {children}
        </div>
      </div>
    </div>
  );
});

Preview.displayName = 'Preview';

export default Preview;   