import React, { Component } from 'react';
import Jeopardy from '../jeopardy.png';
import ProjectPlaylist from '../project_playlist.png';
import RecycleThat from '../recycle.png';
import AjarYoga from '../ajar_yoga.png';

let projects = [
    {
        name: "Ajar Yoga",
        about: "Ajar Yoga allows users to search and save yoga events to lists so that they have a dedicated and centralized platform for keeping track of events they may want to attend.",
        gitHubLink: "https://github.com/racheltezza/project4-yoga",
        projectLink: "https://quiet-falls-54203.herokuapp.com/",
        description: "To make a full stack application using the MERN stack (mongodb, express, react.js, node.js)",
        skills: "HTML, CSS, JS",
        image: AjarYoga
    },
    {
        name: "projectPlaylist",
        about: "projectPlaylist allows users to save music playlists based on genre and tempo so that they have a place where playlist customization provides a more enjoyable music experience.",
        gitHubLink: "https://github.com/racheltezza/project2-playlists",
        projectLink: "https://morning-badlands-64029.herokuapp.com/users",
        description: "To make a full stack application using the MEHN stack (mongodb, express, handlebars, node.js)",
        skills: "HTML, CSS, JS",
        image: ProjectPlaylist
    },
    {
        name: "recycleThat",
        about: "recycleThat allows users to keep track of what they recycle so that they can build awareness of environmental impact as well as participating in possible incentivized recycling programs.",
        gitHubLink: "https://github.com/racheltezza/project3-recycling",
        projectLink: "https://tranquil-coast-91943.herokuapp.com/",
        description: "To make a full stack application using the MERN stack (mongodb, express, react.js, node.js)",
        skills: "HTML, CSS, JS",
        image: RecycleThat
    },
    {
        name: "Jeopardy",
        about: "Jeopardy allows users to play the classic game with a concentration on web development and a wildcard category about animals.",
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
                        <li>
                        <span className='bold'>About</span><br/> {project.about} 
                        </li>
                        <li><span className='bold'>Skill Objective</span><br/> {project.description}</li>
                        <li><span className='bold'>Languages Used</span><br/> {project.skills}</li>
                        <li>
                            <a href={project.projectLink}>Website</a>
                        </li>
                        <li>
                            <a href={project.gitHubLink}>On GitHub</a>
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
