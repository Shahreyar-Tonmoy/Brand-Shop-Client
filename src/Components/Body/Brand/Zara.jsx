
import { useLoaderData } from 'react-router-dom';
import ZaraCard from './BrandCard/ZaraCard';

const Zara = () => {
    const data =useLoaderData()
    const filter =data.filter(e => e.brand.includes("Zara") )
  
    return (
        <div className="max-w-screen-xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                filter?.map(data =><ZaraCard key={data._id} ZaraCards={data} ></ZaraCard>)
            }
        </div>
    );
};

export default Zara;