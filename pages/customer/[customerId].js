import CustomerDetailsPage from "@/components/template/customerDetailsPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {

    const [data, setData] = useState(null);
    const router = useRouter();
    const { query: { customerId }, isReady } = router;
    useEffect(() => {
        if (isReady) {
            fetch(`http://localhost:3000/api/customer/${customerId}`)
                .then(res => res.json())
                .then(result => setData(result.customer))
        };
    }, [isReady]);


   if(data) return <CustomerDetailsPage data={data} id={customerId} />;
}

