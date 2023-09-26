import { useState } from "react"
import Form from "../module/form"
import { useRouter } from "next/router";

export default function CustomerEditPage({ data, id }) {
    const router = useRouter();
    const [form, setForm] = useState({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || '',
        address: data.address || '',
        postalCode: data.postalCode || '',
        product: data.product || [],
    });

    const cancelHandler = () => router.push('/')
    const saveHandler = async () => {
        const res = await fetch(`http://localhost:3000/api/edit/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        if (data.success == true) router.push('/');
    };

    return (
        <>
            <h4>Edit customer page</h4>
            <Form form={form} setForm={setForm} />
            <div className="customer-page__buttons">
                <button className="first" onClick={cancelHandler}>
                    Cancel
                </button>
                <button className="second" onClick={saveHandler}>
                    Edit
                </button>
            </div >
        </>
    )
};
