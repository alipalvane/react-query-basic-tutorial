import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddSuperHero, useSuperHero } from "../hooks/useSuperHero";

const RQSuperHeros = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const handleAddHero = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  const onSuccess = () => {
    console.log("start after fetching is success");
  };
  const onError = () => {
    console.log("start after fetching is Eroooooor");
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHero(
    onSuccess,
    onError
  );

  const { mutate: addHero } = useAddSuperHero();

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <h2>React Query</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHero}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch Data</button>
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};

export default RQSuperHeros;
