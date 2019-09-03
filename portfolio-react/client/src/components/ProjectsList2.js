import React, { Component } from 'react';
import Jeopardy from '../jeopardy.png';
import ProjectPlaylist from '../project_playlist.png';
import RecycleThat from '../recycle.png';
import AjarYoga from '../ajar_yoga.png';

let projects = [
    {
        name: "Ajar Yoga",
        gitHubLink: "https://github.com/racheltezza/project4-yoga",
        projectLink: "https://quiet-falls-54203.herokuapp.com/",
        description: "To make a full stack application using the MERN stack (mongodb, express, react.js, node.js)",
        skills: "HTML, CSS, JS",
        image: AjarYoga
    },
    {
        name: "projectPlaylist",
        gitHubLink: "https://github.com/racheltezza/project2-playlists",
        projectLink: "https://morning-badlands-64029.herokuapp.com/users",
        description: "To make a full stack application using the MEHN stack (mongodb, express, handlebars, node.js)",
        skills: "HTML, CSS, JS",
        image: ProjectPlaylist
    },
    {
        name: "recycleThat",
        gitHubLink: "https://github.com/racheltezza/project3-recycling",
        projectLink: "https://tranquil-coast-91943.herokuapp.com/",
        description: "To make a full stack application using the MERN stack (mongodb, express, react.js, node.js)",
        skills: "HTML, CSS, JS",
        image: RecycleThat
    },
    {
        name: "Jeopardy",
        gitHubLink: "https://github.com/racheltezza/project1-jeopardy",
        projectLink: "https://rezzaproject1jeopardy.netlify.com/",
        description: "To make a functioning jeopardy game using html, css, and javaScript.",
        skills: "HTML, CSS, JS",
        image: Jeopardy
    },
]

export default class ProjectsList2 extends Component {
    render() {
        let projectsList= projects.map((project) => {
            return(
                <div>
                    <ul className='project'>
                        <li><h4>{project.name}</h4></li>
                        <li>
                            <img src={project.image} className='project-image' />
                        </li>
                        <li><span className='bold'>Objective:</span> {project.description}</li>
                        <li><span className='bold'>Languages Used:</span> {project.skills}</li>
                        <li>
                            <a href={project.projectLink}>See Project Here</a>
                        </li>
                        <li>
                            <a href={project.gitHubLink}>GitHub Repo</a>
                        </li> 
                    </ul>
                </div>
            )
        })
        return (
            <div>
            <a name='projects'></a>
                <h2 className='projects-title'>Projects</h2>
                    <div className='projects-list'>
                {projectsList}
                </div>
            </div>
        )
    }
}
