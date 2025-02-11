import React from 'react';

interface ButtonComponentProps {
    onCallback: () => void;
    onFinalCallback: () => void;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({ onCallback, onFinalCallback }) => {
    const handleClick = () => {
        onCallback();
        onFinalCallback();
    };

    return (
        <button onClick={handleClick}>Complete Chain</button>
    );
};
