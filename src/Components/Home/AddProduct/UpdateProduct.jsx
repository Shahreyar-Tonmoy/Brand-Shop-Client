/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const updateData = useLoaderData()
    const { name, brand, photoURL, type, price, shortDescription, rating, _id } = updateData


    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const shortDescription = form.shortDescription.value
        const rating = form.rating.value
        const photoURL = form.photoURL.value
        const products = { name, brand, type, price, shortDescription, rating, photoURL }
        console.log(products);


        fetch(`http://localhost:5000/product/${_id}`, {
        method: 'PUT',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(products)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Succesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  e.target.reset()
                  
            }
        })

    }



    return (
        <div>


            <form onSubmit={handleUpdate} className="card-body bg-[#e264c2cd] rounded-md mx-52 ">
                <div className="text-center font-bold text-white">
                    <h1 className="text-5xl">
                        Update Product : {name}
                    </h1>
                    <p className="px-48 mt-5 text-sm">{shortDescription}</p>
                </div>
                <div className="flex gap-9 mt-10">
                    <div className="">
                        <label className="label">
                            <span className="text-lg ">Name</span>
                        </label>
                        <input name="name" type="text" defaultValue={name} placeholder="Enter product name" className="input input-bordered w-[500px]" required />
                        <label className="label">
                            <span className="text-lg">Brand Name</span>
                        </label>
                        <input name="brand" type="text" defaultValue={brand} placeholder="Enter Brand Name" className="input input-bordered w-[500px]" required />
                        <label className="label">
                            <span className="text-lg">Type</span>
                        </label>
                        <input name="type" type="text" defaultValue={type} placeholder="Enter Type" className="input input-bordered w-[500px]" required />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="text-lg">Price</span>
                        </label>
                        <input name="price" type="text" defaultValue={price} placeholder="Enter Price" className="input input-bordered w-[500px]" required />
                        <label className="label">
                            <span className="text-lg">Short description</span>
                        </label>
                        <input name="shortDescription" type="text" defaultValue={shortDescription} placeholder="Enter Short description" className="input input-bordered w-[500px]" required />
                        <label className="label">
                            <span className="text-lg">Rating</span>
                        </label>
                        <input name="rating" type="text" defaultValue={rating} placeholder="Enter Rating" className="input input-bordered w-[500px]" required />
                    </div>

                </div>
                <label className="label">
                    <span className="text-lg">Photo</span>
                </label>
                <input name="photoURL" type="text" defaultValue={photoURL} placeholder="Enter photo URL" className="input input-bordered" required />
                <div className="form-control mt-6">
                    <button className="btn text-white border-none hover:bg-[#81246A] bg-[#81246A]">Update</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateProduct;