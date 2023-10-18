import { useLoaderData } from "react-router-dom";


const Ourproduct = () => {
    const Product = useLoaderData()
    console.log(Product.length);
    return (
        <div>
            
        </div>
    );
};

export default Ourproduct;