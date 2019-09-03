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
                    <div className='title'>
                        <h1>Rachel Tezza</h1>
                        <h3>Full-Stack Developer</h3>
                        <p className='brand-statement'> Artistic and deviceful software engineer coming from a background
                            in UX and creative design ready <br/> to develop the world into a better
                            and more beautiful place. </p>
                    </div>
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
