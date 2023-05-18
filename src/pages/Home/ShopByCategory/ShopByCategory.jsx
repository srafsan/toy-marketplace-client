import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardAlt from "../../Card/CardAlt";

const ShopByCategory = () => {
  return (
    <div className="my-16 max-w-screen-lg mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold">Shop By Category</h2>
      </div>
      <div data-aos="fade-left">
        <Tabs>
          <TabList className="text-3xl font-semibold border-b-2">
            <Tab>Bear Toys</Tab>
            <Tab>Deer Toys</Tab>
            <Tab>Cow Toys</Tab>
          </TabList>

          <TabPanel>
            <div className="mt-5 grid grid-cols-3 gap-5">
              <CardAlt />
              <CardAlt />
              <CardAlt />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-5 grid grid-cols-3 gap-5">
              <CardAlt />
              <CardAlt />
              <CardAlt />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-5 grid grid-cols-3 gap-5">
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
