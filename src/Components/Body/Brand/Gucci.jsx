import { useLoaderData } from "react-router-dom";
import GucciCard from "./BrandCard/GucciCard";


const Gucci = () => {
    const data =useLoaderData()
    const filter =data.filter(e => e.brand.includes("Gucci") )
  
    return (
        <div className="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                filter?.map(data =><GucciCard key={data._id} GucciCards={data} ></GucciCard>)
            }
        </div>
    );
};

export default Gucci;