import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Warranty from "./pages/Warranty";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warranty" element={<Warranty />} />
      </Routes>
    </div>
  );
}
