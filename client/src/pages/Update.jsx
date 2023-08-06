import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const [error, setError] = useState(null);
  const [input, setInput] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };
  // axios
  //   .post("http://localhost:8800/books", input)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, input);
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="form">
      <h1>Update Book</h1>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        placeholder="description"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="price"
        onChange={handleChange}
      />
      <input
        type="text"
        name="cover"
        placeholder="cover"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className="formButton">
        Update
      </button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
}

export default Update;
