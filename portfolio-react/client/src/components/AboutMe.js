import React, { Component } from 'react'
import { css } from '@material-ui/system';
import HTML from '../devicons-master/PNG/html5.png'
import CSS from '../devicons-master/PNG/css3.png'
import JS from '../devicons-master/PNG/javascript_1.png'
import REACT from '../devicons-master/PNG/react.png'
import NODE from '../devicons-master/PNG/nodejs.png'
import GIT from '../devicons-master/PNG/git.png'
import GITHUB from '../devicons-master/PNG/github_badge.png'
import BOOTSTRAP from '../devicons-master/PNG/bootstrap.png'
import HEROKU from '../devicons-master/PNG/heroku.png'
import MONGO from '../devicons-master/PNG/mongodb.png'
import AI from '../devicons-master/PNG/illustrator.png'
import PS from '../devicons-master/PNG/photoshop.png'
import VS from '../devicons-master/PNG/visualstudio.png'
import SKETCH from '../devicons-master/PNG/sketchapp.png'
import PAINT from '../abstract_paint.jpg'
import CODE from '../code.jpg'

let skills = [
    {
        name: 'HTML5',
        icon: HTML
    },
    {
        name: 'CSS3',
        icon: CSS
    },
    {
        name: 'JAVASCRIPT',
        icon: JS
    },
    {
        name: 'REACT.JS',
        icon: REACT
    },
    {
        name: 'GIT',
        icon: GIT
    },
    {
        name: 'GITHUB',
        icon: GITHUB
    },
    {
        name: 'BOOTSTRAP',
        icon: BOOTSTRAP
    },
    {
        name: 'HEROKU',
        icon: HEROKU
    },
    {
        name: 'NODE.JS',
        icon: NODE
    },
    {
        name: 'MONGODB',
        icon: MONGO
    },
    {
        name: 'VISUAL STUDIO CODE',
        icon: VS
    },
    {
        name: 'ADOBE ILLUSTRATOR',
        icon: AI
    },
    {
        name: 'ADOBE PHOTOSHOP',
        icon: PS
    },
    // {
    //     name: 'SKETCH APP',
    //     icon: SKETCH
    // },

]

export default class AboutMe extends Component {
    render() {
        let skillsList = skills.map((skill) => {
            return(
            <div className='skill-couple'>
                <li><img src={skill.icon}/><br/>{skill.name}</li>
                </div>)
        })
        return (
            <div>
                <a name='about'></a>
                <h2>About</h2>
                <div className='about-section'>
                <img src={PAINT} className='about-image'/>
                <p className='about-p'>
                   While navgating the world of UX and creative design, 
                   I found that I didn't really know much about what went into developing 
                   these experiences and designs I was creating. 
                   That's when I gained an interest in learning more about what goes on 
                   behind the scenes of the UI and becoming a developer. I have since pivoted 
                   to the world of software engineering and have learned some tools and 
                   skills to build full-stack applications. My goal is to make peoples' 
                   lives better through development and a positive user experience.
                </p>
                <img src={CODE} className='about-image'/>
                </div>
                <div className='skills'>
                <h3 className='skills-title'>Skills</h3>
                <ul>
                {skillsList}
                </ul>
                </div>
            </div>
        )
    }
}
