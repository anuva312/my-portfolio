import "./skills.css";
import "./animation.css";
import onClickIcon from "./onClickIcon";

export default function Skills() {
  return (
    <div className="skills-main-container" id="skills-section">
      <div className="skills-main-heading animate">Languages and Tools</div>
      <div className="skills-container animate pop delay-5">
        <i
          className="fa-brands fa-react skill-icon"
          onClick={(e) => onClickIcon(e, "reactjs")}
          title="React JS"
        ></i>
        <i
          className="fa-brands fa-square-js skill-icon"
          onClick={(e) => onClickIcon(e, "javascript")}
          title="JavaScript"
        ></i>
        <i
          className="fa-brands fa-html5 skill-icon"
          onClick={(e) => onClickIcon(e, "html")}
          title="HTML"
        ></i>
        <i
          className="fa-brands fa-css3-alt skill-icon"
          onClick={(e) => onClickIcon(e, "css")}
          title="CSS"
        ></i>
        <i
          className="fa-brands fa-python skill-icon"
          onClick={(e) => onClickIcon(e, "python")}
          title="Python"
        ></i>
        <i
          className="fa-brands fa-node-js skill-icon"
          onClick={(e) => onClickIcon(e, "nodejs")}
          title="Node JS"
        ></i>
      </div>
    </div>
  );
}
