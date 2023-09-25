import { useState } from "react"
import Form from "../module/form"

export default function CustomerEditPage({ data }) {
    const [form, setForm] = useState({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || '',
        address: data.address || '',
        postalCode: data.postalCode || '',
        product: data.product || [],
    });

   

    return (
        <>
            <h4>Edit customer page</h4>
            <Form form={form} setForm={setForm} />
        </>
    )
};
