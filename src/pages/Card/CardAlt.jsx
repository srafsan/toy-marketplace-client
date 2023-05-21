import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { BsEyeFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CardAlt = ({ toy }) => {
  const discount = 0.2; // 20%
  const { _id, name, price, rating, pictureURL } = toy;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const notify = () => {
    toast.success("Thank you for liking.");
    setIsButtonDisabled(true);
  };

  return (
    <div className="card w-full">
      <img className="w-full h-[40vh] object-cover" src={pictureURL} alt="" />

      <div className="p-5 flex flex-col gap-3">
        {/* badge */}
        <div className="flex items-center gap-2">
          <span className="badge">stock ready</span>
          <span className="badge">official store</span>
        </div>

        {/* Product Title */}
        <h2 className="product-title" title="Best Cow Toy">
          {name}
        </h2>

        {/* Product Price */}
        <div>
          <span className="text-xl font-bold">$ {price}</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">
              $ {Math.floor(price * discount)}
            </span>
            <span className="discount-percent">save {discount * 100}%</span>
          </div>
        </div>

        {/* Product rating */}
        <span className="flex items-center mt-1 text-warning">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <span className="text-xs ml-2 text-gray-500">{rating} reviews</span>
        </span>

        {/* Product Action Button */}
        <div className="mt-5 flex gap-2">
          <Link to="/add-toy" className="btn btn-warning">
            All Toys
          </Link>
          <button
            className="btn btn-error btn-outline text-xl"
            onClick={notify}
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <Link
            to={`/details/${_id}`}
            className="btn btn-success btn-outline text-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CardAlt;
