const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Articlename:String,
    Description:String,
    category:String,
    userId:String,
    company:String
})

module.exports = mongoose.model('Articles',productSchema);