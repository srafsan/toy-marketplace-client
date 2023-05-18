const AddToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen py-14 bg-slate-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url("https://images.unsplash.com/flagged/photo-1578477305564-0f62bd8dddd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
            }}
          >
            <h1 className="text-5xl font-bold text-white mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto qui facilis quisquam temporibus minus fugit id quidem
                molestias suscipit. Eos?
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl font-bold mb-4">ADD PRODUCT</h2>
            <p className="mb-4">Add a toy. Its free and only takes a minute</p>
            <form onSubmit={handleAddToy}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Toy Name"
                  className="border border-gray-400 py-3 px-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Price"
                  className="border border-gray-400 py-3 px-2 rounded-md"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Seller Name"
                  className="border border-gray-400 py-3 px-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Seller Email"
                  className="border border-gray-400 py-3 px-2 rounded-md"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <input
                  type="number"
                  placeholder="Rating"
                  className="border border-gray-400 py-3 px-2 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Available Quantity"
                  className="border border-gray-400 py-3 px-2 rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Description"
                  className="border border-gray-400 py-3 px-2 rounded-md w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="border border-gray-400 py-3 px-2 rounded-md w-full"
                />
              </div>

              <div className="mt-5">
                <input
                  type="submit"
                  value="Add Product"
                  className="btn btn-warning w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
