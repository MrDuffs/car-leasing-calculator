import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CarPriceField } from '../input-fields/car-price-field';
import { InitialFeeField } from '../input-fields/initial-fee-field';
import { LeasingTermField } from '../input-fields/leasing-term-field';
import { LeasingAgreementField } from '../info-fields/leasing-agreement-field';
import { calculateMonthPay, calculateInitialFeeValue, calculateLeasingAgreementValue } from '../../utils/calculations';
import { MonthPayField } from '../info-fields/month-pay-field';
import { URL_REQUEST } from '../../constants/urls';
import { normalizeInputValues } from '../../utils/normalize-input-values';
import './leasing-form-styles.scss';
import loader from '../../assets/icons/loader.svg';

const url = URL_REQUEST;

export const LeasingForm = () => {
    const [carPriceValue, setCarPriceValue] = useState(3300000);
    const [initialFeePercentage, setInitialFeePercentage] = useState(13);
    const [initialFeeValue, setInitialFeeValue] = useState(calculateInitialFeeValue(carPriceValue, initialFeePercentage));
    const [months, setMonths] = useState(60);

    const [monthPay, setMonthPay] = useState(calculateMonthPay(carPriceValue, initialFeeValue, months));
    const [leasingAgreementValue, setLeasingAgreementValue] = useState(
        calculateLeasingAgreementValue(initialFeeValue, months, monthPay),
    );

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (carPriceValue >= 1000000 && carPriceValue <= 6000000) {
            setInitialFeeValue(calculateInitialFeeValue(carPriceValue, initialFeePercentage));
            setMonthPay(calculateMonthPay(carPriceValue, initialFeeValue, months));
            setLeasingAgreementValue(calculateLeasingAgreementValue(initialFeeValue, months, monthPay));
        }
    }, [carPriceValue, initialFeePercentage, initialFeeValue, months, monthPay]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post(url, {
                carPrice: carPriceValue,
                initialFeePercentage,
                initialFee: initialFeeValue,
                months,
                monthPay,
                leasingAgreementValue,
            });
            setIsLoading(false);
            console.log(response.data);
        } catch (error) {
            setIsLoading(false);
            console.log(error.response);
        }
    };

    const handleCarPriceChange = (event) => {
        const result = normalizeInputValues(event.target.value);
        setCarPriceValue(+result);
    };

    const handleInitialFeeChange = (event) => {
        const result = normalizeInputValues(event.target.value);
        setInitialFeePercentage(+result);
    };

    const handleMonthValueChange = (event) => {
        const result = normalizeInputValues(event.target.value);
        setMonths(+result);
    };

    return (
        <form className="leasing_form" onSubmit={handleFormSubmit}>
            <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
            <div className="leasing_form-inputs">
                <CarPriceField
                    carPriceValue={carPriceValue}
                    onChange={handleCarPriceChange}
                    disabled={isLoading}
                />
                <InitialFeeField
                    percentageValue={initialFeePercentage}
                    initialFeeValue={initialFeeValue}
                    onChange={handleInitialFeeChange}
                    disabled={isLoading}
                />
                <LeasingTermField
                    monthsValue={months}
                    onChange={handleMonthValueChange}
                    disabled={isLoading}
                />
            </div>
            <div className="leasing_form-info">
                <LeasingAgreementField
                    value={leasingAgreementValue}
                />
                <MonthPayField
                    value={monthPay}
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading
                        ? (
                            <img
                                className="loader"
                                src={loader}
                                alt="loading..."
                            />
                        ) : 'Оставить заявку'}
                </button>
            </div>
        </form>
    );
};
