import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function books() {
  // useEffect(() => {
  //   fetch("http://localhost:8800/books")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8800/books");
        setBooks(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Gio Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <Link
              to={`/update/${book.id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="update">Update</button>
            </Link>
          </div>
        ))}
      </div>
      <button className="formButton">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
}

export default books;
