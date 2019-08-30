import React, { Component } from 'react'
import ProjectList from './ProjectList'
import About from './AboutMe'
import Contact from './Contact'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <div className='title-name'>
                    <h1>Rachel Tezza</h1>
                    <h3>Full-Stack Developer</h3>
                </div>
                <div className="about">
                    <About/>
                </div>
                
                 <div className='projects'>
                    <ProjectList/>
                 </div>
                 <div className='contact'>
                     <Contact/>
                 </div>
            </div>
        )
    }
}
