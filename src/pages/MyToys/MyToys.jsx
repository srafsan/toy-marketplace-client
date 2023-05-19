import { MdUpdate } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/toys-each?sellerEmail=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

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
              <a>Ascending</a>
            </li>
            <li>
              <a>Descending</a>
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
              <tr key={toy._id} className="hover">
                <th>{index + 1}</th>
                <td>{toy.name}</td>
                <td>{toy.subcategory}</td>
                <td>$ {toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td className="space-x-2">
                  <button className="btn btn-error btn-outline text-xl">
                    <MdUpdate />
                  </button>
                  <Link
                    to="/details"
                    className="btn btn-success btn-outline text-xl"
                  >
                    <BsTrash />
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

export default MyToys;
