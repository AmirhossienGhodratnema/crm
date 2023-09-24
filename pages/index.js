import Customer from "@/backend/models/customer";
import ConnectionDB from "@/backend/utils/connectDB";
import HomePage from "@/components/template/homePage";

export default function Home({ customers }) {
  return <HomePage customers={customers} />
};


export async function getServerSideProps() {
  await ConnectionDB();
  const customers = await Customer.find({}).sort({ createdAt: -1 });
  return {
    props: {
      customers: JSON.parse(JSON.stringify(customers))
    }
  };
};