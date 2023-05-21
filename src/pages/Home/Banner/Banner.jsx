import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh] bg-opacity-25"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-neutral-content flex flex-col-reverse lg:flex-row gap-2">
        <div className="text-center lg:text-left space-y-11">
          <h1 className="text-7xl font-bold">WELCOME</h1>
          <p className="max-w-2xl text-xl">
            Welcome to our magical toy wonderland! Step into a world of
            imagination and fun at RAFTOYS. Discover an enchanting collection of
            toys, games, and delights that will bring endless joy to your little
            ones. Get ready to embark on a delightful adventure filled with
            laughter, creativity, and unforgettable memories. Explore our aisles
            and let the magic begin!
          </p>
          <Link to="all-toys" className="btn btn-warning">
            SHOP NOW
          </Link>
        </div>
        <div>
          <img
            src="https://th.bing.com/th/id/R.fc646a0d3892391463ee3c8c305329d1?rik=b842NHRKiZRmuw&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
