/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const projectApi = require('../models/projects.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const projectRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
projectRouter.get('/', (req, res) => {
  projectApi.getAllProjects()
    .then((projects) => {
      res.json(projects)
    })
})

projectRouter.get('/:projectId', (req, res) => {
  projectApi.getProject(req.params.projectId)
  .then((project) => {
    res.json(project)
  })
})

projectRouter.post('/', (req, res) => {
  projectApi.createProject(req.body)
  .then((newProject) => {
    res.json(newProject)
  })
})

projectRouter.delete('/:projectId', (req, res) => {
  projectApi.deleteProject(req.params.projectId)
  .then(() => {
    res.send('project deleted')
  })
})

projectRouter.put('/:projectId', (req, res) => {
  projectApi.editProject(req.params.projectId, req.body)
  .then((updatedProject) =>{
    res.json(updatedProject)
  })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  projectRouter
}
