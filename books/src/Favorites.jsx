import React, { useEffect, useState } from "react";
import "./Styles.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const removeFavorite = (id) => {
    const updated = favorites.filter((b) => b.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <div>
      <h2 className="page-title">❤️ Your Favorites</h2>

      <div className="book-grid">
        {favorites.length === 0 && (
          <p style={{ textAlign: "center", opacity: 0.6 }}>No favorites yet.</p>
        )}

        {favorites.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.name}</h3>
            <p><b>Author:</b> {book.author}</p>
            <p><i>{book.quote}</i></p>
            {book.image && <img src={book.image} alt="" />}

            <button className="remove-btn" onClick={() => removeFavorite(book.id)}>
              💔 Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
