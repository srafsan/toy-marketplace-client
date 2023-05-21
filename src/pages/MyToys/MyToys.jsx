import { FiSearch } from "react-icons/fi";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import MyToyRow from "./MyToyRow";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle("RafToys | My Toys");
  const [toys, setToys] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isSort, setIsSort] = useState("desc");

  const { user } = useContext(AuthContext);

  const url = `https://toy-marketplace-server-vert.vercel.app/toys-each?sellerEmail=${user.email}&sort=${isSort}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

  const sortAscending = () => {
    setIsSort("desc");
  };

  const sortDescending = () => {
    setIsSort("asc");
  };

  const handleUpdateToy = (event, id) => {
    console.log("Update Button Clicked");
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

    const updatedToy = {
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

    console.log(JSON.stringify(updatedToy));

    fetch(`https://toy-marketplace-server-vert.vercel.app/toys/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }

        fetch(url)
          .then((res) => res.json())
          .then((newData) => {
            setToys(newData);
            setIsModal(false);
          });
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-vert.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Toy has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-between py-6 px-6 bg-gray-50 border-b">
        <form className="w-full max-w-md">
          <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
            <FiSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
            <input
              type="text"
              name="search"
              placeholder="Search Toys"
              autoComplete="off"
              aria-label="Search Toys"
              className="w-full pl-10 pr-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
          </div>
        </form>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-warning m-1">
            Sort By
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={sortAscending}>Ascending</button>
            </li>
            <li>
              <button onClick={sortDescending}>Descending</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <MyToyRow
                key={toy._id}
                index={index}
                user={user}
                toy={toy}
                isModal={isModal}
                setIsModal={setIsModal}
                handleDelete={handleDelete}
                handleUpdateToy={handleUpdateToy}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
