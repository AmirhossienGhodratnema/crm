import Link from "next/link";
import { useRouter } from "next/router";

export default function Card({ customer }) {
    const { _id, name, lastName, email } = customer;
    const router = useRouter()

    const deleteHandler = async () => {
        const res = await fetch(`http://localhost:3000/api/delete/${_id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        if (data.success == true && data.status == 200) router.push('/');
    }
    return (
        <div className="card">
            <div className="card__details">
                <p>
                    {name} {lastName}
                </p>
                <p>{email}</p>
            </div>
            <div className="card__buttons">
                <button onClick={deleteHandler}>Delete</button>
                <Link href={`/edit/${customer._id}`}>Edit</Link>
                <Link href={`/customer/${customer._id}`}>Details</Link>
            </div>
        </div>
    )
};
