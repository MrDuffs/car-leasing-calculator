import React, { useState } from 'react';
import { priceFormatter } from '../../utils/price-formatter';
import './input-fields-style.scss';
import { RangeInput } from './range-input';

export const CarPriceField = ({ carPriceValue, onChange, disabled }) => {
    const [isEditing, setIsEditing] = useState(false);
    const minCarPrice = 1000000;
    const maxCarPrice = 6000000;

    const handleFocus = () => {
        setIsEditing(true);
    };

    const handleBlur = (e) => {
        if (e.target.value < minCarPrice) {
            e.target.value = minCarPrice;
            onChange(e);
        }
        if (e.target.value > maxCarPrice) {
            e.target.value = maxCarPrice;
            onChange(e);
        }
        setIsEditing(false);
    };

    return (
        <div className="car_price-container">
            <h4>Стоимость автомобиля</h4>
            <div className="car_price-input">
                {isEditing ? (
                    <input
                        type="number"
                        min={minCarPrice}
                        max={maxCarPrice}
                        value={carPriceValue.toString()}
                        onChange={onChange}
                        onBlur={handleBlur}
                        disabled={disabled}
                    />
                ) : (
                    <input
                        type="text"
                        value={priceFormatter.format(carPriceValue)}
                        onFocus={handleFocus}
                        disabled={disabled}
                        readOnly
                    />
                )}
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
