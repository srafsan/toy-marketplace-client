import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const pictureURL = form.photo.value;
    const name = form.toyName.value;
    const sellerName = form.seller.value;
    const sellerEmail = form.email.value;
    const subcategory = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.quantity.value;
    const description = form.description.value;

    const newToy = {
      pictureURL,
      name,
      sellerName,
      sellerEmail,
      subcategory,
      price,
      rating,
      availableQuantity,
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
          alert("Toy Added successfully");
        }
        form.reset();
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Update TOY</h2>
      <form onSubmit={handleUpdateToy}>
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
            value="Update Toy"
            className="btn btn-warning w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
