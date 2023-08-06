import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
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
      await axios.post("http://localhost:8800/books", input);
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="form">
      <h1>Add Book</h1>
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
      {error && error}
      <button onClick={handleSubmit}>Add Book</button>
    </div>
  );
}

export default Add;
