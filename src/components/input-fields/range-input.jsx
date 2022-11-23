import React from 'react';
import './input-fields-style.scss';

export const RangeInput = ({
    min, max, value, onChange, disabled,
}) => {
    const getInputRangeStyle = () => ({
        background: `linear-gradient(to right,
            #FF9514 0%,
            #FF9514 ${((value - min) / (max - min)) * 100}%,
            #E1E1E1 ${((value - min) / (max - min)) * 100}%,
            #E1E1E1 100%)`,
    });

    return (
        <input
            className="fields-input_range"
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            style={getInputRangeStyle()}
            disabled={disabled}
        />
    );
};
