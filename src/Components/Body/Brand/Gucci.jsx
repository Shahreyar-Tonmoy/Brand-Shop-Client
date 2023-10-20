import { useLoaderData } from "react-router-dom";
import GucciCard from "./BrandCard/GucciCard";
import GucciSlider from "../../Slider/GucciSlider";
import { useEffect, useState } from "react";


const Gucci = () => {
    const data = useLoaderData()
    const [file, setFile] = useState([])
    const [dat, setDat] = useState([])

    useEffect(() => {
        const filter = data.filter(e => e.brand.toLowerCase().includes("Gucci".toLowerCase()))

        if (filter.length > 0) {
            setFile(filter)
        }
        else {
            setDat("No Product Found Here !!!");
        }




    }, [])

    return (

        <div>
            <GucciSlider></GucciSlider>
            
             <h1 className="text-center max-w-screen-xl mx-auto text-2xl font-semibold underline my-10">Our Product</h1>
            
            <div >
                {
                    !data ? "" : <p className="text-5xl mt-10 font-semibold text-center">{dat}</p>
                }

                {
                    !dat ? "" :
                        <div className="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                file?.map(data => <GucciCard key={data._id} GucciCards={data} ></GucciCard>)
                            }
                        </div>
                        
                }



            </div>
        </div>
    );
};

export default Gucci;