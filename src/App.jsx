import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import SuperHeros from "./components/SuperHeros";
import RQSuperHeros from "./components/RQSuperHeros";
import RQDetails from "./components/RQDetails";
import ParallelQuery from "./components/ParallelQuery";
import DynamicParallelQuery from "./components/DynamicParallelQuery";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sh">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq">RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-parallel">Parallel Query</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sh" element={<SuperHeros />} />
        <Route path="/rq" element={<RQSuperHeros />} />
        <Route path="/rq/:heroId" element={<RQDetails />} />
        <Route path="/rq-parallel" element={<ParallelQuery/>}/>
        <Route path="/rq-dynamic-parallel" element={<DynamicParallelQuery heroIds={[1,3]}/>}/>
      </Routes>
    </div>
  );
};

export default App;
