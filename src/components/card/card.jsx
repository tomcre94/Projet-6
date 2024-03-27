import "./card.scss";
import { Link } from 'react-router-dom';

function Card ({id, title, cover, accommodationData}) {

    return (
      <Link to={`/Accomodations/${id}`} className='card'>
      <figure className='card-figure'>
        <img src={cover} alt={title} className='card-img'></img>
        <p>{title}</p>
      </figure>
    </Link> 
    )
}

export default Card;