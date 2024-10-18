import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Objective from "./components/Objective";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "./Resume.css";

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    // Load the JSON data
    fetch("/resumeData.json")
      .then((response) => response.json())
      .then((data) => setResumeData(data))
      .catch((error) => console.error("Error fetching resume data: ", error));
  }, []);

  if (!resumeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="resume-container">
      <Header data={resumeData.header} />
      <Objective data={resumeData.objective} />
      <Experience data={resumeData.experience} />
      <Projects data={resumeData.projects} />
      <Skills data={resumeData.skills} />
      <Education data={resumeData.education} />
    </div>
  );
};

export default App;
