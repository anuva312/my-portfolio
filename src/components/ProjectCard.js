import "./projectCard.css";

export default function ProjectCard({ data }) {
  const onClickView = function (e, url) {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <div className={`project-card-container animate pop delay-${data.id}`}>
      <div className="image-container">
        <img
          src={`${data.image}`}
          alt={`${data.name}-screenshot`}
          className="project-image"
        ></img>
      </div>
      <div className="project-details-container">
        <div className="project-title">{data.name}</div>
        <div className="tags-container">
          <div
            className={`${
              data.isCompleted ? "tag-completed" : "tag-ongoing"
            } project-tag`}
          >
            {data.isCompleted ? "completed" : "ongoing"}
          </div>
          {data.isResponsive ? (
            <div className="project-tag tag-responsive">responsive</div>
          ) : null}
          {data.isDevChallenge ? (
            <div className="project-tag tag-dev-challenge">devChallenges</div>
          ) : null}
        </div>
        <div className="project-description">{data.description}</div>
        <div className="project-buttons-container">
          <div
            className="project-buttons view-site-button"
            onClick={(e) => onClickView(e, data.website)}
          >
            View Site
          </div>
          <div
            className="project-buttons view-code-button"
            onClick={(e) => onClickView(e, data.code)}
          >
            View Code
          </div>
        </div>
      </div>
    </div>
  );
}
