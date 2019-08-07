/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')



/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const ProjectSchema = new mongoose.Schema({
 name: String,
 gitHubLink: String,
 projectLink: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const ProjectCollection = mongoose.model('Project', ProjectSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllProjects() {
  return ProjectCollection.find()
}

function getProject(projectId) {
  return ProjectCollection.findById(projectId)
}

function createProject(newProject) {
  return ProjectCollection.create(newProject)
}

function editProject(projectId, newProject) {
  return ProjectCollection.findByIdAndUpdate(projectId, newProject, {new: true})
}

function deleteProject(projectId) {
  return ProjectCollection.findByIdAndDelete(projectId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllProjects,
  getProject,
  createProject,
  editProject,
  deleteProject
}
