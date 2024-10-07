import { Route, Routes } from "react-router-dom";

import "./App.css";
import Charts from "./pages/charts/Charts";
import Home from "./pages/home/Home";

function App(): React.ReactNode {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </>
  );
}

export default App;
