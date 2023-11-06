import "./styles/_global.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
}

export default App;
