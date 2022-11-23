import React from 'react';
import { priceFormatter } from '../../utils/price-formatter';
import './info-fields-style.scss';

export const LeasingAgreementField = ({ value }) => (
    <div className="leasing_agreement-field">
        <h4>Сумма договора лизинга</h4>
        <p>{priceFormatter.format(value)} <span>₽</span></p>
    </div>
);
