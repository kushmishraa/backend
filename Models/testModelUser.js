const mongoose = require('mongoose');

const testUserSchema = new mongoose.Schema({
    name: "string",
    lastName: "string"
})

const testUser = new mongoose.model('testUser', testUserSchema);

module.exports = testUser;