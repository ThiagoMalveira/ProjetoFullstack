const mongoose = require('mongoose');
const { Schema } = mongoose;

const clienteSchema = new Schema({
    nome: {
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
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Clientes', clienteSchema);