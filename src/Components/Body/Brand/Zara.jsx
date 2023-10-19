
import { useLoaderData } from 'react-router-dom';
import ZaraCard from './BrandCard/ZaraCard';
import ZaraSlider from '../../Slider/ZaraSlider';

const Zara = () => {
    const data =useLoaderData()
    const filter =data.filter(e => e.brand.includes("Zara") )
  
    return (
        <div>
            <ZaraSlider></ZaraSlider>
            <h1 className="max-w-screen-xl mx-auto text-2xl font-semibold underline my-10">Our Product</h1>
            <div className="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                filter?.map(data =><ZaraCard key={data._id} ZaraCards={data} ></ZaraCard>)
            }
        </div>
        </div>
    );
};

export default Zara;