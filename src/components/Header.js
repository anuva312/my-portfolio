import "./header.css";
import LeftNavBar from "./LeftNavBar";

export default function Header({ onClickNavItem }) {
  return (
    <div className="header">
      <LeftNavBar onClickNavItem={onClickNavItem} />
      <div className="navbar-container">
        <div
          className="nav-item"
          id="about"
          onClick={() => onClickNavItem("about-section")}
        >
          about me
        </div>
        <div
          className="nav-item"
          id="skills"
          onClick={() => onClickNavItem("skills-section")}
        >
          skills
        </div>
        <div
          className="nav-item"
          id="projects"
          onClick={() => onClickNavItem("projects-section")}
        >
          projects
        </div>
        {/* <div
          className="nav-item"
          id="contact"
          onClick={() => onClickNavItem("contact-section")}
        >
          contact me
        </div> */}
      </div>
    </div>
  );
}
