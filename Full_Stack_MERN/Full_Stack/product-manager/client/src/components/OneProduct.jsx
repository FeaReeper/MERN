import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const OneProduct = () => {
  const [ product, setProduct ] = useState({});
  const navigate = useNavigate()
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/oneProduct/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/deleteOneProduct/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    navigate('/allProducts')
  };

  return (
    <div className="text-center">
      <h2>Item: {product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default OneProduct;
