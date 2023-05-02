import React from 'react'
import Card from '../../Components/Card'

const Project = ({project}) => {
  return (
    <Card className="portfolio_project">
        <div className='porfolio__project-image' >
            <img src={project.image} alt="Portfolio Project Image" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className='portfolio__project-cta'>
            <a href={project.demo} className="btn sm" target="_blank" rel="noopener noreferre" > Demo</a>
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopener noreferre" >Github</a>
        </div>

    </Card>
  )
}

export default Project