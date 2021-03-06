import React, { Component } from 'react'
import { Document } from 'react-pdf'
import Resume from '../Tezza,Rachel_Resume.pdf'

export default class Contact extends Component {
    state = {
        isResumeshowing: false
    }

handleShowResume = () => {
    this.setState({isResumeshowing: true})
}

handleHideResume = () => {
    this.setState({isResumeshowing: false})
}

    render() {
        return (
            this.state.isResumeshowing
            ?
            // <img src='#'/>
            <Document file={Resume}></Document>
            :
            <div>
                <h2>Contact</h2>
                <a name='contact'></a>
                <ul>
                    <li>
                        <p>racheletezza@gmail.com</p>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/racheltezza/' className='contact-link'>LinkedIn</a>
                    </li>
                    <li>
                        <a href='https://github.com/racheltezza?tab=repositories' className='contact-link'>GitHub</a>
                    </li>
                </ul>
            </div>
        )
    }
}
