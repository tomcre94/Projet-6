import { useAccomodations } from "../../hooks/useAccomodations"
import Card from "../card/card";

export function DisplayCards() {
  const jsonData = useAccomodations();
  if (!jsonData) {
    return <p>Chargement en cours...</p>;
  }
  return (
    <figure className='card-container'>
      {jsonData.length > 0 ? (
        jsonData.map((accommodation) => (
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