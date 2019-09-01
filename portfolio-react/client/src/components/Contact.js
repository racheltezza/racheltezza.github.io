import React, { Component } from 'react'

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
            <img src='#'/>
            :
            <div>
                <h2>Contact</h2>
                <a name='contact'></a>
                <ul>
                    <li>
                        <p><span className='bold'>Email:</span> racheletezza@gmail.com</p>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/racheltezza/'>LinkedIn</a>
                    </li>
                    <li>
                        <a href='https://github.com/racheltezza?tab=repositories'>GitHub</a>
                    </li>
                </ul>
            </div>
        )
    }
}
