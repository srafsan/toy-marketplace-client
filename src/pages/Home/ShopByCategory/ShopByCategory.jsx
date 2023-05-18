import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "../../Card/Card";

const ShopByCategory = () => {
  return (
    <div className="my-16">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold">Shop By Category</h2>
      </div>
      <div>
        <Tabs>
          <TabList className="text-3xl font-semibold border-b-2">
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3">
              <Card />
              <Card />
              <Card />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3">
              <Card />
              <Card />
              <Card />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
