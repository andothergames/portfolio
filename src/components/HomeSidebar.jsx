import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import displaypic from "../assets/displaypic.png";

export const HomeSidebar = () => {
  const navigate = useNavigate();

  return (
    <section className="sidebar">
      <img src={displaypic} className="dp" alt="display picture" />
      <header>
        <h1>Joy Morris</h1>
        <nav>
          <li onClick={() => navigate('/')}>Projects</li>
          <li><Link to="https://github.com/andothergames" target="_blank">GitHub</Link></li>
          <li>CV</li>
        </nav>
      </header>
      <p>
        A junior developer who thrives at the intersection of creativity and
        logic.
      </p>
      <p>
        I have a diverse background in workshop facilitation, e-learning,
        accessibility and design.
      </p>
      {/* <h1 onClick={returnHome}>Readily</h1> */}
    </section>
  );
};
