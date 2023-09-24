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

    if (req.method === 'DELETE') {
        const { customerId } = req.query;
        const customer = await Customer.findOne({ _id: customerId });
        if (!customer) {
            return res.json({
                success: false,
                status: 400,
                message: 'Customer is not defined'
            })
        }
        const result = await Customer.deleteOne({ _id: customerId });
        if(result.deletedCount == 0) return res.status(400).json({
            success: false,
            status:400,
            message: 'The delete operation failed'
        })
        return res.json({
            success: true,
            status: 200,
            message: 'Delete customer successful'
        });
    };
}