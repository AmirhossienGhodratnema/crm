import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
    name: { type: String, required: true, minLength: 1 },
    lastName: { type: String, required: true, minLength: 1 },
    email: { type: String, required: true, minLength: 1 },
    phone: { type: String },
    address: { type: String },
    postalCode: { type: Number },
    products: { type: Array, default: [] },
}, { timestamps: true });

const Customer = models.Customer || model("Customer", customerSchema);
export default Customer;