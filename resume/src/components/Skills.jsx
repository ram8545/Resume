import React from "react";

const Skills = ({ data }) => {
  return (
    <section className="skills">
      <h3>Technical Skills & Interests</h3>
      <ul>
        <li>{data.interests}</li>
        <li>
          <strong>Programming Languages:</strong> {data.languages}
        </li>
        <li>
          <strong>Database Management Systems:</strong> {data.databases}
        </li>
        <li>
          <strong>Tools, Libraries & Frameworks:</strong> {data.tools}
        </li>
      </ul>
    </section>
  );
};

export default Skills;
