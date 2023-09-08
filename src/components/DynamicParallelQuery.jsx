import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelQuery = ({ heroIds }) => {
  const queryRes = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-heros", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log({queryRes})
  return <div>DynamicParallelQuery</div>;
};

export default DynamicParallelQuery;
