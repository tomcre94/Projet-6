import { useAccomodations } from "../../hooks/useAccomodations"
import Card from "../card/card";

export function DisplayCards() {
  const accomodations = useAccomodations();
  if (!accomodations) {
    return <p>Chargement en cours...</p>;
  }
  return (
    <figure className='card-container'>
      {accomodations.length > 0 ? (
        accomodations.map((accommodation) => (
          <Card 
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            cover={accommodation.cover}
          /> 
        ))
      ) : (
        <p>Aucune donnée disponible pour le moment.</p>
      )}
    </figure>
  );
}