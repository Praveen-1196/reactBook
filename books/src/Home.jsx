import React, { useEffect, useState } from "react";
import axios from "./axiosConfig";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const addToFavorites = (book) => {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favs.some((b) => b.id === book.id)) {
      favs.push(book);
      localStorage.setItem("favorites", JSON.stringify(favs));
    }
  };

  useEffect(() => {
    axios
      .get("https://book-ijqy.onrender.com/get_books/", { withCredentials: true })
      .then((res) => setBooks(res.data))
      .catch(() => navigate("/login"));
  }, []);

  return (
    <div>
      <h2 className="page-title">📚 Book Collection</h2>

      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.name}</h3>
            <p><b>Author:</b> {book.author}</p>
            <p><i>{book.quote}</i></p>
            {book.image && <img src={book.image} alt="" />}

            <button className="fav-btn" onClick={() => addToFavorites(book)}>
              ❤️ Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
