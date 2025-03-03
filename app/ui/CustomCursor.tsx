"use client"
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true); // Adjust visibility if needed

  useEffect(() => {
    // Update the cursor position on mouse move
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  // You can toggle `visible` based on additional logic if required
  const cursorStyle = {
    width: '8px',
    height: '8px',
    zIndex: 9999, // High z-index to ensure it's on top
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out',
    opacity: visible ? 1 : 0,
    top: position.y,
    left: position.x,
    mixBlendMode: 'difference',
    backgroundColor: '#000000'
  };

  return <div style={cursorStyle} />;
};

export default CustomCursor;
