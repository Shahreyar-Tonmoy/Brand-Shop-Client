/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";

const MyCartData = ({ MyCart,myCartData,setMyCartData }) => {

    

    const { name, brand, photoURL, type, price, shortDescription, rating, _id } = MyCart

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://adidas-server-side.vercel.app/mycart/${_id}`,{
                    method :"DELETE"
                }
                
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                                
                            )
                            const remining = myCartData.filter(cart => cart._id !== _id )
                            setMyCartData(remining)
                            
                            
                            
                        }
                       
                        
                        
                    })
                    
            }
        })

    }





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

export default MyCartData;