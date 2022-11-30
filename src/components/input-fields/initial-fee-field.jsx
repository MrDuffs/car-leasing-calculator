import React, { useRef } from 'react';
import { priceFormatter } from '../../utils/price-formatter';
import { RangeInput } from './range-input';

export const InitialFeeField = ({
    percentageValue, initialFeeValue, onChange, disabled,
}) => {
    const inputEl = useRef(null);
    const minInitialFeePercent = 10;
    const maxInitialFeePercent = 60;

    const handleInputBlur = (e) => {
        if (!e.target.value) {
            e.target.value = percentageValue;
        }
        if (e.target.value < minInitialFeePercent) {
            e.target.value = minInitialFeePercent;
            onChange(e);
        }
        if (e.target.value > maxInitialFeePercent) {
            e.target.value = maxInitialFeePercent;
            onChange(e);
        }
    };

    const handleInitialFeeClick = () => {
        inputEl.current.focus();
    };

    return (
        <div className="initial_fee-container">
            <h4>Первоначальный взнос</h4>
            <div className="initial_fee-field" onClick={handleInitialFeeClick} role="presentation">
                <span className="initial_fee-value">
                    {priceFormatter.format(initialFeeValue)} ₽
                </span>
                <div className="initial_fee-input">
                    <input
                        ref={inputEl}
                        type="text"
                        maxLength="2"
                        value={percentageValue}
                        onChange={onChange}
                        onBlur={handleInputBlur}
                        disabled={disabled}
                    />
                    <span>%</span>
                </div>
            </div>
            <RangeInput
                min={minInitialFeePercent}
                max={maxInitialFeePercent}
                value={percentageValue}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};
