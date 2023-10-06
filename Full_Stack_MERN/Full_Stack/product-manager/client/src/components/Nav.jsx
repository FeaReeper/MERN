import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-center w-50 mx-auto p-3 '>
      <div className='w-50 d-flex justify-content-between mx-auto'>
        <Link to={'/'}>Add a Product</Link>
        <Link to={'/allProducts'}>All Products</Link>
      </div>
    </div>
  )
}

export default Nav