import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
