import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Update = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });



  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/oneProduct/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8000/api/updateProduct/${id}`, product)
        .then((res) => {
          console.log(res.data)
          navigate('/allProducts')
        })
        .catch((err) => {
          console.log(err.response.data.error.errors)
          setError(err.response.data.error.errors)
        })
  }

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
      

  return (
    <div className='text-center'>
      <h2>Edit Product</h2>
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
            <button className="btn btn-primary mt-3">Update</button>
          </div>
        </form>
      </div>

    </div>
  )
}


export default Update