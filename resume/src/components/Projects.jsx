import React from "react";

const Projects = ({ data }) => {
  return (
    <section className="projects">
      <h3>Projects</h3>
      <ul>
        {data.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong>: {project.description}
            <br />
            <strong>Technologies used:</strong> {project.technologies}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
