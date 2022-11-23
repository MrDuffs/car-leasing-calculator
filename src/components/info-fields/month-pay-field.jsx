import React from 'react';
import { priceFormatter } from '../../utils/price-formatter';

export const MonthPayField = ({ value }) => (
    <div className="month_pay-field">
        <h4>Ежемесячный платеж от</h4>
        <p>{priceFormatter.format(value)} <span>₽</span></p>
    </div>
);
