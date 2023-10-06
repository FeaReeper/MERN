import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  const [error, setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post("http://localhost:8000/api/newProduct",
      {
        title: product.title,
        price: product.price,
        description: product.description,
      })
        .then((res) => {
          console.log(res.data)
          navigate('/allProducts')
        })
        .catch((err) => {
          console.log(err.response.data.error.errors)
          setError(err.response.data.error.errors)
        })
    // setProduct({
    //   title: "",
    //   price: "",
    //   description: "",
    // });
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="text-center w-25 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              className="form-control"
              type="text"
              id="title"
              name="title"
              value={product.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="price">Price:</label>
            <input
              className="form-control"
              type="text"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="description">Description:</label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              value={product.description}
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary mt-3">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
