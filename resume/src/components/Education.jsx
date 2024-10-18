import React from "react";

const Education = ({ data }) => {
  return (
    <section className="education">
      <h3>Education</h3>
      <ul>
        {data.map((education, index) => (
          <li key={index}>
            {education.degree} from {education.institution} ({education.years})
            - {education.result}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
