import { useAccomodations } from "./fetchAccomodations";
import Card from "./card/card";

export default function JsonComponent() {
  const jsonData = useAccomodations();
  console.log("jsonData1:", jsonData);
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