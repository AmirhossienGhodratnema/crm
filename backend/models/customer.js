import { Schema, model } from "mongoose";

const Customer = Schema({
    name: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String, },
    address: { type: String, },
    postalCode: { type: String, },
    product: { type: Array, default: [] },
}, { timestamps: true })

module.exports = model('Customer', Customer);