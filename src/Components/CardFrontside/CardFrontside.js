import './CardFrontside.css';
import cardFronside from '../../images/bg-card-front.png';

const Card = () => {
    let array = [];

    for (let i = 1; i < 20; i++) {
        if (i % 5 != 0) {
            if (i < 10) {
                array.push(i);
            } else {
                array.push(i % 10);
            }
        } else {
            array.push('\u00A0');
        }
    }

    return (
        <div className="card-frontside-container position-absolute bottom-50 mb-3">
            <img src={cardFronside} alt="card-frontside" className='card-frontside mx-3'/>
            <div className="card-fronside-details overlay position-absolute top-0 start-0">
                <div className="logo d-flex flex-row align-items-center mt-4">
                    <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" /><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff" /></svg>
                </div>
                <div className='card-number-container d-flex flex-row justify-content-start'>
                    {array.map((char, index) =>
                        <div className="card-number" key={index}>{char}</div>
                    )}
                </div>
                <div className="details-container d-flex flex-row justify-content-between">
                    <div className="cardholder-name">FELICIA LEIRE</div>
                    <div className="expiry-date">09/00</div>
                </div>
            </div>
        </div>
    );
};

export default Card;