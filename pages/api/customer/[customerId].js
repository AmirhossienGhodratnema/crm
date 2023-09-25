import Customer from "@/backend/models/customer";


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

    if (req.method === 'GET') {
        const { customerId } = req.query;
        const customer = await Customer.findById(customerId);
        if (!customer) return res.status(400).json({
            success: false,
            status: 400,
            message: 'customer not defined'
        });
        return res.status(200).json({
            success: true,
            status: 200,
            customer
        });
    }
}