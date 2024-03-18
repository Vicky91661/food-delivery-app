import React from 'react'
import Navbar from '../../components/navabar/Navbar';

import Footer from '../../components/footer/Footer';
import AllProducts from './AllProducts';

function Product() {

  return (
    <div >
      <Navbar/>
      <AllProducts/>
      <Footer/>
    </div>
  )
}

export default Product