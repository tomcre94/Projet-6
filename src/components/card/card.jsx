import "./card.scss";
import { Link } from 'react-router-dom';

function Card ({id, title, cover}) {

    return (
        <Link to={`/Accomodation/${id}`} className='card'>
      <figure className='card-figure'>
        <img src={cover} alt={title} className='card-img'></img>
        <figcaption className='card-linear-gradient'>
          <p className='card-figcaption'>{title}</p>
        </figcaption>
      </figure>
    </Link> 

    )
}

export default Card;