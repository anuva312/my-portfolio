import "./About.css";
import "./animation.css";

export default function About() {
  return (
    <div className="about-main-container" id="about-section">
      <div className="about-main-heading animate slide">
        Hello there👋, I'm Anusree
      </div>
      <div className="about-photo animate delay-1"></div>
      <div className="about-description animate pop delay-2">
        {" "}
        I'm a front end developer. I love making new stuff, playing with code
        and figuring out how stuff works. I aspire to build awe inspiring stuff,
        learn new technologies and keep challenging myself everyday!
      </div>
    </div>
  );
}
