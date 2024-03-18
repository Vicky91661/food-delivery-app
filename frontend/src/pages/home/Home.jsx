import React from 'react'
import Navbar from '../../components/navabar/Navbar'
import Herosection from './herosection/Herosection'
import Indian from './indianSection/Indian'
import Chinese from './chinese/Chinese'
import Footer from '../../components/footer/Footer'
import Snacks from './snacks/Snacks'
function Home() {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Indian/>
        <Chinese/>
        <Snacks/>
        <Footer/>
    </div>
  )
}

export default Home