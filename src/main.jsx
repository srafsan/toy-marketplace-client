import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";

import "./index.css";
import AuthProvider from "./Providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-2xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
