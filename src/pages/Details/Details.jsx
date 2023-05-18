const Details = () => {
  return (
    <div className="grid grid-cols-2 gap-10 my-16">
      <div>
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1548576987-af36a2e04bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="space-y-5">
        <h2 className="text-4xl font-bold">Toy Name: Cow Toy</h2>
        <h3 className="text-2xl">Seller Name: Rafsan</h3>
        <h3 className="text-2xl">Seller Email: rafsan@gmail.com</h3>
        <h3 className="text-2xl">Price: $800</h3>
        <h3 className="text-2xl">Rating: 4.5</h3>
        <h3 className="text-2xl">Available Quantity: 842</h3>
        <h3 className="text-3xl font-bold">Detail Description:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea
          aperiam reprehenderit quasi possimus adipisci, ut accusamus aut totam
          debitis!
        </p>
      </div>
    </div>
  );
};

export default Details;
