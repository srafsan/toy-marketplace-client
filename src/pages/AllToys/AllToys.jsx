import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

const AllToys = () => {
  const toys = useLoaderData();
  const [search, setSearch] = useState("");

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
              .map((toy, index) => (
                <tr key={toy._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{toy.sellerName}</td>
                  <td>{toy.name}</td>
                  <td>$ {toy.price}</td>
                  <td>{toy.availableQuantity}</td>
                  <td>
                    <Link
                      to={`/details/${toy._id}`}
                      className="btn btn-warning"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
