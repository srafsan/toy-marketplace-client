import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card w-96 bg-base-100 border-2">
      <figure className="px-2 pt-5">
        <img
          src="https://images.unsplash.com/photo-1548576987-af36a2e04bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Shoes"
          className="rounded-md"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title text-3xl font-bold">Cow Toy</h2>
        <p className="text-xl">Price: $100</p>
        <p>Rating: 4.5</p>
        <div className="card-actions">
          <Link to="/details" className="btn btn-warning">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
