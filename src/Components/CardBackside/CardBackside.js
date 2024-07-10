import './CardBackside.css';
import cardBackside from '../../images/bg-card-back.png';
import { useEffect, useState } from "react";

const CardBackside = () => {
    const [cvc, setCvc] = useState("CVC");

    const updateCvc = () => {
        const localCvc = localStorage.getItem("cvc") || "CVC";
        setCvc(localCvc);
    };

    useEffect(() => {
        updateCvc();
        const interval = setInterval(updateCvc, 0);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="card-backside-container position-absolute start-50 mt-4">
            <img src={cardBackside} alt="card-backside" className='card-backside mx-3' />
            <div className="card-backside-details overlay position-absolute top-0 end-0">
                <div className="cvc mx-3" >{cvc}</div>
            </div>
        </div>
    );
};

export default CardBackside;