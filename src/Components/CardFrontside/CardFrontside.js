import './CardFrontside.css';
import cardFronside from '../../images/bg-card-front.png';
import { useEffect, useState } from 'react';

const CardFrontside = () => {
    const array = [0, 0, 0, 0, '\u00A0', 0, 0, 0, 0, '\u00A0', 0, 0, 0, 0, '\u00A0', 0, 0, 0, 0];
    const [cardNumberArray, setCardNumberArray] = useState(array);
    const [cardholderName, setCardholderName] = useState();
    const [expiryMonth, setExpiryMonth] = useState();
    const [expiryYear, setExpiryYear] = useState();

    const updateFrontsideDetails = () => {
        let initialModifiedArray = localStorage.getItem("cardNumberArray");
        let cardholderNameLocal = localStorage.getItem("cardholderName") || "FELICIA LEIRE";
        let expiryMonthLocal = localStorage.getItem("expiryMonth") || '09';
        let expiryYearLocal = localStorage.getItem("expiryYear") || '00';
        setCardNumberArray(initialModifiedArray ? initialModifiedArray.split(",") : array);
        setCardholderName(cardholderNameLocal);
        setExpiryMonth(expiryMonthLocal);
        setExpiryYear(expiryYearLocal);
    };

    useEffect(() => {
        updateFrontsideDetails();
        const interval = setInterval(updateFrontsideDetails, 0);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="card-frontside-container position-absolute bottom-50 mb-3">
            <img src={cardFronside} alt="card-frontside" className='card-frontside mx-3' />
            <div className="card-fronside-details overlay position-absolute top-0 start-0">
                <div className="logo d-flex flex-row align-items-center mt-4">
                    <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" /><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" /></svg>
                </div>
                <div className='card-number-container d-flex flex-row justify-content-start'>
                    {cardNumberArray.map((char, index) =>
                        <div className="card-number" key={index}>{char}</div>
                    )}
                </div>
                <div className="details-container d-flex flex-row justify-content-between">
                    <div className="cardholder-name">{cardholderName}</div>
                    <div className="expiry-date">{expiryMonth}/{expiryYear}</div>
                </div>
            </div>
        </div>
    );
};

export default CardFrontside;