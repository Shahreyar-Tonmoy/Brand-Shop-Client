
import { useLoaderData } from 'react-router-dom';
import LeviesCard from './BrandCard/LeviesCard';
import LeviesSlider from '../../Slider/LeviesSlider';

const Levies = () => {
    const data =useLoaderData()
    const filter =data.filter(e => e.brand.includes("Levi's") )
  
    return (
        <div>
            <LeviesSlider></LeviesSlider>
            <div className="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                filter?.map(data =><LeviesCard key={data._id} LeviesCards={data} ></LeviesCard>)
            }
        </div>
        </div>
    );
};

export default Levies;