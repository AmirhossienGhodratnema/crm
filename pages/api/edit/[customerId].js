import Customer from "@/backend/models/customer";
import ConnectionDB from "@/backend/utils/connectDB";


export default async function handler(req, res) {
    try {
        await ConnectionDB();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            status: 500,
            message: 'Error in connecting to DB'
        });
    };

    if (req.method === 'PATCH') {
        const { customerId } = req.query;
        const { name, lastName, email, phone, postalCode, address, product } = req.body;
        if (!name || !lastName || !email) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: 'name, lastName, email is require...'
            });
        };
        const customer = await Customer.find({ _id: customerId });
        if (!customer) return res.status(400).json({
            success: false,
            status: 400,
            message: 'Customer is not defind'
        });
        const result = await Customer.updateOne({ _id: customerId },
            { name, lastName, email, phone, postalCode, address, product });

        if (result.modifiedCount == 0) return res.status(500).json({
            success: false,
            status: 500,
            message: 'Customer not update please try agine...'
        });

        return res.json({
            success: true,
            status: 200,
            message: 'Update customer',
        });
    };
};