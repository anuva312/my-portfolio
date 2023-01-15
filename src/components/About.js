import "./About.css";
import "./animation.css";

export default function About() {
  const onClickIcon = function (e, type) {
    e.preventDefault();
    let url = "";
    switch (type) {
      case "github":
        url = "https://github.com/anuva312";
        break;
      case "twitter":
        url = "https://twitter.com/this_is_anuVA";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/anusree-va/";
        break;
      default:
        url = null;
        break;
    }
    if (url) {
      window.open(url, "_blank");
    }
  };

  const downloadResumeOnClick = function (e) {
    e.preventDefault();
  };

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
      <div className="about-links-container animate pop delay-4">
        Come say hii on :{" "}
        <div className="about-links-icon-container">
          <i
            class="fa-brands fa-github about-link-icon"
            onClick={(e) => onClickIcon(e, "github")}
          ></i>
          <i
            class="fa-brands fa-twitter about-link-icon"
            onClick={(e) => onClickIcon(e, "twitter")}
          ></i>
          <i
            class="fa-brands fa-linkedin about-link-icon"
            onClick={(e) => onClickIcon(e, "linkedin")}
          ></i>
        </div>
      </div>
      <div className="about-resume-download-button-container">
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
