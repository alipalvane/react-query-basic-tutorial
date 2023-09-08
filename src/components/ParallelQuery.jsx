import { useQuery } from "react-query";
import axios from "axios";

const fetchHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQuery = () => {
  const { data: superheroes } = useQuery("heros", fetchHeros);
  const { data: friends } = useQuery("friends", fetchFriends);
  return <div>ParallelQuery</div>;
};

export default ParallelQuery;
