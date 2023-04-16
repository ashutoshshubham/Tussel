const { Types } = require('mongoose')
const {Schema, model} = require('../connection')


const mySchema = new Schema({
    org_name : String,
    org_details : String,
    user : {type : Types.ObjectId, ref: 'users'}

})





module.exports = model('organisation', mySchema)