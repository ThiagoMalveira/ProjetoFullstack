const mongoose = require('../database/Index');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    valor: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;