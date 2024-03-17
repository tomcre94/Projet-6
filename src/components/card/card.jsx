import "./card.scss";
import { Link } from 'react-router-dom';

function Card ({id, title, cover}) {

    return (
      <Link to={`/Accomodations/${id}`} className='card'>
      <figure className='card-figure' style={{ position: 'relative' }}>
        <img src={cover} alt={title} className='card-img'></img>
        <p style={{ position: 'absolute', bottom: '10px', left: '25px', color: "white", padding: '10px', width: '50%'}}>{title}</p>
      </figure>
    </Link> 
    )
}

export default Card;