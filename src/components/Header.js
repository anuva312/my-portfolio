import "./header.css";

export default function Header({ onClickNavItem }) {
  return (
    <div className="header">
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
        <div
          className="nav-item"
          id="contact"
          onClick={() => onClickNavItem("contact-section")}
        >
          contact me
        </div>
      </div>
    </div>
  );
}
