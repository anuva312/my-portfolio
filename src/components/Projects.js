import { getAllProjects } from "./projectData";
import ProjectCard from "./ProjectCard";
import "./projects.css";

export default function Projects() {
  const projectsData = getAllProjects();

  return (
    <div className="project-section-container" id="projects-section">
      <div className="project-section-title">Projects</div>
      <div className="all-projects-container">
        {projectsData.map((project) => (
          <ProjectCard data={project} key={project.id}></ProjectCard>
        ))}
      </div>
    </div>
  );
}
