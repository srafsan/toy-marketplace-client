import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("RafToys | Home");

  return (
    <div>
      <Banner />
      <Gallery />
      <ShopByCategory />
    </div>
  );
};

export default Home;
