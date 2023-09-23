import ConnectionDB from "@/backend/utils/connectDB";
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


    if (req.method === 'POST') {
        const data = req.body.form;
        console.log('data', data)
        if (!data.name || !data.lastName || !data.email) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: 'Invalid data'
            });
        }
        try {
            await Customer.create(data);
            return res.status(201).json({
                success: true,
                status: 201,
                message: 'Created customer'
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                status: 500,
                message: 'Error in storing data  in DB'
            });
        }
    };
};