import { useNavigate } from "react-router-dom";
import volScreenshot from "../assets/images/voluntier/screenshots.png";
import readScreenshot from "../assets/images/readily/screenshot.png";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Projects</h1>
      <section className="portfolioCard" onClick={() => navigate('/voluntier')}>
        <h2>Voluntier</h2>
        <p>An App Linking Volunteers with Charitable Opportunities</p>
        <img src={volScreenshot} alt="voluntier app screenshot" />
        <p className="techs">JS, React Native, React, Axios</p>
      </section>
      <section className="portfolioCard" onClick={() => navigate('/readily')}>
        <h2>Readily</h2>
        <p>A Reddit-Style Article Reader</p>
        <img src={readScreenshot} alt="readily app screenshot" />
        <p className="techs">JS, React, Postgres, SQL, Jest</p>
      </section>
    </section>
  );
};
