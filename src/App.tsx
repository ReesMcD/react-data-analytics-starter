import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App(): React.ReactNode {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
