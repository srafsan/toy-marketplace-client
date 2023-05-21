import { MdUpdate } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const MyToyRow = ({
  user,
  toy,
  index,
  handleDelete,
  handleUpdateToy,
  isModal,
  setIsModal,
}) => {
  return (
    <>
      <tr className="hover">
        <th>{index + 1}</th>
        <td>{toy.name}</td>
        <td>{toy.subcategory}</td>
        <td>$ {toy.price}</td>
        <td>{toy.quantity}</td>
        <td className="space-x-2">
          <label
            htmlFor={`my-modal-${index + 1}`}
            className="btn btn-error btn-outline text-xl"
            onClick={() => setIsModal(true)}
          >
            <MdUpdate />
          </label>
          <button
            onClick={() => handleDelete(toy._id)}
            className="btn btn-success btn-outline text-xl"
          >
            <BsTrash />
          </button>
        </td>

        {/* Modal code */}
        {isModal && (
          <div>
            <input
              type="checkbox"
              id={`my-modal-${index + 1}`}
              className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h2 className="text-3xl font-bold mt-4 mb-8">UPDATE TOY</h2>
                <form onSubmit={() => handleUpdateToy(event, toy._id)}>
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="toyName"
                      placeholder="Toy Name"
                      defaultValue={toy.name}
                      className="border border-gray-400 py-3 px-2 rounded-md"
                    />
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      defaultValue={toy.price}
                      className="border border-gray-400 py-3 px-2 rounded-md"
                    />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="seller"
                      placeholder={`${user.displayName}`}
                      value={`${user.displayName}`}
                      className="border border-red-400 py-3 px-2 rounded-md"
                      readOnly
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder={`${user.email}`}
                      value={`${user.email}`}
                      className="border border-red-400 py-3 px-2 rounded-md"
                      readOnly
                    />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-5">
                    <input
                      type="number"
                      name="rating"
                      placeholder="Rating (0-5)"
                      defaultValue={toy.rating}
                      className="border border-gray-400 py-3 px-2 rounded-md"
                    />
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Available Quantity"
                      defaultValue={toy.quantity}
                      className="border border-gray-400 py-3 px-2 rounded-md"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="mt-5">
                      <select
                        name="category"
                        id="category"
                        className="border border-gray-400 py-3 px-2 rounded-md w-full"
                        defaultValue={toy.subcategory}
                      >
                        <option value={toy.subcategory}>
                          Previous: {toy.subcategory}
                        </option>
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
                        defaultValue={toy.pictureURL}
                        className="border border-gray-400 py-3 px-2 rounded-md w-full"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      defaultValue={toy.description}
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
                {/* CROSS */}
                <div className="modal-action">
                  <label
                    htmlFor={`my-modal-${index + 1}`}
                    className="btn btn-circle mx-auto"
                  >
                    <ImCross />
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </tr>
    </>
  );
};

export default MyToyRow;
