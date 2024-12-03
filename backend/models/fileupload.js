const {Schema, model} = require('../connection');
const fileuploadSchema = new Schema({
    name: String,
    description: String,
    imageurl : String
});
module.exports = model('fileupload' ,fileuploadSchema);