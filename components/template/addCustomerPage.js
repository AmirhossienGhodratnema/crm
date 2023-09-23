import { useState } from "react"
import Form from "../module/form"



export default function AddCustomerPage() {
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        addressc: '',
        postalCode: '',
        product: '',
    });
    const cancelHandler = () => {
        console.log('Cancel handler');
    };

    const saveHandler = async () => {
        const res = await fetch('http://localhost:3000/api/customer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ form })
        });
        const data = await res.json();
        console.log('data', data);
    };


    return (
        <div className="customer-page">
            <h4>Add New Customer</h4>
            <Form />
            <div className="customer-page__buttons">
                <button className="first" onClick={cancelHandler}>
                    Cancel
                </button>
                <button className="second" onClick={saveHandler}>
                    Save
                </button>
            </div>
        </div>
    )
};
