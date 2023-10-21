/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import Swal from 'sweetalert2'


const Addproduct = () => {

    const handleSubmit = e => {
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


        fetch('https://adidas-server-side.vercel.app/product', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    e.target.reset()

                }
            })

    }




    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/QYK0z9t/Blue-Coming-Soon-Banner-Landscape.png)'}}>
            <div class="hero-overlay bg-opacity-20"></div>


            <form onSubmit={handleSubmit} className="card-body  glass rounded-md lg:mx-52   ">
                <div className="text-center font-bold text-white">
                    <h1 className="lg:text-5xl">
                        Add New Product
                    </h1>
                    <p className="lg:px-48 mt-5 text-sm">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. </p>
                </div>
                <div className="lg:flex mx-auto gap-9 mt-10">
                    <div className="">
                        <label className="label">
                            <span className="text-lg ">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter product name" className="input input-bordered lg:w-[500px]" required />
                        <label className="label">
                            <span className="text-lg">Brand Name</span>
                        </label>
                        {/* <input name="brand" type="text" placeholder="Enter Brand Name" className="input input-bordered w-[500px]" required /> */}

                        <select name='brand'  className="select select-bordered lg:w-[500px] ">
                            <option disabled selected>Brand Name</option>
                            <option>Adidas</option>
                            <option>Gucci</option>
                            <option>Levi's</option>
                            <option>Zara</option>
                            <option>H&M</option>
                            <option>Nike</option>
                        </select>





                        <label className="label">
                            <span className="text-lg">Type</span>
                        </label>
                        <input name="type" type="text" placeholder="Enter Type" className="input input-bordered lg:w-[500px]" required />
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="text-lg">Price</span>
                        </label>
                        <input name="price" type="text" placeholder="Enter Price" className="input input-bordered lg:w-[500px]" required />
                        <label className="label">
                            <span className="text-lg">Short description</span>
                        </label>
                        <input name="shortDescription" type="text" placeholder="Enter Short description" className="input input-bordered lg:w-[500px]" required />
                        <label className="label">
                            <span className="text-lg">Rating</span>
                        </label>
                        <input name="rating" type="text" placeholder="Enter Rating" className="input input-bordered lg:w-[500px]" required />
                    </div>

                </div>
                <label className="label">
                    <span className="text-lg">Photo</span>
                </label>


                <input name="photoURL" type="text" placeholder="Enter photo URL" className="input input-bordered" required />
                <div className="form-control mt-6">
                    <button className="btn text-white border-none hover:bg-[#81246A] bg-[#81246A]">Add Product</button>
                </div>
            </form>

        </div>
    );
};

export default Addproduct;