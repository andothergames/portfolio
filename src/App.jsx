import "./App.css";
import { HomeSidebar } from "./components/HomeSidebar";
import { Homepage } from "./components/Homepage";

function App() {
  return (
    <section className="container">
      <HomeSidebar />
      <Homepage />
    </section>
  );
}

export default App;
