import { useContext } from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import DiscountBanner from "../DiscountBanner/DiscountBanner";
import GalleryAlt from "../Gallery/GalleryAlt";
import Review from "../Review/Review";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import { AuthContext } from "../../../Providers/AuthProvider";

const Home = () => {
  const { reload, setReload } = useContext(AuthContext);

  useTitle("RafToys | Home");

  if (reload) {
    setReload(false);
    location.reload();
  }

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
