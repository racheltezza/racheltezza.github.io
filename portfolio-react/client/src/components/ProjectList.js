/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Projects extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        projects: []
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
   componentDidMount() {
        this.getAllProjects()
    }

    getAllProjects = () => {
        axios.get(`/api/projects`)
        .then((res) => {
            this.setState({projects: res.data})
        })

    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        let projectsList = this.state.projects.map((project) => {
            return( 
                <ul>
                    <li>
            <Link
                key={project._id} 
                to={`/projects/${project._id}`}
            >
                {project.name}
            </Link>

                    </li>
                </ul>
            )
        })
        return (
            <div>
                <h2>Projects</h2>
                {projectsList}
            </div>
        )
    }
}
