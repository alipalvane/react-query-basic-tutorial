import React from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const fetcColor = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page${pageParam}`);
};

const InfinitePaginate = () => {
  const {
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetcColor, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length+1;
      } else {
        return undefined;
      }
    },
  });
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <React.Fragment key={i}>
              {
                group.data.map((color)=>(
                    <h2 key={color.id}>{color.id}. {color.label}</h2>
                ))
              }
            </React.Fragment>
          );
        })}
      </div>
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Load More
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default InfinitePaginate;
