import React, { useEffect, useState } from "react";
import axios from "./axiosConfig";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://book-ijqy.onrender.com/get_books/")
      .then((res) => setBooks(res.data))
      .catch(() => navigate("/login"));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Book Collection</h2>

      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h3>{book.name}</h3>
          <p><b>Author:</b> {book.author}</p>
          <p><i>{book.quote}</i></p>
          {book.image && <img src={book.image} width="150" />}
        </div>
      ))}
    </div>
  );
}

export default Home;
