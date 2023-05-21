import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardAlt from "../../Card/CardAlt";
import { useEffect, useState } from "react";

const ShopByCategory = () => {
  const [categoryToy, setCategoryToy] = useState("teddy_bear");
  const [toys, setToys] = useState([]);

  const url = `https://toy-marketplace-server-vert.vercel.app/toys-category?subcategory=${categoryToy}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [url]);

  return (
    <div className="my-16 mx-auto">
      <div className="mb-16 text-center">
        <h1 className="text-center text-5xl font-bold text-gray-500 pt-8 pb-14">
          SHOP BY CATEGORY
        </h1>
      </div>
      <div data-aos="fade-left">
        <Tabs>
          <TabList className="text-3xl font-semibold border-b-2 uppercase">
            <Tab onClick={() => setCategoryToy("teddy_bear")}>teddy bears</Tab>
            <Tab onClick={() => setCategoryToy("cat")}>cat</Tab>
            <Tab onClick={() => setCategoryToy("horse")}>horse</Tab>
          </TabList>

          <TabPanel>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5">
              {categoryToy === "teddy_bear" &&
                toys?.slice(0, 4).map((toy) => {
                  return <CardAlt key={toy._id} toy={toy} />;
                })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5">
              {categoryToy === "cat" &&
                toys?.slice(0, 4).map((toy) => {
                  return <CardAlt key={toy._id} toy={toy} />;
                })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5">
              {categoryToy === "horse" &&
                toys?.slice(0, 4).map((toy) => {
                  return <CardAlt key={toy._id} toy={toy} />;
                })}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
