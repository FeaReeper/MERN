import React, { useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


const DisplayAll = (props) => {
  const { products, setProducts } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allProducts")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="text-center w-25 mx-auto">
      <h2 className="mt-5">All Products</h2>
      {
        products.map((product) => {
          return(
          <div key={product._id} className="m-5">
            <h4>{product.title}</h4>
            <div className="w-50 mx-auto d-flex justify-content-between ">
              <Link to={`/product/${product._id}`}>See Details</Link>
              <Link to={`/product/update/${product._id}`}>Update</Link>
            </div>
          </div>
          )
        })
      }
    </div>
  );
};

export default DisplayAll;
