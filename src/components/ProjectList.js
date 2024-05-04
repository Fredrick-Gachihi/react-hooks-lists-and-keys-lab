
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {


  return (
    <div id="project-list">
    {/* render ProjectItem components here */}
    {projects.map((project) => (
      <ProjectItem key={project.id} {...project} />
    ))}
  </div>
);
}
export default ProjectList;