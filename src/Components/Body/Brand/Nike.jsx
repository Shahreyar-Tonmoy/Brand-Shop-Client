import { useLoaderData } from "react-router-dom";
import NikeCard from "./BrandCard/NikeCard";


const Nike = () => {
    const data =useLoaderData()
    const filter =data.filter(e => e.brand.includes("Nike") )
  
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                filter?.map(data =><NikeCard key={data._id} NikeCards={data} ></NikeCard>)
            }
        </div>
        </div>
    );
};

export default Nike;