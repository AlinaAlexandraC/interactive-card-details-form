import './Card.css';
import CardFrontside from '../CardFrontside/CardFrontside';
import CardBackside from '../CardBackside/CardBackside';

const Card = () => {
    return (
        <div className="card-container position-relative">
            <CardBackside />
            <CardFrontside />
        </div>
    );
};

export default Card;