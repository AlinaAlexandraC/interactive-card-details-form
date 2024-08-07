import "./InputForm.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const InputForm = () => {
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState("");
    const [cardholderName, setCardholderName] = useState("");
    const [expiryMonth, setExpiryMonth] = useState("");
    const [expiryYear, setExpiryYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [cardNumberError, setCardNumberError] = useState(false);
    const [expiryMonthError, setExpiryMonthError] = useState(false);
    const [expiryYearError, setExpiryYearError] = useState(false);
    const [cvcError, setCvcError] = useState(false);
    const [cardNumberArray, setCardNumberArray] = useState([0, 0, 0, 0, '\u00A0', 0, 0, 0, 0, '\u00A0', 0, 0, 0, 0, '\u00A0', 0, 0, 0, 0]);

    const interactiveCardDetails = () => {
        let arrayIndex = 0;
        const newArray = cardNumberArray.map(item => {
            if (item === 0 && arrayIndex < cardNumber.length) {
                return cardNumber[arrayIndex++];
            }
            return item;
        });

        localStorage.setItem("cardNumberArray", newArray);
        localStorage.setItem("cardholderName", cardholderName);
        localStorage.setItem("expiryMonth", expiryMonth);
        localStorage.setItem("expiryYear", expiryYear);
        localStorage.setItem("cvc", cvc);
    };

    const validateField = (value, setError) => {
        if (isNaN(Number(value))) {
            setError("Wrong format, numbers only");
        } else if (Number(value) === 0) {
            setError("Can't be blank");
        } else {
            setError("");
        }
    };

    const handleConfirm = () => {
        validateField(cardNumber, setCardNumberError);
        validateField(expiryMonth, setExpiryMonthError);
        validateField(expiryYear, setExpiryYearError);
        validateField(cvc, setCvcError);

        if (cardNumberError === "" && expiryMonthError === "" && expiryYearError === "" && cvcError === "") {
            navigate('/complete');
            interactiveCardDetails();
        }
    };

    const getBorderStyle = (error) => (
        error ? { border: '1px solid red' } : {}
    );

    const resetError = (setError) => {
        setError("");
    };

    return (
        <div className="card-details-container d-flex flex-column justify-content-center">
            <div className="card-details-form">
                <div className="cardholder-name-container pb-3">
                    <label htmlFor="cardholder-name-input" className="d-flex">
                        CARDHOLDER NAME
                    </label>
                    <input
                        type="text"
                        className="cardholder-name-input text-center"
                        placeholder="e.g. Jane Appleseed"
                        onChange={(e) => setCardholderName(e.target.value)}
                    />
                </div>
                <div className="card-number-input-container d-flex flex-column pb-3">
                    <label htmlFor="card-number-input" className="d-flex">
                        CARD NUMBER
                    </label>
                    <input
                        type="text"
                        className="card-number-input text-center"
                        maxLength="16"
                        placeholder="e.g. 1234 5678 9123 0000"
                        onChange={(e) => setCardNumber(e.target.value)}
                        style={getBorderStyle(cardNumberError)}
                        onClick={() => resetError(setCardNumberError)}
                    />
                    {cardNumberError && (
                        <div className="label-error">{cardNumberError}</div>
                    )}
                </div>
                <div className="container d-flex flex-row p-0 gap-2">
                    <div className="expiry-date-container">
                        <label htmlFor="expiry-date-input" className="expiry-date-input-label d-flex">
                        </label>
                        <div className="expiry-date-input d-flex flex-row">
                            <div>
                                <input
                                    type="text"
                                    className="expiry-month text-center"
                                    placeholder="MM"
                                    onChange={(e) => setExpiryMonth(e.target.value)}
                                    style={getBorderStyle(expiryMonthError)}
                                    onClick={() => resetError(setExpiryMonthError)}
                                    maxLength="2"
                                />
                                {expiryMonthError && (
                                    <div className="label-error">{expiryMonthError}</div>
                                )}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="expiry-year text-center"
                                    placeholder="YY"
                                    onChange={(e) => setExpiryYear(e.target.value)}
                                    style={getBorderStyle(expiryYearError)}
                                    onClick={() => resetError(setExpiryYearError)}
                                    maxLength="2"
                                />
                                {expiryYearError && (
                                    <div className="label-error">{expiryYearError}</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="cvc-container">
                        <label htmlFor="cvc-input" className="d-flex">
                            CVC
                        </label>
                        <input
                            type="text"
                            className="cvc-input text-center d-flex"
                            placeholder="e.g. 123"
                            onChange={(e) => setCvc(e.target.value)}
                            style={getBorderStyle(cvcError)}
                            onClick={() => resetError(setCvcError)}
                            maxLength="3"
                        />
                        {cvcError && (
                            <div className="label-error">{cvcError}</div>
                        )}
                    </div>
                </div>
            </div>
            <div className="check-remember-card d-flex align-content-center pb-4 pt-3">
                <input type="checkbox" id="remember-card" name="remember-card" />
                <label for="remember-card" className="remember-card-label px-3 pb-0 d-flex flex-wrap align-content-center">Remember card</label>
            </div>
            <div className="confirm-button hero-btn p-2" onClick={handleConfirm}>
                Confirm
            </div>
        </div>
    );
};

export default InputForm;
