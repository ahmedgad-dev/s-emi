import Routers from "./Routers";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  // return <Routers />;
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route />
      <Route />
      <Route />
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  )
}

export default App;
