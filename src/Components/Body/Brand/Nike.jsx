import { useLoaderData } from "react-router-dom";
import NikeCard from "./BrandCard/NikeCard";
import NikeSlider from "../../Slider/NikeSlider";


const Nike = () => {
    const data = useLoaderData()
    const filter = data?.filter(e => e.brand.toLowerCase().includes("Nike".toLowerCase()))

    return (
        <div>
            <NikeSlider></NikeSlider>
            <div className="max-w-screen-xl mx-auto ">
                <h1 className="text-2xl text-center font-semibold underline my-10">Our Product</h1>
            <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    filter?.map(data => <NikeCard key={data._id} NikeCards={data} ></NikeCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Nike;