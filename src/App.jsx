import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeSidebar } from "./components/HomeSidebar";
import { Homepage } from "./components/Homepage";
import { Footer } from "./components/Footer";
import { Voluntier } from "./components/Voluntier";
import { Readily } from "./components/Readily";

function App() {
  return (
    <Router>
      <section className="container">
        <HomeSidebar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/voluntier" element={<Voluntier />} />
          <Route path="/readily" element={<Readily />} />
        </Routes>
        <Footer />
      </section>
    </Router>
    );
}

export default App;
