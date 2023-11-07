import React from 'react';
import './SquareWithText.css'; // Import the CSS file

const SquareWithText = ({onClick, children}) => {
    return (
        <div
            className="square" // Use the CSS class
            onClick={onClick}
            >
            {children}
        </div>
    );
}

export default SquareWithText;