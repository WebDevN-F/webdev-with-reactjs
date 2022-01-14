import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewLetter from '../components/NewLetter'
import Footer from '../components/Footer'

import styled from 'styled-components';

const Container = styled.div`
    
`

const Home = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <NewLetter />
            <Footer />
        </Container>
    )
}

export default Home
