import { useLoaderData } from "react-router-dom";
import AdidasCard from "./BrandCard/AdidasCard";


const Adidas = () => {
    const data =useLoaderData()
    const filter =data.filter(e => e.brand.includes("Adidas") )
  
    return (
        <div className="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                filter?.map(data =><AdidasCard key={data._id} AdidasCards={data} ></AdidasCard>)
            }
        </div>
    );
};

export default Adidas;