import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

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

export const useAddSuperHero = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   //Get data fetching Automaticly with query
    //   // queryClient.invalidateQueries('super-heroes')

    //   //Handle Mutuation Response
    //   queryClient.setQueriesData("super-heroes", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },

    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const prevHeroData = queryClient.getQueryData("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            //we can use uuid for generate id here
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return {
        prevHeroData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heroes", context.prevHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes");
    },
  });
};
