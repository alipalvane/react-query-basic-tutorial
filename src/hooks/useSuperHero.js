import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = (hero)=>{
  return axios.post("http://localhost:4000/superheroes", hero)
}

export const useSuperHero = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchHeros, {
    onError,
    onSuccess,
    // select: (data) => {
    //   const heroNames = data.data.map((hero) => hero.name);
    //   return heroNames;
    // },
  });
};

export const useAddSuperHero = ()=>{
  const queryClient = useQueryClient()
  return useMutation(addSuperHero,{
    onSuccess:()=>{
      //Get data fetching Automaticly with query
      queryClient.invalidateQueries('super-heroes')
    }
  })
}


