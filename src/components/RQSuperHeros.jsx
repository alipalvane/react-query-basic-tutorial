import { useQuery } from "react-query";
import axios from "axios";

const RQSuperHeros = () => {
  const { isLoading, data } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h2>React Query</h2>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHeros;
