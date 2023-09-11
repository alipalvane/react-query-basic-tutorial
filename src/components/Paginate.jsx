import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetcColor = (pageNo) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNo}`);
};

const Paginate = () => {
  const [pageNo, setPageNo] = useState(1);
  const { isLoading, data, isError, error } = useQuery(["colors", pageNo], () =>
    fetcColor(pageNo),
    {
        keepPreviousData:true
    }
  );
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id} - {color.label}
              </h2>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={()=>setPageNo(page=>page-1)} disabled={pageNo ===1}>Prev Page</button>
        <button onClick={()=>setPageNo(pageNo+1)} disabled={pageNo === 4}>Next Page</button>
      </div>
    </>
  );
};

export default Paginate;
