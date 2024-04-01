import { useEffect, useState } from 'react';

export function useAccomodations() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/logements.json');
        const parsedData = await response.json();
        setJsonData(parsedData);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données JSON :",
          error
        );
      }
    };
    fetchData();
  }, []);

  return jsonData;
}
