import Card from "../module/card";

export default function HomePage({ customers }) {
    console.log('Customer in home page', customers)
    return (
        <div>
            {
                customers.map((customer) => (
                    <Card key={customer._id} customer={customer} />
                ))
            }
        </div>
    )
};
