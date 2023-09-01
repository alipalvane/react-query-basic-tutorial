import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import SuperHeros from "./components/SuperHeros";
import RQSuperHeros from "./components/RQSuperHeros";

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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sh" element={<SuperHeros />} />
        <Route path="/rq" element={<RQSuperHeros />} />
      </Routes>
    </div>
  );
};

export default App;
