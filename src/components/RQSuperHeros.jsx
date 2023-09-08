import { Link } from "react-router-dom";
import { useSuperHero } from "../hooks/useSuperHero";

const RQSuperHeros = () => {
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

  console.log(isLoading, isFetching);

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <h2>React Query</h2>
      <button onClick={refetch}>Fetch Data</button>
      {data?.data.map((hero) => (
        <div key={hero.id}><Link to={`/rq/${hero.id}`}>{hero.name}</Link></div>
      ))}
      {/* {data.map((names) => {
        return <div key={names}>{names}</div>;
      })} */}
    </>
  );
};

export default RQSuperHeros;
