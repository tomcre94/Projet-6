import axios from "axios";

const JsonComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
        );
        console.log(response.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données JSON :",
          error
        );
      }
    };

    fetchData();
  }, []);

  return <div>{/* je dois intégrer le rendu de composant ici */}</div>;
};

export default JsonComponent;
