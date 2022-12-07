import React from 'react';
import { INTEREST_RATE } from '../constants/constants';

const interestRate = INTEREST_RATE;

export const calculateMonthPay = (carPrice, initialFee, months) => Math.round((carPrice - initialFee)
        * ((interestRate * ((1 + interestRate) ** months)) / (((1 + interestRate) ** months) - 1)));

export const calculateInitialFeeValue = (carPriceValue, initialFeePercentage) => (
    Math.round(carPriceValue * (initialFeePercentage / 100))
);

export const calculateLeasingAgreementValue = (initialFeeValue, months, monthPay) => (
    initialFeeValue + (months * monthPay)
);
