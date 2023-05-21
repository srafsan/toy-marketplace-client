import { Link } from "react-router-dom";
import "./DiscountBanner.css";

const DiscountBanner = () => {
  return (
    <div className='relative bg-[url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] h-auto lg:h-[400px] w-full py-24 bg-cover bg-no-repeat bg-center z-0'>
      <div className="absolute h-auto md:h-[400px] w-full  bg-overlay bg-[url('https://th.bing.com/th/id/R.7c9639b625adddc99e8cbc0f3c56d79e?rik=JuM0hmBAzyWWFw&pid=ImgRaw&r=0')] bg-no-repeat bg-center bottom-0 bg-contain z-[1]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="relative z-[2]">
          <img src="https://i.ibb.co/qgY1ZMX/cloud.png" alt="offer wave" />
          <div className="absolute top-6 left-12 ">
            <span className="text-heading font-Norican font-bold text-lg">
              Get Up to
            </span>
            <h2 className="text-4xl text-warning font-bold">
              50% <br />
              <span className="text-heading">OFF</span>
            </h2>
          </div>
        </div>
        <div className="text-left z-10">
          <h3 className="font-Norican text-white text-3xl lg:text-5xl mb-4 font-bold">
            Newly Arrived
          </h3>
          <h1 className="font-JosefinSans text-yellow-400 shadow-gray-600 uppercase text-5xl lg:text-8xl font-bold mb-5">
            Toys
          </h1>
          <Link
            className="ml-4 btn btn-warning text-black hover:text-white text-heading text-base border-none shadow-md shadow-gray-600 font-JosefinSans"
            to="/all-toys"
          >
            All Toys
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
