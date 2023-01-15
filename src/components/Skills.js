import "./skills.css";
import "./animation.css";

export default function Skills() {
  return (
    <div className="skills-main-container" id="skills-section">
      <div className="skills-main-heading animate">Languages and Tools</div>
      <div className="skills-container animate pop delay-5">
        <i className="fa-brands fa-react skill-icon" title="React JS"></i>
        <i className="fa-brands fa-square-js skill-icon" title="JavaScript"></i>
        <i className="fa-brands fa-html5 skill-icon" title="HTML"></i>
        <i className="fa-brands fa-css3-alt skill-icon" title="CSS"></i>
        <i className="fa-brands fa-python skill-icon" title="Python"></i>
        <i className="fa-brands fa-node-js skill-icon" title="Node JS"></i>
      </div>
    </div>
  );
}
