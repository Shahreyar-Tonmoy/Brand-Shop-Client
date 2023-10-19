import { useLoaderData } from "react-router-dom";
import GucciCard from "./BrandCard/GucciCard";
import GucciSlider from "../../Slider/GucciSlider";


const Gucci = () => {
    const data =useLoaderData()
    const filter =data.filter(e => e.brand.includes("Gucci") )
  
    return (
        <div>
            <GucciSlider></GucciSlider>
            <h1 className="max-w-screen-xl mx-auto text-2xl font-semibold underline my-10">Our Product</h1>
            <div className="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                filter?.map(data =><GucciCard key={data._id} GucciCards={data} ></GucciCard>)
            }
        </div>
        </div>
    );
};

export default Gucci;