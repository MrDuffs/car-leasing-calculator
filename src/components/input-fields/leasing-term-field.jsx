import React from 'react';
import { RangeInput } from './range-input';

export const LeasingTermField = ({ monthsValue, onChange, disabled }) => {
    const minLeasingTerm = 1;
    const maxLeasingTerm = 60;

    const handleBlur = (e) => {
        if (!e.target.value) {
            e.target.value = monthsValue;
        }
        if (e.target.value < minLeasingTerm) {
            e.target.value = minLeasingTerm;
            onChange(e);
        }
        if (e.target.value > maxLeasingTerm) {
            e.target.value = maxLeasingTerm;
            onChange(e);
        }
    };

    return (
        <div className="leasing_term-container">
            <h4>Срок лизинга</h4>
            <div className="leasing_term-input">
                <input
                    type="number"
                    min={minLeasingTerm}
                    max={maxLeasingTerm}
                    value={monthsValue.toString()}
                    onChange={onChange}
                    onBlur={handleBlur}
                    disabled={disabled}
                />
                <span>мес.</span>
            </div>
            <RangeInput
                min={minLeasingTerm}
                max={maxLeasingTerm}
                value={monthsValue}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};
