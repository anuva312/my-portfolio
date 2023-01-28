import "./About.css";
import "./animation.css";
import onClickIcon from "./onClickIcon";

export default function About() {
  const downloadResumeOnClick = function (e) {
    e.preventDefault();
  };

  return (
    <div className="about-main-container" id="about-section">
      <div className="about-main-heading animate slide">
        Hey there👋, I'm Anusree V A
      </div>
      <div className="about-photo animate delay-1"></div>
      <div className="about-description animate pop delay-2">
        {" "}
        I'm a front end developer. I love making new stuff, playing with code
        and figuring out how stuff works. I want to build awe inspiring stuff,
        learn new technologies and keep challenging myself everyday!
      </div>
      <div className="about-links-container animate pop delay-4">
        Come say hii on :{" "}
        <div className="about-links-icon-container">
          <i
            className="fa-brands fa-github about-link-icon"
            onClick={(e) => onClickIcon(e, "github")}
          ></i>
          <i
            className="fa-brands fa-twitter about-link-icon"
            onClick={(e) => onClickIcon(e, "twitter")}
          ></i>
          <i
            className="fa-brands fa-linkedin about-link-icon"
            onClick={(e) => onClickIcon(e, "linkedin")}
          ></i>
        </div>
      </div>
      <div className="about-resume-download-button-container animate pop delay-5">
        <a href={`/assets/files/Resume.pdf`} download="Resume-Anusree V A">
          <button
            className="about-resume-download-button"
            onClick={() => downloadResumeOnClick()}
          >
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
