import React from "react";

const Experience = ({ data }) => {
  return (
    <section className="experience">
      <h3>Experience</h3>
      {data.map((job, index) => (
        <div className="job" key={index}>
          <h4 className="job-title">
            <span className="job-position">
              <b>{job.position}</b>
            </span>
            <a className="company-name" href={job.companyLink}>
              {job.company}
            </a>
            <span className="job-dates">
              <b>{job.dates}</b>
            </span>
          </h4>
          <ul>
            {job.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
