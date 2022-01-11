import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewLetter from '../components/NewLetter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="container">
            <Announcement/>
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <NewLetter />
            <Footer />
        </div>
    )
}

export default Home
