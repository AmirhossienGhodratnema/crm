import { useState } from "react"
import Form from "../module/form"
import { useRouter } from "next/router";



export default function AddCustomerPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: 'Amirhossein',
        lastName: 'Ghodratnema',
        email: 'Amirhosseinghodratnema@gmail.com',
        addressc: '',
        postalCode: '',
        product: '',
    });

    console.log('form', form)
    const cancelHandler = () => {
        console.log('Cancel handler');
    };

    const saveHandler = async () => {
        const res = await fetch('http://localhost:3000/api/customer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ form })
        });
        const { success, status } = await res.json();
        if (status == 201 && success == true) router.push('/')
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