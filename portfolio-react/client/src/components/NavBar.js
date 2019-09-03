import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href='#home'>HOME</a>
                    </li>
                    <li>
                    <a href='#about'>ABOUT</a>
                    </li>
                    <li>
                    <a href='#projects'>PROJECTS</a>
                    </li>
                    <li>
                    <a href='#contact'>CONTACT</a>
                    </li>
                </ul>
            </div>
        )
    }
}
