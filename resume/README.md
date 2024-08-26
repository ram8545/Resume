import React from "react";
import "./Resume.css";

const App = () => {
return (
<div className="resume-container">
<header>
<h1>RAM SEVAK MISHRA</h1>
<h2>Full Stack Developer</h2>
<p>
+91 8545021612 | ramsevakmishra69@gmail.com |{" "}
<a href="https://linkedin.com/in/ramsevakmishra69">
linkedin.com/in/ramsevakmishra69
</a>
</p>
</header>

      <section className="objective">
        <h3>Objective</h3>
        <p>
          Be a part of rapidly advancing and evolving technology so that my
          talent, creativity is put to maximum exposure.
        </p>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        <div className="job">
          <h4 className="job-title">
            <span className="job-position">
              <b>Full Stack Developer</b>
            </span>
            <a
              className="company-name"
              href="https://www.bondlinc.com/who-we-are-"
            >
              Bondlinc Private Limited
            </a>
            <span className="job-dates">
              <b>Dec 2022 - Mar 2024</b>
            </span>
          </h4>
          <ul>
            <li>Created a parser to extract data from email.</li>
            <li>
              Supporting applications, manage their lifecycle and ensure high
              availability.
            </li>
            <li>
              <strong>Technology Used:</strong> Django, Elastic Search, Python,
              MySQL
            </li>
          </ul>
        </div>
        <div className="job">
          <h4 className="job-title">
            <span className="job-position">
              <b>Full Stack Developer</b>
            </span>
            <a
              className="company-name"
              href="https://www.linkedin.com/company/mach-x-private-limited/about/"
            >
              Mach-X Private Limited
            </a>
            <span className="job-dates">
              <b>June 2021 - Dec 2022</b>
            </span>
          </h4>
          <ul>
            <li>
              Developed the web user interface and the APIs, powering the
              application.
            </li>
            <li>Created parser to convert PDF file into Excel.</li>
            <li>
              <strong>Technology Used:</strong> React JS, Redux, Node JS,
              Express JS, Python, R, MySQL, AWS
            </li>
          </ul>
        </div>
      </section>

      <section className="projects">
        <h3>Projects</h3>
        <ul>
          <li>
            <strong>Online Attendance System — Using Face Recognition:</strong>{" "}
            A python application to help collect attendance quickly and easily.
            <br />
            <strong>Technologies used:</strong> Python, Android
          </li>
          <li>
            <strong>PDF to Excel Conversion:</strong> Developed a tool to
            automate the conversion of PDF documents to Excel spreadsheets using
            Python.
            <br />
            <strong>Technologies used:</strong> Python, Pymupdf, pandas,
            Openpyxl, Jupyter Notebook, Git
          </li>
          <li>
            <strong>
              Comprehensive Inventory and Order Management System:
            </strong>{" "}
            Developed a robust Inventory and Order Management System designed to
            streamline procurement, inventory, order processing, and billing
            operations.
            <br />
            <strong>Technologies used:</strong> Laravel, PHP, HTML, CSS,
            JavaScript, MySQL, REST APIs
          </li>
        </ul>
      </section>

      <section className="skills">
        <h3>Technical Skills & Interests</h3>
        <ul>
          <li>
            Good understanding of Data Structures and Computer Algorithms.
          </li>
          <li>
            <strong>Programming Languages:</strong> JavaScript, Python, C
          </li>
          <li>
            <strong>Database Management Systems:</strong> MySQL, PostgreSQL,
            MongoDB
          </li>
          <li>
            <strong>Tools, Libraries & Frameworks:</strong> React, Node,
            Express, Django, Flask, Git, Docker, AWS Services, ChatGPT
          </li>
        </ul>
      </section>

      <section className="education">
        <h3>Education</h3>
        <ul>
          <li>
            B. Tech in Computer Science & Engineering from AKTU, Lucknow (2016 -
            2020) - CGPA 6.82
          </li>
          <li>Senior Secondary, State Board (2014 - 2016) - 87% </li>
          <li>Higher Secondary, State Board (2012 - 2016) - 85%</li>
        </ul>
      </section>
    </div>

);
};

export default App;
