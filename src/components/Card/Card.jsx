import './card.css';
import { Link } from 'react-router-dom';

function Card({ id , url}) {
    
    return (
        <>
            <div className="img_holder">
                <Link to={`/details/${id}`}>
                    <img src={url} alt="card-img" />
                </Link>
            </div>
        </>
    )
}

export default Card;