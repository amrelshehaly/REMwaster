import React, { useEffect, useRef } from 'react';
import './snackbar.css';

interface SnackBarProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const SnackBar: React.FC<SnackBarProps> = ({ message, isOpen, onClose }) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      timeoutRef.current = setTimeout(() => {
        onClose();
      }, 3000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="snackbar">
      <span className="snackbar__message">{message}</span>
      <button className="snackbar__close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default SnackBar;
