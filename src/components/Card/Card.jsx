import './card.css';

function Card({ id , url}) {
    return (
        <div className="img_holder">
            <img src={url} alt="card-img" />
        </div>
    )
}

export default Card;