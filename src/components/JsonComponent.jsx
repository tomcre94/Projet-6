import { useEffect, useState } from "react";
import Card from "./card/card";

export default function JsonComponent() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("logements.json");      
          const parsedData = await response.json();
          setJsonData(parsedData);
          console.log(parsedData);
       
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données JSON :",
          error
        );
      }
    };

    fetchData();
  }, []);

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
