const {Schema, model} = require('../connection')

const mySchema = new Schema({
    date : Date,
    description : String,
    rules : String,
    rewards : String,
    question : String
})

module.exports = model('online', mySchema);