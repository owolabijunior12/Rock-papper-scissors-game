import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Result from "./pages/Result";
import background_img from "./images/background.png";
import "./App.css";

const App = () => {
  return (
    <main className="main">
      <img
        src={background_img}
        className="background_img"
        alt="background img"
      />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
