const {Schema, model} = require('../connection');
const projectSchema = new Schema({
    contributor: String,
    mentor: String,
    organization: String,
    projectName: String,
    description: String,
    technologies: String,
    topics: String,
    projectDetails: String

});
module.exports = model('project' ,projectSchema);