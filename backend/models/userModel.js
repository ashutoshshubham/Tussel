// const mongoose = require('../connection');

const { Types } = require('mongoose');
const {Schema, model} = require('../connection');     //import connection.js file
// importing schema and model from mongoose framework


const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    organisation : {type : Types.ObjectId, ref: 'organisation'}
})


module.exports = model('users', mySchema);                           //users is name of Collection






