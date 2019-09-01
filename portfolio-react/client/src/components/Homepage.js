import React, { Component } from 'react'
import ProjectList from './ProjectList'
import About from './AboutMe'
import Contact from './Contact'
import ProjectsList2 from './ProjectsList2'
import NavBar from './NavBar'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <a name='home'></a>
                    <NavBar/>
                </div>
                <div className='title-name'>
                    <h1>Rachel Tezza</h1>
                    <h3>Full-Stack Developer</h3>
                </div>
                <div className="about">
                    <About/>
                </div>
                
                 <div className='projects'>
                    <ProjectsList2/>
                 </div>
                 <div className='contact'>
                     <Contact/>
                 </div>
            </div>
        )
    }
}
