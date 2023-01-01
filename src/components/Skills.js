import "./skills.css";
import "./animation.css";

export default function Skills() {
  return (
    <div className="skills-main-container" id="skills-section">
      <div className="skills-main-heading animate">Languages and Tools</div>
      <div className="skills-container animate pop delay-5">
        <i className="fa-brands fa-react skill-icon"></i>
        <i className="fa-brands fa-square-js skill-icon"></i>
        <i className="fa-brands fa-html5 skill-icon"></i>
        <i className="fa-brands fa-css3-alt skill-icon"></i>
        <i className="fa-brands fa-python skill-icon"></i>
        <i className="fa-brands fa-node-js skill-icon"></i>
      </div>
    </div>
  );
}
