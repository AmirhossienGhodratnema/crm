import { useState } from "react"
import Form from "../module/form"
import { useRouter } from "next/router";



export default function AddCustomerPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        address: '',
        postalCode: '',
        product: [],
    });


    const cancelHandler = () => {
        setForm({
            name: '',
            lastName: '',
            email: '',
            address: '',
            postalCode: '',
            product: [],
        });
        router.push('/');
    };

    const saveHandler = async () => {
        const res = await fetch('http://localhost:3000/api/customer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ form })
        });
        const { success, status, message } = await res.json();
        if (status == 201 && success == true) router.push('/')
    };


    return (
        <div className="customer-page">
            <h4>Add New Customer</h4>
            <Form form={form} setForm={setForm} />
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
