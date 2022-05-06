import React from "react";
import Languages from "../components/Languages";
import Skills from "../components/Skills";
import "../styles/css/Education.css";

export function Education() {
  return (
    <div className="main-details">
      <h1>Education</h1>
      <div className="main-education-details">
        <div className="education-container">
          <h4>Sami Shamoon College of Engineering, Bachelor of science</h4>
          <br />
            Oct 2020 — Jul 2022
            <br />
            Beersheba
          <br />
          <p>
            BSc in Software Engineering, SCE College of Engineering, Beer Sheva.
            (After army)
          </p>
        </div>
        <div className="education-container">
          <h4>Sami Shamoon College of Engineering, Bachelor of science</h4>
          <br />
            Oct 2014 — Jul 2016
            <br />
            Beersheba
          <br />
          <p>
            BSc in Software Engineering, SCE College of Engineering, Beer Sheva.
            (Before army)
          </p>
        </div>
      </div>
      <div className="skills">
        <Skills />
        <Languages />
      </div>
    </div>
  );
}

export default Education;
