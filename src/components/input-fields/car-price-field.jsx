import React from 'react';
import { priceFormatter } from '../../utils/price-formatter';
import './input-fields-style.scss';
import { RangeInput } from './range-input';
import { normalizeInputValues } from '../../utils/normalize-input-values';

export const CarPriceField = ({ carPriceValue, onChange, disabled }) => {
    const minCarPrice = 1000000;
    const maxCarPrice = 6000000;

    const handleBlur = (e) => {
        if (normalizeInputValues(e.target.value) < minCarPrice) {
            e.target.value = minCarPrice;
            onChange(e);
        }
        if (normalizeInputValues(e.target.value) > maxCarPrice) {
            e.target.value = maxCarPrice;
            onChange(e);
        }
    };

    return (
        <div className="car_price-container">
            <h4>Стоимость автомобиля</h4>
            <div className="car_price-input">
                <input
                    type="text"
                    maxLength={priceFormatter.format(carPriceValue).length}
                    value={priceFormatter.format(carPriceValue)}
                    onChange={onChange}
                    onBlur={handleBlur}
                    disabled={disabled}
                />
                <span>₽</span>
            </div>
            <RangeInput
                min={minCarPrice}
                max={maxCarPrice}
                value={carPriceValue}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};
