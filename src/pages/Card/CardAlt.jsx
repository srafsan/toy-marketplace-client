import { BsEyeFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CardAlt = () => {
  return (
    <div className="card">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1548576987-af36a2e04bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />

      <div className="p-5 flex flex-col gap-3">
        {/* badge */}
        <div className="flex items-center gap-2">
          <span className="badge">stock ready</span>
          <span className="badge">official store</span>
        </div>

        {/* Product Title */}
        <h2 className="product-title" title="Best Cow Toy">
          Best Cow Toy
        </h2>

        {/* Product Price */}
        <div>
          <span className="text-xl font-bold">$ 400</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">$ 100</span>
            <span className="discount-percent">save 20%</span>
          </div>
        </div>

        {/* Product rating */}
        <span className="flex items-center mt-1 text-warning">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        {/* Product Action Button */}
        <div className="mt-5 flex gap-2">
          <Link to="/add-toy" className="btn btn-warning">
            Add to Cart
          </Link>
          <button className="btn btn-error btn-outline text-xl">
            <AiFillHeart />
          </button>
          <Link to="/details" className="btn btn-success btn-outline text-xl">
            <BsEyeFill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardAlt;
