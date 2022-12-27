import "./header.css";

export default function Header({ onClickNavItem }) {
  return (
    <div className="header">
      <div className="navbar-container">
        <div
          className="nav-item"
          id="about"
          onClick={() => onClickNavItem("about")}
        >
          about me
        </div>
        <div
          className="nav-item"
          id="skills"
          onClick={() => onClickNavItem("skills")}
        >
          skills
        </div>
        <div
          className="nav-item"
          id="projects"
          onClick={() => onClickNavItem("projects")}
        >
          projects
        </div>
        <div
          className="nav-item"
          id="contact"
          onClick={() => onClickNavItem("contact")}
        >
          contact me
        </div>
      </div>
    </div>
  );
}
