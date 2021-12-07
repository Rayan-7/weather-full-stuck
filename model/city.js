const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/cityDB', { useNewUrlParser: true })

const citySchema = new Schema({
    name : String,
    temperature : Number,
    condition : String,
    conditionPic : String
})

const City = mongoose.model('city', citySchema)





module.exports = City