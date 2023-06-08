import "./App.css";
import Signup from "./Components/signup";
import Login from "./Components/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Order from "./Components/order";

function App() {
  return (
    //<Signup />
    <Router>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
