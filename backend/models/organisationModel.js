const {Schema, model} = require('../connection')


const mySchema = new Schema({
    org_name : String,
    org_details : String

})





module.exports = model('organisation', mySchema)