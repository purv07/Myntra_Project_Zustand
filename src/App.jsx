import Cart from "./Components/Cart/Cart";
import MainCon from "./Components/MainCon";
import Navbar from "./Components/Navbar";
import { BrowserRouter as  Router, Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Whislist from "./Components/Wishlist/Whislist";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
    
      <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<MainCon />} />
          <Route exact path="/Profile" element={<Profile/>} />
          <Route exact path="/Whislist" element={<Whislist />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
