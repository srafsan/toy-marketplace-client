import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardAlt from "../../Card/CardAlt";

const ShopByCategory = () => {
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
            <Tab>teddy bears</Tab>
            <Tab>cat</Tab>
            <Tab>horse</Tab>
          </TabList>

          <TabPanel>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5">
              <CardAlt />
              <CardAlt />
              <CardAlt />
              <CardAlt />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5">
              <CardAlt />
              <CardAlt />
              <CardAlt />
              <CardAlt />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5">
              <CardAlt />
              <CardAlt />
              <CardAlt />
              <CardAlt />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
