import React, { Component } from 'react'

let projects = [
    {
        name: "projectPlaylist",
        gitHubLink: "https://github.com/racheltezza/project2-playlists",
        projectLink: "https://morning-badlands-64029.herokuapp.com/users",
        description: "make a full stack application with mehn",
        skills: "html, css, js"
    },
    {
        name: "jeopardy",
        gitHubLink: "https://github.com/racheltezza/project1-jeopardy",
        projectLink: "https://rezzaproject1jeopardy.netlify.com/",
        description: "make a functioning jeopardy game",
        skills: "html, css, js"
    },
    {
        name: "recycleThat",
        gitHubLink: "https://github.com/racheltezza/project3-recycling",
        projectLink: "https://tranquil-coast-91943.herokuapp.com/",
        description: "make a full stack application with mern",
        skills: "html, css, js"
    },
    {
        name: "Ajar Yoga",
        gitHubLink: "https://github.com/racheltezza/project4-yoga",
        projectLink: "https://quiet-falls-54203.herokuapp.com/",
        description: "make a full stack application with mern",
        skills: "html, css, js"
    }
]

export default class ProjectsList2 extends Component {
    render() {
        let projectsList= projects.map((project) => {
            return(
                <div>
                <li>{project.name}</li>
                <li>
                    <a href={project.projectLink}>See Project Here</a>
                </li>
                <li>
                    <a href={project.gitHubLink}>GitHub Repo</a>
                </li> 
                <li>Objective: {project.description}</li>
                <li>Languages Used: {project.skills}</li>
                </div>
            )
        })
        return (
            <div>
                <h2>Projects</h2>
                <a name='projects'></a>
                {projectsList}
            </div>
        )
    }
}
