import React from "react";
import "./Portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from './data'
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data)

  const categories = data.map(item => item.category);
  // console.log(categories);
  const uniqueCategories = ["all", ...new Set(categories)]
  // console.log(uniqueCategories);
  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data)
      return
    }
    const filterProjects = data.filter(project => project.category === category)
    setProjects(filterProjects)
  }


  return (
    <section id="portfolio">
      <h2>Recents Projects</h2>
      <p>
        Check some of my projects i recently worked on for my clients. Use the
        buttons to toggle the different categories
      </p>
      <div className="container portfolio__container" >
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler} />
        <Projects projects={projects}/>
      </div>
    </section>
  );
};

export default Portfolio;
