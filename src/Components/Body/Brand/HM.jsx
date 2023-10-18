import { useLoaderData } from "react-router-dom";
import HMCard from "./BrandCard/HMCard";
import HMSlider from "../../Slider/HMSlider";


const HM = () => {
    const data =useLoaderData()
    const filter =data.filter(e => e.brand.includes("H&M") )
  
    return (
        <div>
            <HMSlider></HMSlider>
            <div className="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                filter?.map(data =><HMCard key={data._id} HMCards={data} ></HMCard>)
            }
        </div>
        </div>
    );
};

export default HM;