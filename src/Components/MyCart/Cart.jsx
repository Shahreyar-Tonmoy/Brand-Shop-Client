import React from 'react';

const Cart = () => {

    const { name, brand, photoURL, type, price, shortDescription, rating, _id } = campaigns

    return (
        <div>
            <div className="card  card-side bg-base-100 shadow-xl">
                <figure className="w-60 h-60"><img src={photoURL} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Brand: {brand}</h2>
                    <h2 className="card-title">Price: ${price}</h2>

                    <div className="card-actions justify-end">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;