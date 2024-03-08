import axios from "axios";
import { useEffect, useState } from "react";

export default function JsonComponent() {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
        );
        const parsedData = response.data;
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
  return jsonData || [];
}
