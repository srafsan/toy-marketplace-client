import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Details = () => {
  useTitle("RafToys | Details");
  const detailLoader = useLoaderData();
  const {
    pictureURL,
    name,
    sellerName,
    sellerEmail,
    subcategory,
    price,
    rating,
    quantity,
    description,
  } = detailLoader;

  return (
    <div className="grid grid-cols-2 gap-10 my-16">
      <div>
        <img className="rounded-lg" src={pictureURL} alt="" />
      </div>
      <div className="space-y-5">
        <h2 className="text-4xl font-bold">Toy Name: {name}</h2>
        <h3 className="text-2xl">Seller Name: {subcategory}</h3>
        <h3 className="text-2xl">Seller Name: {sellerName}</h3>
        <h3 className="text-2xl">Seller Email: {sellerEmail}</h3>
        <h3 className="text-2xl">Price: {price}</h3>
        <h3 className="text-2xl">Rating: {rating}</h3>
        <h3 className="text-2xl">Available Quantity: {quantity}</h3>
        <h3 className="text-3xl font-bold">Detail Description:</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
