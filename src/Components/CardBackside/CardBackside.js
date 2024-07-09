import './CardBackside.css';
import cardBackside from '../../images/bg-card-back.png';

const CardBackside = () => {
    return (
        <div className="card-backside-container position-absolute start-50 mt-4">
            <img src={cardBackside} alt="card-backside" className='card-backside mx-3'/>
            <div className="card-backside-details overlay position-absolute top-0 end-0">
                <div className="cvc mx-3">CVC</div>
            </div>
        </div>
    );
};

export default CardBackside;