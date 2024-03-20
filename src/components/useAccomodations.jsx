import { useEffect, useState } from "react";

export function useAccomodations() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("logements.json");
        console.log("Response:", response);
        const parsedData = await response.json();
        console.log("Parsed Data:", parsedData);
        setJsonData(parsedData);
        console.log("jsonData", jsonData);
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
