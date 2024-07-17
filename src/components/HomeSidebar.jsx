import logo from "/logo.png";
import displaypic from "../assets/displaypic.png";

export const HomeSidebar = () => {
  return (
    <section className="sidebar">
      <img src={displaypic} className="dp" alt="display picture" />
      <header><h1>Joy Morris
        </h1>
      <nav>
        <li>Projects</li>
        <li>GitHub</li>
        <li>CV</li>
      </nav>
      </header>
      <p>This is where a description about me goes here yaya dsnv ubf uvbdf dsubf hsdbvdfksubhv sidcn ksbv subv sbv </p>
      {/* <h1 onClick={returnHome}>Readily</h1> */}
    </section>
  );
};
