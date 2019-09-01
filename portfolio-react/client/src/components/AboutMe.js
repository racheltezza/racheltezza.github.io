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
        name: 'NODE.JS',
        icon: NODE
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
        name: 'MONGODB',
        icon: MONGO
    },
    {
        name: 'ADOBE ILLUSTRATOR',
        icon: AI
    },
    {
        name: 'ADOBE PHOTOSHOP',
        icon: PS
    },
    {
        name: 'VISUAL STUDIO CODE',
        icon: VS
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
            <div>
                <li><img src={skill.icon}/>{skill.name}</li>
                </div>)
        })
        return (
            <div>
                <a name='about'></a>
                <h2>About</h2>
                <p className='about-p'>Coming from a background in creative and UX design, as a full-stack dveeloper,
                    I am ready and excited to develop the world into a better and more beautiful place.
                </p>
                <div className='skills'>
                <h3>Skills</h3>
                <ul>
                {skillsList}
                </ul>
                </div>
            </div>
        )
    }
}
