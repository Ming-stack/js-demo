const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Categories = new Schema({
    name: String
});
module.exports = mongoose.model('Categories', Categories);