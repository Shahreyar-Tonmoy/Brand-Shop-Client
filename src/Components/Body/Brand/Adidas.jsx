import { useLoaderData } from "react-router-dom";
import AdidasCard from "./BrandCard/AdidasCard";
import AdidasSlider from "../../Slider/AdidasSlider";


const Adidas = () => {
    const data =useLoaderData()
    const filter =data.filter(e => e.brand.toLowerCase().includes("Adidas".toLowerCase()) )
  
    return (
        <div>
            <AdidasSlider></AdidasSlider>
            <h1 className="text-center max-w-screen-xl mx-auto text-2xl font-semibold underline my-10">Our Product</h1>
            <div className="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                filter?.map(data =><AdidasCard key={data._id} AdidasCards={data} ></AdidasCard>)
            }
        </div>
        </div>
    );
};

export default Adidas;