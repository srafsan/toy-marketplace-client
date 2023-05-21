import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  useTitle("RafToys | Add Toy");
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const pictureURL = form.photo.value;
    const name = form.toyName.value;
    const sellerName = form.seller.value;
    const sellerEmail = form.email.value;
    const subcategory = form.category.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const availableQuantity = parseFloat(form.quantity.value);
    const description = form.description.value;

    const newToy = {
      pictureURL,
      name,
      sellerName,
      sellerEmail,
      subcategory,
      price,
      rating,
      quantity: availableQuantity,
      description,
    };

    fetch("https://toy-marketplace-server-vert.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="min-h-screen py-14 bg-slate-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/flagged/photo-1578477305564-0f62bd8dddd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
            }}
          >
            <h1 className="text-5xl font-bold text-white mb-3">WELCOME</h1>
            <div>
              <p className="text-white">ADD SOMETHING</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl font-bold mb-4">ADD TOY</h2>
            <p className="mb-4">Add a toy. Its free and only takes a minute</p>
            <form onSubmit={handleAddToy}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="toyName"
                  placeholder="Toy Name"
                  className="border border-gray-400 py-3 px-2 rounded-md"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="border border-gray-400 py-3 px-2 rounded-md"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="seller"
                  placeholder={`${user.displayName}`}
                  value={`${user.displayName}`}
                  className="border border-gray-400 py-3 px-2 rounded-md"
                  readOnly
                />
                <input
                  type="text"
                  name="email"
                  placeholder={`${user.email}`}
                  value={`${user.email}`}
                  className="border border-gray-400 py-3 px-2 rounded-md"
                  readOnly
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating (0-5)"
                  className="border border-gray-400 py-3 px-2 rounded-md"
                />
                <input
                  type="number"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="border border-gray-400 py-3 px-2 rounded-md"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="mt-5">
                  <select
                    name="category"
                    id="category"
                    className="border border-gray-400 py-3 px-2 rounded-md w-full"
                  >
                    <option value="teddy_bear">Teddy Bear</option>
                    <option value="cat">Cat</option>
                    <option value="horse">Horse</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="border border-gray-400 py-3 px-2 rounded-md w-full"
                  />
                </div>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="border border-gray-400 py-3 px-2 rounded-md w-full"
                />
              </div>

              <div className="mt-5">
                <input
                  type="submit"
                  value="Add Toy"
                  className="btn btn-warning w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
