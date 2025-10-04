//first time writing in node.js

const mongoose = require('monogoose'); //connects the file to node without multiple commands

const petSchema = new mongoose.Schema({

name: {type: String, required:true},
location:
})