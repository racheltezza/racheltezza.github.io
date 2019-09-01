import React, { Component } from 'react'
import { css } from '@material-ui/system';

let skills = [
    'html',
    'css',
    'javascript'
]

export default class AboutMe extends Component {
    render() {
        let skillsList = skills.map((skill) => {
            return(<li>{skill}</li>)
        })
        return (
            <div>
                <a name='about'></a>
                <h2>About</h2>
                <p>Coming from a background in creative and UX design, as a full-stack dveeloper,
                    I am ready and excited to develop the world into a better and more beautiful place.
                </p>
                <h3>Skills</h3>
                {skillsList}
            </div>
        )
    }
}
