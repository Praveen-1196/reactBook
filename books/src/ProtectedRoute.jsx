import React, { useEffect, useState } from "react";
import axios from "./axiosConfig";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    axios
      .get("https://book-ijqy.onrender.com/books/", {
        withCredentials: true, // 🔥 SEND COOKIE
      })
      .then(() => setAllowed(true))
      .catch(() => setAllowed(false));
  }, []);

  if (allowed === null)
    return <h3 style={{ textAlign: "center" }}>Checking access...</h3>;

  if (allowed === false) return <Navigate to="/login" />;

  return children;
}

export default ProtectedRoute;
