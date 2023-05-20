const Blogs = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Blog Q/A</h1>
      <div>
        <h2 className="text-2xl">
          Q-1: What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p className="mt-2 mb-4">
          Access token is a credential used to access protected resources,
          typically issued by an authentication server. Refresh token is used to
          obtain a new access token without requiring the user to
          reauthenticate. They should be securely stored on the client-side,
          such as in an HTTP-only cookie or a secure storage mechanism.
        </p>
        <h2 className="text-2xl">Q-2: Compare SQL and NoSQL databases?</h2>
        <p className="mt-2 mb-4">
          SQL databases are structured, relational databases that use structured
          query language for defining and manipulating the data. NoSQL databases
          are non-relational databases that provide flexibility and scalability,
          often used for handling large amounts of unstructured or
          semi-structured data.
        </p>
        <h2 className="text-2xl">Q-3: What is express js? What is Nest JS?</h2>
        <p className="mt-2 mb-4">
          Express.js is a minimal and flexible web application framework for
          Node.js, used for building web applications and APIs. Nest.js is a
          progressive TypeScript framework for building efficient and scalable
          server-side applications, built on top of Express.js.
        </p>
        <h2 className="text-2xl">
          Q-4: What is MongoDB aggregate and how does it work?
        </h2>
        <p className="mt-2 mb-4">
          MongoDB's aggregate is a method for performing advanced data
          aggregation operations in MongoDB. It allows you to process and
          transform data using a pipeline of stages, such as filtering,
          grouping, sorting, and applying various operators, to retrieve the
          desired results from the database.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
