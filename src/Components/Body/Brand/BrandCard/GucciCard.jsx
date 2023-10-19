/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';


const GucciCard = ({GucciCards}) => {
    const {name,brand,photoURL,type,price,shortDescription,rating,_id} = GucciCards
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-96 w-96" src={photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        
                    </h2>
                    <div className="flex gap-14">
                    <h2 className="text-lg">
                        Type : {type}
                        
                    </h2>
                    <h2 className="text-lg">
                        Brand : {brand}
                        
                    </h2>
                    </div>
                    <h2 className="text-lg font-medium">
                        Price : ${price}
                        
                    </h2>
                    <Rating name="half-rating" defaultValue={rating} precision={0.5} />
                    <p>{shortDescription}</p>
                    <div className="card-actions justify-end mt-4">
                    <Link to={`/UpdateProducat/${_id}`} ><div className="badge badge-outline"><button>Update</button></div></Link>
                    <Link to={`/Details/${_id}`} ><div className="badge badge-outline"><button>Details</button></div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GucciCard;