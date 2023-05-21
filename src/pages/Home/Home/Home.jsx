import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import DiscountBanner from "../DiscountBanner/DiscountBanner";
import GalleryAlt from "../Gallery/GalleryAlt";
import Review from "../Review/Review";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("RafToys | Home");

  return (
    <div>
      <Banner />
      <GalleryAlt />
      <ShopByCategory />
      <DiscountBanner />
      <Review />
    </div>
  );
};

export default Home;
