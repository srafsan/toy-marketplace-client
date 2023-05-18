const GalleryCard = () => {
  return (
    <div
      className="hero min-h-[40vh]"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1562040506-a9b32cb51b94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Teddy Bear</h1>
          <p className="mb-5">5 Items</p>
          <button className="btn btn-warning">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
