import React, { useEffect, useState } from "react";
import axios from "axios";

function books() {
  // useEffect(() => {
  //   fetch("http://localhost:8800/books")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const [books, setBooks] = useState([]);

  console.log(books);

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

  return <div>books</div>;
}

export default books;
