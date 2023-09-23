import { Schema, model } from "mongoose";

const Customer = Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, },
    address: { type: String, },
    postalCode: { type: String, },
    product: { type: Array, default: [] },
}, { timestamps: true })

module.exports = model('Buy', Customer);