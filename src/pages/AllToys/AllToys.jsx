import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

import { FiSearch } from "react-icons/fi";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToys = () => {
  const { user } = useContext(AuthContext);

  const defaultLimit = 20;
  const toys = useLoaderData();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useTitle("RafToys | All Toys");

  const notify = () => toast("You have to log in first to view details");

  const handleOnClick = (toy) => {
    !user ? notify() : navigate(`/details/${toy._id}`);
    setTimeout(function () {
      navigate(`/details/${toy._id}`);
    }, 1000);
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
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Seller</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .slice(0, defaultLimit)
              .map((toy, index) => (
                <tr key={toy._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{toy.name}</td>
                  <td>{toy.subcategory}</td>
                  <td>{toy.sellerName}</td>
                  <td>$ {toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleOnClick(toy)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default AllToys;
